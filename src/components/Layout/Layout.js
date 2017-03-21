/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React from 'react';
import s from './Layout.pcss';

export const Layout = props => (<div className={s.layout}>{props.children}</div>);
export const Sidebar = props => (<div className={s.sidebar}>{props.children}</div>);
export const Content = props => (<div className={s.content}>{props.children}</div>);