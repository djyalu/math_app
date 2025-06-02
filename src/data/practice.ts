import { Practice } from './types';
import { congruencePractice } from './practice/congruence';
import { volumePractice } from './practice/volume';
import { probabilityPractice } from './practice/probability';
import { statisticsPractice } from './practice/statistics';
import { pythagoreanPractice } from './practice/pythagorean';
import { trigonometricPractice } from './practice/trigonometric';

export const practices = [
  pythagoreanPractice,
  trigonometricPractice,
  congruencePractice,
  volumePractice,
  probabilityPractice,
  statisticsPractice
]; 