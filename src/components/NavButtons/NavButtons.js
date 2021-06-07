import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { navList, text, activeText } from './NavButtons.module.css';
import Cast from '../Cast';
import Reviews from '../Reviews';
import PropTypes from 'prop-types';

const NavButtons = ({ castURL, reviewsURL, castPath, reviewsPath }) => {
    return (
        <>
            <ul className={navList}>
                <li>
                    <NavLink
                        to={castURL}
                        className={text}
                        activeClassName={activeText}
                    >
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={reviewsURL}
                        className={text}
                        activeClassName={activeText}
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={castPath} component={Cast} />
                <Route path={reviewsPath} component={Reviews} />
            </Switch>
        </>
    );
};

NavButtons.propTypes = {
    castURL: PropTypes.string.isRequired,
    reviewsURL: PropTypes.string.isRequired,
    castPath: PropTypes.string.isRequired,
    reviewsPath: PropTypes.string.isRequired,
};
export default withRouter(NavButtons);
