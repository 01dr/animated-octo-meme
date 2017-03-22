/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React from 'react';
import Highlight from 'react-highlight';
import s from './Button.pcss';

const Button = props => (
    <div onClick={props.onClick} className={s.button}>
        <Highlight className='css'>
            <div>{'/* '}{props.hint}{' */'}</div>
            {props.code && <div dangerouslySetInnerHTML={{ __html: props.code }}/>}
        </Highlight>
    </div>
);

export default Button;