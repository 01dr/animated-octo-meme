/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React from 'react';
import Highlight from 'react-highlight';
import s from './Config.pcss';

const Config = props => {
    const string = props.config.reduce((acc, rule, index, array) => {
        const isLastRow = array.length - 1 === index;
        const isFirstRow = index === 0;
        return `${acc}${isFirstRow ? '' : '\n'}\t"${rule.name}": ${rule.value}${isLastRow ? '' : ','}`;
    }, '');

    const brackets = `{\n${string}\n}`;

    return (
        <div className={s.config}>
            <Highlight className='JSON'>
                {brackets}
            </Highlight>
        </div>
    )
};

export default Config;