import React from 'react';
import classNames from 'classnames';
import getSymbolFromCurrency from 'currency-symbol-map';

import './Accounts.scss';
import { useHistory, useLocation } from 'react-router-dom';

interface Props {
  sectionTitle: string;
  accounts: Account[];
}

export const Accounts: React.FC<Props> = (props) => {
  const { sectionTitle, accounts } = props;
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeAccount = searchParams.get('account') || accounts[0].title;

  return (
    <section className="accounts App__accounts">
      <h2 className="accounts__title">{sectionTitle}</h2>
      <ul className="accounts__list">
        {accounts.map(
          account => {
            const { title, currency, balance } = account;
            const url = `./images/currency/${currency}.png`;

            return (
              <li
                key={title}
                className={classNames(
                  'accounts__link',
                  { 'accounts__link--active': title === activeAccount },
                )}
              >
                <button
                  type="button"
                  className={classNames(
                    'account accounts__account',
                    { 'account--active': title === activeAccount },
                  )}
                  onClick={() => {
                    history.push(`?account=${title}`);
                  }}
                >
                  <div className="account__currency">
                    <img src={url} alt="currency" />
                    <span className="account__title">{title}</span>
                  </div>
                  <span className="account__balance">
                    {getSymbolFromCurrency(currency)}
                    {balance.toFixed(2)}
                  </span>
                </button>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};
