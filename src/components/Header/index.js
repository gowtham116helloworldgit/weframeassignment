import {RiSearchLine} from 'react-icons/ri'
import {MdLightbulbOutline} from 'react-icons/md'
import {GiSelfLove} from 'react-icons/gi'
import {FiShoppingCart} from 'react-icons/fi'
import {IoIosArrowDown} from 'react-icons/io'
import './index.css'
const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://i.ibb.co/Nrcdj0B/weframe.png"
        className="welframe-image"
      />
      <div className="search-container">
        <p className="recher-para">Rechercher un produit</p>
        <RiSearchLine className="search-icon" />
      </div>
      <MdLightbulbOutline className="bulb-icon" />
      <p className="inspirations-para">Inspirations</p>
      <GiSelfLove className="love-icon" />
      <p className="love-para">Mes favoris</p>
      <p className="number-para">24</p>
      <div className="painter-container">
        <FiShoppingCart className="cart-icon" />
        <p className="panier-para">Panier</p>
      </div>
      <div className="round-container"></div>
      <p className="fr-para">FR</p>
      <IoIosArrowDown className="arrow-button" />
    </div>
  )
}
export default Header
