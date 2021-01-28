import React from 'react';
import Footer from './Footer';
import MainContent from './MainContent';
import NavBar from './NavBar';


function Content() {
  return (
    <React.Fragment>
    <div id="content-wrapper" className="d-flex flex-column">
        <NavBar></NavBar>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
    </React.Fragment>
  );
}

export default Content;
