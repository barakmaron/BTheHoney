import { React, useEffect,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

import '../css/Nav.scss';

const Nav = () => {
    const [directories] = useState(() => ['home', 'about', 'shop',  'login', 'register']);
    const [toggleMenuMobile, setToggleMenuMobile] = useState(() => true);
    const location = useLocation().pathname;
    const mobileMenu = () => 
    {
        document.getElementById("nav").className = "nav-visible";      
    }
    const windowResize = () => 
    {
        if (window.innerWidth > 800) 
        {
            document.getElementById("nav").className = "";
            setToggleMenuMobile(false);
        }
    }

    useEffect(() => {
        mobileMenu();
        windowResize();
    });

    const toggleMenu = (e) =>
    {
        e.preventDefault();
        setToggleMenuMobile(s => !s);
    }
  return (
    <nav id="nav">
      <div className="nav left">
        <span className="gradient skew">
          <h1 className="logo un-skew"><a href="/">B The Honey</a></h1></span>
        <a id="menu" className="btn-nav" href='/' onClick={toggleMenu}><span><BiMenu style={{fontSize: '1.75em'}}></BiMenu></span></a>
      </div>
      
      <div className="nav right" style={toggleMenuMobile ? { display:'none' } : {}}>
        {directories.map((url, i) =>
        {
            if(location.substring(1) === url)
            {
              return(<Link key={i} to={"/" + url} onClick={() => setToggleMenuMobile(true)} className="nav-link active"><span className="nav-link-span"><span className="u-nav">{url}</span></span></Link>);
            }
            return(<Link key={i} to={"/" + url} onClick={() => setToggleMenuMobile(true)} className="nav-link"><span className="nav-link-span"><span className="u-nav">{url}</span></span></Link>);
          })
        }
      </div>
    </nav>
  )
}

export default Nav
