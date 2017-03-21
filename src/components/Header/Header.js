/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React from 'react';
import s from './Header.pcss';

const Header = () => (
    <header className={s.header}>
        <div className={s.name}>Stylelint config generator</div>
        <nav className={s.navigation}>
            <a href='https://stylelint.io/user-guide/' target='_blank'>Docs</a>
            <a href='https://stylelint.io/demo/' target='_blank'>Sandbox</a>
            <a href='https://stylelint.io/' target='_blank'>stylelint.io</a>
        </nav>
    </header>
);

export default Header;