import {FaBars} from 'react-icons/fa';
import logo from './../../logo.svg';
const Logo = ({showLinks,setShowLinks}) => {

  return (
   
        <div className="nav-header">
            <img src={logo} alt="logo" className="logo"/>
            <button className="nav-toggle"
            onClick={()=>setShowLinks(!showLinks)}>
              <FaBars />
            </button>
        </div>
   
  )
}

export default Logo;