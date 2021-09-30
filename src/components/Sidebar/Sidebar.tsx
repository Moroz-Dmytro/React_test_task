import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar__nav">
        <div className="sidebar__logo">
          <img src="./images/sidebar/logo.svg" alt="Logo" />
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            <li>
              <NavLink
                to="/"
                exact
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <img src="./images/sidebar/Home.svg" alt="Home" />
                <span className="sidebar__link-title">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transition"
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <img src="./images/sidebar/Telegram.svg" alt="Send Money" />
                <span className="sidebar__link-title">Send Money</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top"
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <img src="./images/sidebar/Top-up.svg" alt="Top Up" />
                <span className="sidebar__link-title">Top Up</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="accounts"
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <img src="./images/sidebar/Accounts.svg" alt="Accounts" />
                <span className="sidebar__link-title">Accounts</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>

      <div className="sidebar__profile">
        <img src="./images/sidebar/Profile.png" alt="" />
        <span className="sidebar__profile-text">Profile</span>
      </div>
    </aside>
  );
};
