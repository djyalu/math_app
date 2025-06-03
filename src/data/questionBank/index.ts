import { PracticeQuestion, SubjectiveQuestion } from '../types';
import { pythagoreanObjectiveQuestions, pythagoreanSubjectiveQuestions } from './pythagorean';
import { trigonometryObjectiveQuestions, trigonometrySubjectiveQuestions } from './trigonometry';
import { congruenceSimilarityObjectiveQuestions, congruenceSimilaritySubjectiveQuestions } from './congruenceSimilarity';
import { volumeObjectiveQuestions, volumeSubjectiveQuestions } from './volume';
import { probabilityObjectiveQuestions, probabilitySubjectiveQuestions } from './probability';
import { statisticsObjectiveQuestions, statisticsSubjectiveQuestions } from './statistics';

// 토픽별 문제은행 정의
export const questionBanks = {
  'pythagorean-theorem': {
    objective: pythagoreanObjectiveQuestions,
    subjective: pythagoreanSubjectiveQuestions
  },
  'trigonometric-ratios': {
    objective: trigonometryObjectiveQuestions,
    subjective: trigonometrySubjectiveQuestions
  },
  'congruence-similarity': {
    objective: congruenceSimilarityObjectiveQuestions,
    subjective: congruenceSimilaritySubjectiveQuestions
  },
  'volume-surface-area': {
    objective: volumeObjectiveQuestions,
    subjective: volumeSubjectiveQuestions
  },
  'probability': {
    objective: probabilityObjectiveQuestions,
    subjective: probabilitySubjectiveQuestions
  },
  'statistics': {
    objective: statisticsObjectiveQuestions,
    subjective: statisticsSubjectiveQuestions
  }
} as const;

export type TopicId = keyof typeof questionBanks;

// 특정 토픽에서 랜덤으로 10개 문제 선택 (최소 3개 주관식)
export function getRandomQuestionsForTopic(topicId: TopicId): (PracticeQuestion | (SubjectiveQuestion & { type: 'subjective' }))[] {
  const bank = questionBanks[topicId];
  if (!bank) return [];
  
  // 주관식 문제에서 최소 3개, 최대 5개 선택
  const subjectiveCount = Math.min(5, Math.max(3, Math.floor(Math.random() * 3) + 3));
  const objectiveCount = 10 - subjectiveCount;
  
  // 주관식 문제 랜덤 선택
  const shuffledSubjective = [...bank.subjective].sort(() => 0.5 - Math.random());
  const selectedSubjective = shuffledSubjective.slice(0, subjectiveCount).map(q => ({
    ...q,
    type: 'subjective' as const
  }));
  
  // 객관식 문제 랜덤 선택
  const shuffledObjective = [...bank.objective].sort(() => 0.5 - Math.random());
  const selectedObjective = shuffledObjective.slice(0, objectiveCount);
  
  // 두 유형을 합치고 다시 섞기
  const allSelected = [...selectedObjective, ...selectedSubjective];
  return allSelected.sort(() => 0.5 - Math.random());
}

// 모든 토픽에서 랜덤으로 5개 문제 선택 (최소 2개 주관식)
export function getRandomQuestionsFromAllTopics(): (PracticeQuestion | (SubjectiveQuestion & { type: 'subjective' }))[] {
  const allObjective: PracticeQuestion[] = [];
  const allSubjective: (SubjectiveQuestion & { type: 'subjective' })[] = [];
  
  // 모든 토픽의 문제를 수집
  Object.values(questionBanks).forEach(bank => {
    allObjective.push(...bank.objective);
    allSubjective.push(...bank.subjective.map(q => ({ ...q, type: 'subjective' as const })));
  });
  
  // 주관식 최소 2개, 최대 3개 선택
  const subjectiveCount = Math.min(3, Math.max(2, Math.floor(Math.random() * 2) + 2));
  const objectiveCount = 5 - subjectiveCount;
  
  // 랜덤 선택
  const shuffledSubjective = [...allSubjective].sort(() => 0.5 - Math.random());
  const selectedSubjective = shuffledSubjective.slice(0, subjectiveCount);
  
  const shuffledObjective = [...allObjective].sort(() => 0.5 - Math.random());
  const selectedObjective = shuffledObjective.slice(0, objectiveCount);
  
  // 합치고 다시 섞기
  const allSelected = [...selectedObjective, ...selectedSubjective];
  return allSelected.sort(() => 0.5 - Math.random());
} 