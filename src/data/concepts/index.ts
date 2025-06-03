import { ConceptContent } from '../types';
import { pythagoreanConcepts } from './pythagorean';
import { trigonometricConcepts } from './trigonometric';
import { congruenceConcepts } from './congruence';
import { solidConcepts } from './solid';
import { probabilityConcepts } from './probability';
import { statisticsConcepts } from './statistics';

export const allConcepts: { [key: string]: ConceptContent[] } = {
  'pythagorean-theorem': pythagoreanConcepts,
  'trigonometric-ratios': trigonometricConcepts,
  'congruence-similarity': congruenceConcepts,
  'volume-surface-area': solidConcepts,
  'probability': probabilityConcepts,
  'statistics': statisticsConcepts,
};

export {
  pythagoreanConcepts,
  trigonometricConcepts,
  congruenceConcepts,
  solidConcepts,
  probabilityConcepts,
  statisticsConcepts,
}; 