import "./index.css"
import React, { useState, useEffect } from 'react';

import logo from "./svg/coin.svg"

export default function Page() {
    // ======================================= SAVE BALANCE AND TAP =============================================
  // Зчитування значення з localStorage:
  const initialTotalBalance = localStorage.getItem('totalBalance') || 1000;
  // Встановлення початкового стану
  const [totalBalance, setTotalBalance] = useState(parseInt(initialTotalBalance, 10));

  
  // Збереження значення в localStorage при зміні стану:
  useEffect(() => {
    localStorage.setItem('totalBalance', totalBalance);
  }, [totalBalance]);

  const handleClickTap = () => {
    setTotalBalance(totalBalance + coinsForClick);
    setLimitClick(limitClick - coinsForClick)
  } 

  // ======================================= LVL UP PER TAP ====================================================

  const [coinsForClick, setCoinsForClick] = useState(1)

  const handleClickBoost = () => {
    setCoinsForClick(coinsForClick + 1)
  }

  // ======================================= LIMIT TAP =========================================================

  const [limitClick, setLimitClick] = useState(1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setLimitClick(limitClick => {
        if(limitClick + 3 > 1000) {
          return 1000
        } else {
          return limitClick + 3
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])


    return (
      <div className="page mine_page">

        <div className="mine_page-header nav_bar">

          <div className="header_item nav_bar_item">
            <div className="coin_for_click_text">Earn per tap</div>
            <div className="box_for_item">
              <img src={logo} className="coin_for_click" alt="logo" />
                <div>+{coinsForClick}</div>
            </div>
          </div>

          <div className="header_item nav_bar_item"></div>

          <div className="header_item nav_bar_item"></div>
        </div>

        <div className="total_balance">{totalBalance}</div>

        <div className={`main_coin scale`} onClick={handleClickTap}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="limit_for_tap">
          <div className="limit_for_tap_amount">{limitClick}/1000</div>
        </div>

        <div className="mine_page-footer nav_bar">
          <button className="footer_item nav_bar_item"></button>
          <button className="footer_item nav_bar_item"></button>
          <button className="footer_item nav_bar_item"></button>
          <button onClick={handleClickBoost} className="footer_item nav_bar_item">
            <span className="footer_item_text">MultiTapBoost</span>
            <span className="footer_item_pay">Free</span>

          </button>
        </div>

      </div>
    )
}



// import "./index.css"
// import React, { useState, useEffect } from 'react';

// import logo from "./svg/coin.svg"

// export default function Page() {
//   const initialTotalBalance = localStorage.getItem('totalBalance') || 1000;
//   const [totalBalance, setTotalBalance] = useState(parseInt(initialTotalBalance, 10));
//   const [isAnimating, setIsAnimating] = useState(false)

//   useEffect(() => {
//     localStorage.setItem('totalBalance', totalBalance);
//   }, [totalBalance]);

//   const handleClick = () => {
//     setTotalBalance(totalBalance + 1);
//     setIsAnimating(true)
//   } 

//   useEffect(() => {
//     if(isAnimating) {
//       const timer = setTimeout(() => {
//         setIsAnimating(false)
//       }, 100)

//       return () => clearTimeout(timer)
//     }
//   }, [isAnimating])
//     return (
//       <header className="page mine_page">

//         <div className="total_balance">{totalBalance}</div>

//         <div className={`main_coin ${isAnimating ? 'scale' : ''}`} onClick={handleClick}>
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>

//       </header>
//     )
// }