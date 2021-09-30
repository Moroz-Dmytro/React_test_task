import React from 'react';
import { NavLink } from 'react-router-dom';
import './SendMoney.scss';

export const SendMoney: React.FC = () => {
  return (
    <NavLink
      to="/"
      className="sendMoney"
    >
      <img
        src="./images/sidebar/Telegram.svg"
        alt="Send money"
        className="sendMoney__img"
      />
      <span className="sendMoney__text">Send Money</span>
    </NavLink>
  );
};
