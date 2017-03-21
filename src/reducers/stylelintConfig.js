/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import { ADD_RULE_TO_CONFIG, NEXT_QUESTION } from '../actions/constants';

const stylelintConfig = (state = [], { type, name, value }) => {
    const clone = Array.from(state);

    switch (type) {
    case ADD_RULE_TO_CONFIG:
        clone.push({ name, value });
        return clone;
    default:
        return state;
    }
};

const question = (state = 0, { type }) => {
    if (type === NEXT_QUESTION) {
        return state + 1;
    }

    return state;
};

export default { stylelintConfig, question };