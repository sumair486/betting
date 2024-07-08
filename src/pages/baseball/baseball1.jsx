import React, { useState } from 'react';
import './BettingOdds.css';

const baseball1 = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const renderContent = () => {
    switch (activeTab) {
      case 'ALL':
        return (
          <>
            {renderMatchOdds()}
            {renderTossMarket()}
            {renderBookmaker()}
          </>
        );
      case 'Toss':
        return renderTossMarket();
      case 'Bookmaker':
        return renderBookmaker();
      default:
        return renderMatchOdds();
    }
  };

  const renderMatchOdds = () => (
    <div className="market">
      <h2>MATCH ODDS (MaxBet: 5M)</h2>
      <div className="odds-table">
        <div className="team">
          <p>India Women</p>
          <div className="odds">
            <span className="back">1.36</span>
            <span className="back">1.37</span>
            <span className="back">1.39</span>
            <span className="lay">1.4</span>
            <span className="lay">1.41</span>
            <span className="lay">1.42</span>
          </div>
        </div>
        <div className="team">
          <p>South Africa Women</p>
          <div className="odds">
            <span className="back">3.35</span>
            <span className="back">3.4</span>
            <span className="back">3.5</span>
            <span className="lay">3.6</span>
            <span className="lay">3.75</span>
            <span className="lay">3.8</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTossMarket = () => (
    <div className="market">
      <h2>TOSS MARKET (MaxBet: 200K)</h2>
      <div className="odds-table">
        <div className="team">
          <p>India Women To Win The Toss</p>
          <div className="odds">
            <span className="back">1.98</span>
            <span className="lay">2.02</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookmaker = () => (
    <div className="market">
      <h2>BOOKMAKER (MaxBet: 1M)</h2>
      <div className="odds-table">
        <div className="team">
          <p>India Women</p>
          <div className="odds">
            <span className="back">1.38</span>
            <span className="lay">1.41</span>
          </div>
        </div>
        <div className="team">
          <p>South Africa Women</p>
          <div className="odds">
            <span className="suspended">SUSPENDED</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRightSide = () => (
    <div className="right-side">
      <div className="section">
        <h3>Open Bets (0)</h3>
        <table className='table-section'>
            <tr className='table-row'>
                <th>Runner</th>
                <th>Price</th>
                <th>Size</th>

            </tr>
        </table>
        <div className="content">
          <p>No open bets</p>
        </div>
      </div>
      <div className="section">
        <h3>Matched Bets (0)</h3>
        <table className='table-section'>
            <tr className='table-row'>
                <th>Runner</th>
                <th>Price</th>
                <th>Size</th>

            </tr>
        </table>
        <div className="content">
          <p>No matched bets</p>
        </div>
      </div>
      <div className="section">
        <h3>Related Events</h3>
        <div className="content">
          <p>Today 14:30 - Galle Marvels v B-Love Kandy</p>
          <p>Today 14:45 - Nellai Royal Kings v Chepauk Super Gillies</p>
          <p>Today 16:00 - Zimbabwe v India</p>
          <p>Today 16:30 - West Indies Legends v South Africa Legends</p>
          <p>Today 18:30 - Somerset v Gloucestershire</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="betting-odds-container">
      <div className="betting-odds">
        <div className="header">
          
          <p> <img src="cricket.svg" alt="Wicket Cricket Logo" className="logo" />in 3 hours | Jul 7 6:30 pm | Winners: 1</p>
          <h1>India Women v South Africa Women</h1>
          <p>Remaining: <span className="remaining-time">02:40:53</span></p>
          <p className="status">OPEN</p>
        </div>
        <div className="tabs">
          <button className={activeTab === 'ALL' ? 'active' : ''} onClick={() => setActiveTab('ALL')}>ALL</button>
          <button className={activeTab === 'Toss' ? 'active' : ''} onClick={() => setActiveTab('Toss')}>Toss</button>
          <button className={activeTab === 'Bookmaker' ? 'active' : ''} onClick={() => setActiveTab('Bookmaker')}>Bookmaker</button>
        </div>
        {renderContent()}
      </div>
      {renderRightSide()}
    </div>
  );
};

export default baseball1;
