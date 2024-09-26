import React, { useEffect, useState } from 'react'

function Header() {
    const [isMinified, setIsMinified] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsMinified(true);
        } else {
          setIsMinified(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div id="header" className={`${isMinified ? 'minified' : ''} h-[70px] flex justify-center items-center z-[40]`}>
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="left">
          <a href="/fr" className="logo-link" title="Hemblem">
            <img className='w-[50px]' src="./colibri.svg" alt="colibri" />
            {/* <img src="https://hemblem.app/assets/img/hemblem-app-logo.svg" alt="Logo d'Hemblem" /> */}
          </a>
        </div>

        <div className="right">
          <ul className="h-list nowrap">
            <li>
              <a
                className="font-semibold font-Raleway text-white bg-black rounded-lg px-[30px] py-[10px]"
                href="/fr/contact"
                title="Contacter l'équipe Hemblem"
              >
                <span className="only-for-mobile">💬 Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header