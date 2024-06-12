import "./index.css"
import React, { useState, useEffect } from 'react';

import logo from "./svg/coin.svg"

export default function Page() {
  const initialTotalBalance = localStorage.getItem('totalBalance') || 1000;
  const [totalBalance, setTotalBalance] = useState(parseInt(initialTotalBalance, 10));
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    localStorage.setItem('totalBalance', totalBalance);
  }, [totalBalance]);

  const handleClick = () => {
    setTotalBalance(totalBalance + 1);
    setIsAnimating(true)
  } 

  useEffect(() => {
    if(isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [isAnimating])
    return (
      <header className="page mine_page">

        <div className="total_balance">{totalBalance}</div>

        <div className={`main_coin ${isAnimating ? 'scale' : ''}`} onClick={handleClick}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </header>
    )
}