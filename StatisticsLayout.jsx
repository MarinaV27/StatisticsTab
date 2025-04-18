import React from 'react';
import './StatisticsLayout.css'; // CSS окремо

const StatisticsLayout = () => {
  return (
    <div className="dashboard-container">
      {/* Блок зліва */}
      <div className="left-panel">
        <div className="balance-box">
          <h2>₴ 24 000.00</h2>
          <p>Your balance</p>
        </div>

        <div className="currency-box">
          <h4>Currency</h4>
          <div className="currency-row">
            <span>USD</span>
            <span>27.55</span>
            <span>27.65</span>
          </div>
          <div className="currency-row">
            <span>EUR</span>
            <span>30.00</span>
            <span>30.10</span>
          </div>
        </div>
      </div>

      {/* Блок справа */}
      <div className="right-panel">
        <div className="statistics-header">
          <h3>Statistics</h3>
          <div className="dropdowns">
            <select>
              <option>January</option>
              <option>February</option>
              <option selected>March</option>
              <option>April</option>
            </select>
            <select>
              <option>2021</option>
              <option>2022</option>
              <option selected>2023</option>
              <option>2024</option>
            </select>
          </div>
        </div>

        <div className="stats-content">
          <div className="pie-chart">[ Pie Chart ]</div>

          <div className="stats-table">
            <ul>
              <li><span>Car</span><span>1500.00</span></li>
              <li><span>Self care</span><span>800.00</span></li>
              <li><span>Child care</span><span>2208.50</span></li>
              <li><span>...</span><span>...</span></li>
            </ul>
            <div className="totals">
              <div>Expenses: <strong>22 548.24 ₴</strong></div>
              <div>Income: <strong>27 350.00 ₴</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsLayout;