import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BettingOdds.css';

const Players = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.the-odds-api.com/v4/sports/soccer_belgium_first_div/odds/',
          {
            params: {
              apiKey: '404e2c237910ae2678888e7634f37487',
              regions: 'us,uk',
              markets: 'h2h,spreads,totals',
            },
          }
        );
        console.log(response.data);
        setSportsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (sportsData.length === 0) {
      return <p>No data available</p>;
    }

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
    {sportsData.map((sport, index) => (
      <div key={index}>
        <h3>{sport.sport_title}</h3>
        <p>
          Teams: {sport.home_team} vs {sport.away_team}
          <br />
          Commence Time: {new Date(sport.commence_time).toLocaleString()}
        </p>
        <div className="odds-table">
          <div className="team">
            <p>{sport.home_team}</p>
            <div className="odds">
              {sport.bookmakers &&
                sport.bookmakers.map((bookmaker, idx) =>
                  bookmaker.markets &&
                  bookmaker.markets.map((market, marketIdx) =>
                    market.key === 'h2h' && market.outcomes && market.outcomes.length >= 2 ? (
                      <React.Fragment key={marketIdx}>
                        {market.outcomes.slice(0, 3).map((outcome, outcomeIdx) => (
                          <span key={outcomeIdx} className="back">{outcome.price}</span>
                        ))}
                      </React.Fragment>
                    ) : null
                  )
                )}
              {sport.bookmakers &&
                sport.bookmakers.map((bookmaker, idx) =>
                  bookmaker.markets &&
                  bookmaker.markets.map((market, marketIdx) =>
                    market.key === 'h2h' && market.outcomes && market.outcomes.length >= 2 ? (
                      <React.Fragment key={marketIdx}>
                        {market.outcomes.slice(3).map((outcome, outcomeIdx) => (
                          <span key={outcomeIdx} className="lay">{outcome.price}</span>
                        ))}
                      </React.Fragment>
                    ) : null
                  )
                )}
            </div>
          </div>
          <div className="team">
            <p>{sport.away_team}</p>
            <div className="odds">
              {sport.bookmakers &&
                sport.bookmakers.map((bookmaker, idx) =>
                  bookmaker.markets &&
                  bookmaker.markets.map((market, marketIdx) =>
                    market.key === 'h2h' && market.outcomes && market.outcomes.length >= 2 ? (
                      <React.Fragment key={marketIdx}>
                        {market.outcomes.slice(0, 3).map((outcome, outcomeIdx) => (
                          <span key={outcomeIdx} className="back">{outcome.price}</span>
                        ))}
                      </React.Fragment>
                    ) : null
                  )
                )}
              {sport.bookmakers &&
                sport.bookmakers.map((bookmaker, idx) =>
                  bookmaker.markets &&
                  bookmaker.markets.map((market, marketIdx) =>
                    market.key === 'h2h' && market.outcomes && market.outcomes.length >= 2 ? (
                      <React.Fragment key={marketIdx}>
                        {market.outcomes.slice(3).map((outcome, outcomeIdx) => (
                          <span key={outcomeIdx} className="lay">{outcome.price}</span>
                        ))}
                      </React.Fragment>
                    ) : null
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

  const renderTossMarket = () => (
    <div className="market">
      <h2>TOSS MARKET (MaxBet: 200K)</h2>
      {sportsData
        .filter((sport) => sport.toss_market)
        .map((sport, index) => (
          <div key={index}>
            <h3>{sport.sport_title}</h3>
            <p>
              Teams: {sport.home_team} vs {sport.away_team}
              <br />
              Commence Time: {new Date(sport.commence_time).toLocaleString()}
            </p>
            <div className="odds-table">
              <div className="team">
                <p>{sport.home_team} To Win The Toss</p>
                <div className="odds">
                  {sport.toss_market && (
                    <React.Fragment>
                      <span className="back">{sport.toss_market.outcomes[0].price}</span>
                      <span className="lay">{sport.toss_market.outcomes[1].price}</span>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  const renderBookmaker = () => (
    <div className="market">
      <h2>BOOKMAKER (MaxBet: 1M)</h2>
      {sportsData
        .filter((sport) => sport.bookmakers)
        .map((sport, index) => (
          <div key={index}>
            <h3>{sport.sport_title}</h3>
            <p>
              Teams: {sport.home_team} vs {sport.away_team}
              <br />
              Commence Time: {new Date(sport.commence_time).toLocaleString()}
            </p>
            <div className="odds-table">
              {sport.bookmakers.map((bookmaker, idx) => (
                <div key={idx} className="team">
                  <p>{bookmaker.title}</p>
                  <div className="odds">
                    {bookmaker.markets.map((market, marketIdx) =>
                      market.key === 'h2h' && market.outcomes.length >= 2 ? (
                        <React.Fragment key={marketIdx}>
                          <span className="back">{market.outcomes[0].price}</span>
                          <span className="lay">{market.outcomes[1].price}</span>
                        </React.Fragment>
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );

  const renderRightSide = () => (
    <div className="right-side">
      <div className="section">
        <h3>Open Bets (0)</h3>
        <table className="table-section">
          <thead>
            <tr className="table-row">
              <th>Runner</th>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">No open bets</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
        <h3>Matched Bets (0)</h3>
        <table className="table-section">
          <thead>
            <tr className="table-row">
              <th>Runner</th>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">No matched bets</td>
            </tr>
          </tbody>
        </table>
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

  // Example remaining time calculation
  const remainingTime = '02:40:53'; // Placeholder for demonstration

  return (
    <div className="betting-odds-container">
      <div className="betting-odds">
        <div className="header">
          <img src="cricket.svg" alt="Wicket Cricket Logo" className="logo" />
          <p>in 3 hours | Jul 7 6:30 pm | Winners: 1</p>
          <h1>Live Soccer Betting</h1>
          <p>Remaining: <span className="remaining-time">{remainingTime}</span></p>
          <p className="status">OPEN</p>
        </div>
        <div className="tabs">
          <button className={activeTab === 'ALL' ? 'active' : ''} onClick={() => setActiveTab('ALL')}>ALL</button>
          {sportsData.some(sport => sport.toss_market) &&
            <button className={activeTab === 'Toss' ? 'active' : ''} onClick={() => setActiveTab('Toss')}>Toss</button>}
          {sportsData.some(sport => sport.bookmakers) &&
            <button className={activeTab === 'Bookmaker' ? 'active' : ''} onClick={() => setActiveTab('Bookmaker')}>Bookmaker</button>}
        </div>
        {renderContent()}
      </div>
      {renderRightSide()}
    </div>
  );
};

export default Players;
