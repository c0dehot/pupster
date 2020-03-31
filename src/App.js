import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from './components/AboutPage';
import DiscoverPage from './components/DiscoverPage';
import SearchPage from './components/SearchPage';
import SettingsPage from './components/SettingsPage';
import SettingsContext from './components/SettingsContext';

/*
App Component loads ->
   route='/' --> okay, must load component "AboutPage"
       * checks the lifecycle:
            - didMount | update | didUnmount
            AboutPage: insert html + run javascript of this component
              THEN it will attempt the 'didMount' lifecycle function
                 --> useEffect( function(){}, [] );
              Anytime there are updates triggering component to update
                 --> useEffect( function(){} );
              If 'AboutPage' is UNMOUNTED, check if theres didUnmount lifecycle?
                 --> useEffect( function(){    return function(){} }, [] );
*/
function App() {
  const [ settings, setSettings ] = useState( {
    searchThumbsize: '64x64',
    searchLimit: 0,
    /* we provide a function that context-users can use ot adjust this value */
    updateSetting: (key,val)=>updateSetting(key,val)
  })

  function updateSetting( key, val ){
    console.log( `[app] updateSetting called: (${key}: ${val}) ` );
    setSettings({ ...settings, ...{[key]: val} });
  }
  
  return (
    <Router>
      <div>
      <SettingsContext.Provider value={settings}>
        <NavBar />
        <Route exact path={["/","/about"]} component={AboutPage} />
        <Route exact path="/discover" component={DiscoverPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/settings" component={SettingsPage} />
      {/* { activePage==='AboutPage'    ? <AboutPage />    : '' }
      { activePage==='DiscoverPage' ? <DiscoverPage /> : '' }
      { activePage==='SearchPage'   ? <SearchPage />   : '' } */}
      </SettingsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
