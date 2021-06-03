import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../views/routes';
import { link, linkActive, list } from './Navigation.module.css';

const Navigation = () => {
    return (
        <>
            <ul className={list}>
                <li>
                    <NavLink
                        exact
                        to={routes.home}
                        className={link}
                        activeClassName={linkActive}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.movies}
                        className={link}
                        activeClassName={linkActive}
                    >
                        Search
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default Navigation;
