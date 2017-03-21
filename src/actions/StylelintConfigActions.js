/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import { ADD_RULE_TO_CONFIG, NEXT_QUESTION } from './constants';

export const addRuleToConfig = (name, value) =>
    ({ type: ADD_RULE_TO_CONFIG, name, value });

export const nextQuestion = () =>
    ({ type: NEXT_QUESTION });