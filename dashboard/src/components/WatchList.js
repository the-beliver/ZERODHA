import React, {useState} from "react";

import {Tooltip, Grow } from "@mui/material";

import { watchlist } from "../Data/data";

import {KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";

import { BarChartOutlined } from "@mui/icons-material";



const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
         {watchlist.map((stock,index) => {
          return(
             <WatchListItem stock={stock} key={index}/>
         ); })}
      </ul>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock}) => {

    const [showWatchlistActions, setShowWatchlistActions] = useState(false);
    
    const handleMouseEnter = () => {
      setShowWatchlistActions(true);
    }

    const handleMouseLeave = () =>{
      setShowWatchlistActions(false);
    }

    return(
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
              <span className="percent">{stock.percent}</span>
              { stock.isDown ? (
                <KeyboardArrowDown className="Down"/>
              ): (
                <KeyboardArrowUp className="Down"/>
              )}
              <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchlistActions && <WatchlistActions uid={stock.name}/>}
      </li>

    );
};

const WatchlistActions = ({uid}) => {
        return(
          <spam className="actions">
            <Tooltip
               title="Buy (B)"
               placement="top"
               arrow
               TransitionComponent={Grow}
               >
                <button className="buy">Buy</button>
            </Tooltip>
            <Tooltip
               title="Sell (S)"
               placement="top"
               arrow
               TransitionComponent={Grow}
               >
                <button className="sell ">Sell</button>
            </Tooltip>
            <Tooltip
               title="Analytic (A)"
               placement="top"
               arrow
               TransitionComponent={Grow}
               >
                <button className="action">
                  <BarChartOutlined className="icon"/>
                   </button>
            </Tooltip>
             <Tooltip
               title="More"
               placement="top"
               arrow
               TransitionComponent={Grow}
               >
                <button className="action">
                  <MoreHoriz className="icon"/>
                </button>
            </Tooltip>
          </spam>
        );
}
