// 학습 시간 추적 유틸리티
import { useEffect, useRef, useState } from 'react';

export interface StudyTime {
  topicId: string;
  totalMinutes: number;
  lastStudied: string;
}

const STORAGE_KEY = 'math_study_times';

// localStorage에서 학습 시간 데이터 로드
export function getStudyTimes(): StudyTime[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// localStorage에 학습 시간 데이터 저장
export function saveStudyTimes(studyTimes: StudyTime[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studyTimes));
    
    // 같은 탭에서의 변화를 감지하기 위한 사용자 정의 이벤트 발생
    window.dispatchEvent(new Event('localStorageChange'));
    
    console.log('Study times saved to localStorage:', studyTimes);
  } catch (error) {
    console.error('Failed to save study times:', error);
  }
}

// 특정 토픽의 학습 시간 가져오기
export function getTopicStudyTime(topicId: string): number {
  const studyTimes = getStudyTimes();
  const topicTime = studyTimes.find(time => time.topicId === topicId);
  return topicTime ? topicTime.totalMinutes : 0;
}

// 학습 시간 업데이트 (초 단위로 업데이트하도록 변경)
export function updateStudyTime(topicId: string, additionalSeconds: number): void {
  const studyTimes = getStudyTimes();
  const existingIndex = studyTimes.findIndex(time => time.topicId === topicId);
  
  // 초를 분으로 변환 (1분 미만도 기록하기 위해 소수점 반올림)
  const additionalMinutes = Math.max(Math.round(additionalSeconds / 60), 1); // 최소 1분으로 기록
  
  if (existingIndex >= 0) {
    studyTimes[existingIndex].totalMinutes += additionalMinutes;
    studyTimes[existingIndex].lastStudied = new Date().toISOString();
  } else {
    studyTimes.push({
      topicId,
      totalMinutes: additionalMinutes,
      lastStudied: new Date().toISOString()
    });
  }
  
  saveStudyTimes(studyTimes);
  console.log(`Updated study time for ${topicId}: +${additionalMinutes} minutes, total: ${studyTimes.find(st => st.topicId === topicId)?.totalMinutes || 0} minutes`);
}

// 즉시 접속 기록을 남기는 함수 (1분 미만이라도 기록)
export function recordStudyAccess(topicId: string): void {
  console.log(`🔵 recordStudyAccess called for: ${topicId}`);
  const studyTimes = getStudyTimes();
  console.log(`🔵 Current study times before record:`, studyTimes);
  
  const existingIndex = studyTimes.findIndex(time => time.topicId === topicId);
  
  if (existingIndex >= 0) {
    // 이미 기록이 있으면 lastStudied만 업데이트
    studyTimes[existingIndex].lastStudied = new Date().toISOString();
    console.log(`🔵 Updated existing record for ${topicId}`);
  } else {
    // 새로운 기록 생성 (0분이라도 접속 기록 남김)
    studyTimes.push({
      topicId,
      totalMinutes: 0,
      lastStudied: new Date().toISOString()
    });
    console.log(`🔵 Created new record for ${topicId}`);
  }
  
  console.log(`🔵 Study times before save:`, studyTimes);
  saveStudyTimes(studyTimes);
  console.log(`🔵 recordStudyAccess completed for ${topicId}`);
}

// 시간을 포맷팅 (분 → "X분" 또는 "X시간 Y분")
export function formatStudyTime(minutes: number, t?: (key: string) => string): string {
  // 기본 번역 함수 (fallback)
  const defaultTranslate = (key: string) => {
    const translations: { [key: string]: string } = {
      'time.minutes': '분',
      'time.hours': '시간'
    };
    return translations[key] || key;
  };
  
  const translate = t || defaultTranslate;
  
  if (minutes < 60) {
    return `${minutes}${translate('time.minutes')}`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours}${translate('time.hours')}`;
    } else {
      return `${hours}${translate('time.hours')} ${remainingMinutes}${translate('time.minutes')}`;
    }
  }
}

// 학습 시간 추적을 위한 실제 React 훅
export function useStudyTimeTracker(topicId: string) {
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  // 컴포넌트 마운트 시 추적 시작
  useEffect(() => {
    console.log(`🟢 useStudyTimeTracker effect called with topicId: ${topicId}`);
    if (!topicId) {
      console.log(`🟢 No topicId provided, skipping tracking`);
      return;
    }

    console.log(`🟢 Starting time tracking for topic: ${topicId}`);
    
    // 즉시 접속 기록 남기기
    recordStudyAccess(topicId);
    
    startTimeRef.current = Date.now();
    
    // 초기 저장된 시간 로드
    const storedMinutes = getTopicStudyTime(topicId);
    console.log(`🟢 Loaded stored minutes for ${topicId}: ${storedMinutes}`);
    setCurrentMinutes(storedMinutes);

    // 매초마다 현재 시간 업데이트
    intervalRef.current = setInterval(() => {
      if (startTimeRef.current) {
        const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const elapsedMinutes = Math.floor(elapsedSeconds / 60);
        setCurrentMinutes(storedMinutes + elapsedMinutes);
        // console.log(`🟢 Current minutes for ${topicId}: ${storedMinutes + elapsedMinutes}`);
      }
    }, 1000) as unknown as number;

    // cleanup: 컴포넌트 언마운트 시 시간 저장
    return () => {
      console.log(`🟢 Cleanup: stopping time tracking for topic: ${topicId}`);
      if (startTimeRef.current && intervalRef.current) {
        const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        console.log(`🟢 Elapsed seconds for ${topicId}: ${elapsedSeconds}`);
        if (elapsedSeconds > 0) {
          updateStudyTime(topicId, elapsedSeconds);
        }
        clearInterval(intervalRef.current);
        console.log(`🟢 Stopped time tracking for topic: ${topicId}, elapsed: ${elapsedSeconds} seconds`);
      }
    };
  }, [topicId]);

  return {
    currentMinutes,
    formatCurrentTime: () => formatStudyTime(currentMinutes)
  };
}

// 학습 시간 초기화 함수들
export function clearAllStudyTimes(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('localStorageChange'));
    console.log('🔴 All study times cleared');
  } catch (error) {
    console.error('Failed to clear study times:', error);
  }
}

export function clearTopicStudyTime(topicId: string): void {
  try {
    const studyTimes = getStudyTimes();
    const filteredTimes = studyTimes.filter(time => time.topicId !== topicId);
    saveStudyTimes(filteredTimes);
    console.log(`🔴 Study time cleared for topic: ${topicId}`);
  } catch (error) {
    console.error(`Failed to clear study time for topic ${topicId}:`, error);
  }
}

// 토픽 이름 매핑
export function getTopicName(topicId: string): string {
  switch (topicId) {
    case 'pythagorean-theorem': return '피타고라스 정리';
    case 'trigonometric-ratios': return '삼각비';
    case 'congruence-similarity': return '합동과 닮음';
    case 'volume-surface-area': return '입체도형';
    case 'probability': return '확률';
    case 'statistics': return '통계';
    case 'random-practice': return '랜덤 연습';
    default: return '수학';
  }
} 