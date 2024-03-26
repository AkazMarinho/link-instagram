import { useState } from 'react'
import style from './Links.module.css'


export  function Links({icon, name, link,  theme, color}) {

  const [hoverLink, setHoverLink] = useState(null);

  const toggleColorTrue = () => {
    setHoverLink(true)
  }

  const toggleColorFalse = () => {
    setHoverLink(null)
  }

  const styleHover =  {
    color: hoverLink ? color : ``,
    transition : '0.3s',
  }


  return (
    <a href={link} id={style[theme]} onMouseEnter={toggleColorTrue} onMouseLeave={toggleColorFalse} className={`${style.content} ${style.color}` }>
        
      <div className={style.bgContent}>

       <div  style={styleHover}> 

        {icon}
       </div>
        <span>{name}</span>

      </div>
        
      
    </a>


  )
}
