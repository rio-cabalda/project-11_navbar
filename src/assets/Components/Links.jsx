import React, { useRef } from 'react'

const Links = ({links,showLinks}) => {
  
  const linksContainerRef = useRef(null); // this is for the div container
  const linksRef = useRef(null); // this is for the ul container. don't swap this when declaring to the elements.
  //--------NOTE: ----------
      // using useRef we can use Transition when changing the State(showLinks == true/false); 
      // when using useState, unable to use transition in css alone. use
      // using useRef we can get the css property of that element.
          // linksRef.current.getBoundingClientRect().height
          //will get the height of that element
  
  const linksStyle = { // this is getting the height of the ul then set the height to div(links-container)
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  }


  return (
    <div className="links-container" 
    ref={linksContainerRef} 
    style={linksStyle}> {/* --  linksContainerRef--*/}
       
        <ul className="links"  ref={linksRef} >               {/* --linksRef--*/}
        {links.map((link)=>{
          const {id,url, text} = link;
        
          return (
          <li key={id}>
              <a href={url}>{text}</a>
          </li>
          );
        })}

      </ul>
    </div>
    
  )
}

export default Links