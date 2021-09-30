import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { loadAccounts } from './api/loadAccounts';
import './App.scss';

import { Sidebar } from './components/Sidebar';
import { Accounts } from './components/Accounts';
import { Actions } from './components/Actions';
import { AccountDetails } from './components/AccountDetails/AccountDetails';
import { SendMoney } from './components/SendMoney';

export const App: React.FC = () => {
  const [accounts, setAccoutns] = useState<Account[]>([]);

  useEffect(() => {
    (async () => {
      const accountsFromApi = await loadAccounts();

      setAccoutns(accountsFromApi);
    })();
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Sidebar />
        <main className="App__main">
          <div className="App__main-info">
            {accounts.length && (
              <Accounts
                sectionTitle="Your accounts"
                accounts={accounts}
              />
            )}
            <Route path="/" exact>
              <Actions />
            </Route>
          </div>
          <Switch>
            <Route path="/transition">
              <SendMoney />
            </Route>
            <Route path="/">
              {accounts.length && <AccountDetails accounts={accounts} />}
            </Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
};
