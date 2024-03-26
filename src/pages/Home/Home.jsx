import style from './Home.module.css'
import { IoIosMail, IoLogoLinkedin, IoLogoGithub, IoMdLink } from "react-icons/io";

import { ThemeContext } from '../../context/ThemeContext';
import { useContext, useEffect } from 'react';

import { CiLight, CiDark } from "react-icons/ci";
import { Links } from '../Links/Links';


export function Home() {
  const {theme, themeToggle, verifyTheme} = useContext(ThemeContext);

  useEffect(()=> {
    verifyTheme();
  })

  return (
    <div className={style.container} id={style[theme]}>

      <div className={style.profile}>
        <div className={ theme === 'light' ? style.img_01 : style.img_02}></div>
        <span>@akaz_marinho</span>
      </div>


      <button className={ theme === 'light' ?  `${style.themeButton} ${style.bgButton}` : style.themeButton} onClick={themeToggle}>
       <div className={theme === 'dark' && style.animationButtonLeft}></div>
       <div className={theme === 'light' && style.animationButtonRight}></div>
        <CiLight className={ theme === 'light' ? `${style.lightIcon} ${style.focusThemeButton} ` : style.lightIcon}/> 
        <CiDark className={  theme === 'dark' ? `${style.darkIcon} ${style.focusThemeButton} ` : style.darkIcon} />
      </button>

      <div className={style.contentLinks}>
        <Links 
          name="Email" 
          link="mailto:akazmarinho@gmail.com" 
          icon={ <IoIosMail />} 
          theme={theme} 
          color='#dc4339'
           
        />
        <Links 
          name="Linkedin" 
          link="https://www.linkedin.com/in/akaz-marinho-b66475230/" 
          icon={ <IoLogoLinkedin />} 
          theme={theme}
          color='#0676a8'
        />
        <Links 
          name="GitHub" 
          link="https://github.com/AkazMarinho" 
          icon={ <IoLogoGithub />} 
          theme={theme}
          color='#171515' 
        />
        <Links 
          name="Portfólio" 
          link="https://akazmarinho.vercel.app/" 
          icon={ <IoMdLink />} 
          theme={theme}
          color='#ba68c8' 
        />
      </div>

    </div>
  )
}
