import React from 'react';
import { header, headerWraper } from './Header.module.css';

const Header = ({ children }) => {
    return (
        <>
            <header className={header}>
                <div className={headerWraper}>{children}</div>
            </header>
        </>
    );
};
export default Header;
