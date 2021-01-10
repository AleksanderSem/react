import React from 'react';
import './Headers.css';

const Headers = (e,{ handleSerchUsers, handleSortUsers, handleReset }) => {

  const reset = (e) => {
    handleReset();
    e.target.closest("form").reset()
    
  }

  return (
    <header className="page-headers">
    <div className="container">
    <div className="page-header__inner">
    <a href="#s" >
    <img width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="Logo"/>
    </a>
       <form onSubmit={(e) => e.preventDefault()}>
    <input
      type="search"
      name="search"
      placeholder="Search..."
      onChange={(e) => handleSerchUsers(e.target.value)}
     />
  <select name="sort" onChange={(e) => handleSortUsers(e.target.value)}>
   <option value="default">по релевантности</option>
   <option value="asc">по возростанию</option>
   <option value="desc">по убыванию</option>
  </select>
  <button className="btn" onClick={reset}>Reset</button>
  </form>
  </div>
  </div>
  </header>
  );
}

export default Headers;