import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import wallet from "../../assets/wallet.png";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-links">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to={"/farmers"} activeClassName="active">
          Farmers
        </NavLink>
        <NavLink to={"/market"} activeClassName="active">
          Market
        </NavLink>
      </div>
      <div className="wallet-balance">
        <img src={wallet} alt="" width={30} />
        <div className="wallet-info">
          <p>Wallet Balance</p>
          <p style={{ fontWeight: 600 }}>$ 10.00</p>
        </div>
      </div>
      <div className="profile-page">
        <NavLink to={"/profile"} activeClassName="active">
          Pushkar verma
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
