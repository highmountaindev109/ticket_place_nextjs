import React, { useState, useEffect }  from 'react';
import NavMenuDraw from './navMenuDraw';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';

const sections1 = [
    { title: 'Concerts', url: '#'},
    { title: 'Sports', url: '#' },
    { title: 'Arts & Theater', url: '#' },
    { title: 'Family', url: '#' },
    { title: 'More', url: '#' },
  ];
const sections2 = [
    { title: 'Sign In', url: '#'},
    { title: 'Sell', url: '#' },
    { title: 'Git Cards', url: '#' },
    { title: 'Help', url: '#' },
];



const HeaderNav= (props) => {
  const { height, setHeight } = props
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

    return (
      <>
        <div className={ scroll ? "header-tool-scroll" : "header-tool"}>
            <Toolbar component="nav" variant="dense" className="navbar-link">
                {sections1.map((section1) => (
                  <Link
                      style={{textDecoration: "none"}} 
                      noWrap
                      key={section1.title}
                      href={section1.url}
                      className="nav-toolbarLink"
                  >
                    {section1.title}
                  </Link>
                ))}
            </Toolbar>
            <div className='navbar-logo cursor-pointer'>
                <img src='/images/Homepage1/logo-white 1.png' />
            </div>
            <Toolbar component="nav" variant="dense" className="navbar-singIn">
                {sections2.map((section2) => (
                  <Link
                      style={{textDecoration: "none"}} 
                      noWrap
                      key={section2.title}
                      href={section2.url}
                      className="nav-toolbarLink"
                  >
                    {section2.title}
                  </Link>
                ))}
            </Toolbar>
        </div>
        <div className={ scroll ? "header-tool-responsive-scroll" : "header-tool-responsive" }>
            <NavMenuDraw/>
            <div className='navbar-logo'>
                <img src='/images/Homepage1/logo-white 1.png' />
            </div>
            <div className="navbar-singIn">
                {sections2.map((section2) => (
                  <Link
                      style={{textDecoration: "none"}} 
                      noWrap
                      key={section2.title}
                      href={section2.url}
                      className="nav-responsive-toolbarLink"
                  >
                    {section2.title}
                  </Link>
                ))}
            </div>   
            <div className='navbar-signIn-responsive'>
                <Link style={{textDecoration:"none"}}
                      noWrap
                      href=''
                      className='nav-responsive-toolbarLink'
                >
                  SignIn
                </Link>
            </div>      
        </div>
      </>
    );
}
export default HeaderNav
