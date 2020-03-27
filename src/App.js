import React, { useState } from 'react';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import DiscoverPage from './components/DiscoverPage';
import SearchPage from './components/SearchPage';

function App() {
  const [ activePage, setActivePage ]= useState( 'AboutPage' );
  function changePage( page ){
    setActivePage( page );
  }

  return (
    <div>
      <NavBar activePage={activePage} changePage={changePage} />
      { activePage==='AboutPage'    ? <AboutPage />    : '' }
      { activePage==='DiscoverPage' ? <DiscoverPage /> : '' }
      { activePage==='SearchPage'   ? <SearchPage />   : '' }
    </div>
  );
}

export default App;
