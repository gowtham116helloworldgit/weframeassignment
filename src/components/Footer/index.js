import './index.css'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="footer-container">
      <img
        src="https://i.ibb.co/Nrcdj0B/weframe.png"
        className="weframe-icon"
      />
      <ul className="infos-container">
        <li className="list-item">INFOS PRATIQUES</li>
        <li className="list-item1">Aprops</li>
        <li className="list-item1">Livariosns & Reprises</li>
        <li className="list-item1">Mode d'emploi</li>
        <li className="list-item1">F.A.Q'</li>
      </ul>
      <ul className="infos-container">
        <li className="list-item">LEGAL</li>
        <li className="list-item1">mentions legals</li>
        <li className="list-item1">CGU</li>
        <li className="list-item1">CGV</li>
        <li className="list-item1">Politique de confidentialite</li>
      </ul>
      <ul className="infos-container">
        <li className="list-item">MON COMPTE</li>
        <li className="list-item1">Accéder à mon compte</li>
        <li className="list-item1">Ma liste d’envie</li>
        <li className="list-item1">Créer un compte</li>
        <li className="list-item1">Mot de passe oublié</li>
      </ul>
      <div className="social-container">
        <h1 className="us-heading">NOUS SUVIRE</h1>
        <div className="social-icon-container">
          <div className="twitter-container">
            <FaTwitter className="twitter-icon" />
          </div>
          <div className="instagram-container">
            <FaInstagram className="instagram-icon" />
          </div>
          <div className="linkedin-container">
            <GrLinkedinOption className="linkedin-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
