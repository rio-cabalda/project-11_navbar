
import {social} from './../../data';
const SocialIcons = () => {
  return (
    <ul className="social-icons">
        {social.map(({id,url,icon})=>{
            return <li key={id}><a href={url} target="_blank">{icon}</a></li>
            
        })}
    </ul>
  )
}

export default SocialIcons;