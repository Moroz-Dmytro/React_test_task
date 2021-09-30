import React from 'react';
import './Actions.scss';

export const Actions = () => {
  return (
    <section className="actions">
      <button type="button" className="action">
        <div className="action__details">
          <img src="./images/actions/card.svg" alt="card" />
          <div className="action__title">
            <h2>Request a Card</h2>
            <span>Get a debit card for free</span>
          </div>
        </div>
        <img
          src="./images/actions/arrow.svg"
          alt="arrow"
        />
      </button>

      <button type="button" className="action">
        <div className="action__details">
          <img src="./images/actions/bonus.svg" alt="card" />
          <div className="action__title">
            <h2>Earn £ 25 for free</h2>
            <span>Apply for pension</span>
          </div>
        </div>
        <img
          src="./images/actions/arrow.svg"
          alt="arrow"
        />
      </button>
    </section>
  );
};
