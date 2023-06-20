import { useState } from "react";
import Links from "./Links";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import {links, social} from './../../data';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
         <div className="nav-center">
            <Logo showLinks= {showLinks} setShowLinks={setShowLinks}/>

            <Links links={links}  showLinks={showLinks}/>
            <SocialIcons />
         </div>
    </nav>
  )
}

export default Navbar;