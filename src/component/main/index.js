import "./index.css"
import React, { useState, useEffect } from 'react';

import logo from "./svg/coin.svg"

export default function Page() {
  const initialTotalBalance = localStorage.getItem('totalBalance') || 1000;
  const [totalBalance, setTotalBalance] = useState(parseInt(initialTotalBalance, 10));

  useEffect(() => {
    // При зміні значення totalBalance оновлюємо його в localStorage
    localStorage.setItem('totalBalance', totalBalance);
  }, [totalBalance]);

  const handleClick = () => {
    setTotalBalance(totalBalance + 1);
  } 
    return (
      <header className="mine_page">

        <div className="total_balance">{totalBalance}</div>

        <div className="main_coin" onClick={handleClick}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </header>
    )
}