import * as React from 'react';
// import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      {/* <Header /> */}
      <MainContent>{children}</MainContent>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
