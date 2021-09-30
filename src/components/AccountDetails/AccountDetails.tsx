import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

import './AccountDetails.scss';

interface Props {
  accounts: Account[];
}

export const AccountDetails: React.FC<Props> = (props) => {
  const { accounts } = props;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const account = searchParams.get('account');

  const currentAccount = accounts.find(item => item.title === account) || accounts[0];

  const { title, currency, balance } = currentAccount;

  return (
    <section className="details">
      <p className="details__text">Balance</p>
      <div className="details__account-balance">
        <span className="details__balance">
          {getSymbolFromCurrency(currency)}
          {balance.toFixed(2)}
        </span>
        <NavLink
          to="/top"
          className="top-up"
        >
          <img src="./images/details/button-pig.svg" alt="Top up" />
          <span className="top-up__text">Top up</span>
        </NavLink>
      </div>
      <p className="details__text">Quick transaction</p>
      <div className="details__send-money">
        <NavLink
          to="/transition"
          className="card card--telegram"
        >
          <img
            src="./images/sidebar/Telegram.svg"
            alt="Send Money"
            className="card__img"
          />
          <span className="card__text card__text--telegram">Send Money</span>
        </NavLink>
        <div className="card">
          <img src="./images/details/Leo.png" alt="Leo" />
          <span className="card__text">Leo W.</span>
        </div>
        <div className="card">
          <img src="./images/details/Monica.png" alt="Monica" />
          <span className="card__text">Monica L.</span>
        </div>
      </div>

      <section className="table details__table">
        <div className="table__block">
          <div className="table__title">
            <img src="./images/details/account-type.svg" alt="Account type" />
            <span className="table__text">Account Type:</span>
          </div>
          <div className="table__value">Personal</div>
        </div>
        <div className="table__block">
          <div className="table__title">
            <img src="./images/details/currency.svg" alt="Currency" />
            <span className="table__text">Currency</span>
          </div>
          <div className="table__value">{title}</div>
        </div>
      </section>

      <section className="table details__table">
        <div className="table__block">
          <div className="table__title">
            <img src="./images/details/passive-saving.svg" alt="Account type" />
            <span className="table__text">Passive Saving</span>
          </div>
          <div className="table__value">Enabled 20%</div>
        </div>
        <div className="table__block">
          <div className="table__title">
            <span className="table__text table__text--special">Share Account</span>
          </div>
          <div className="table__people">
            <img src="./images/details/person-1.png" alt="Person 1" />
            <img src="./images/details/person-2.png" alt="Person 2" />
            <img src="./images/details/person-3.png" alt="Person 3" />
            <div className="table__people-more">+2</div>
          </div>
        </div>
      </section>
    </section>
  );
};
