/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React from 'react';

const Button = props => (
    <button type='button' onClick={props.onClick}>{props.children}</button>
);

export default Button;