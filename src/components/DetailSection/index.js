import './index.css'
import {IoArrowForwardSharp} from 'react-icons/io5'
const DetailSection = () => {
  return (
    <div className="detail-section-container">
      <h1 className="on-para">
        on s'occupe de <span className="tout-para">tout</span>
      </h1>
      <p className="office-para">
        Office ipsum you must be muted. It meeting commitment busy pain.
      </p>
      <div className="icons-container">
        <div className="luggage-container">
          <img
            src="https://i.ibb.co/T0V71zr/Screenshot-2024-12-09-222301.png"
            className="luggage-image"
          />
          <h1 className="rep-para">
            Livarison & Reprise <br />
            <span className="selon-para">Selon vos besoins</span>
          </h1>
        </div>
        <hr className="hori-line" />
        <div className="luggage-container">
          <img
            src="https://i.ibb.co/zhxbvQh/Screenshot-2024-12-09-222320.png"
            className="luggage-image"
          />
          <h1 className="rep-para">
            Nettoyage <br />
            <span className="selon-para2">Selon vos besoins</span>
          </h1>
        </div>
        <hr className="hori-line" />
        <div className="luggage-container">
          <img
            src="https://i.ibb.co/C6hXpQL/Screenshot-2024-12-09-222338.png"
            className="luggage-image"
          />
          <h1 className="rep-para">
            Commande Illimitee <br />
            <span className="selon-para">Tout est possible</span>
          </h1>
        </div>
        <hr className="hori-line" />
        <div className="luggage-container">
          <img
            src="https://i.ibb.co/MsTQP0H/Screenshot-2024-12-09-222347.png"
            className="luggage-image"
          />
          <h1 className="rep-para">
            Transport & Enlevement <br />
            <span className="selon-para">On s' occcupe de tout.</span>
          </h1>
        </div>
      </div>
      <div className="newly-container">
        <img
          src="https://i.ibb.co/XZPXsKg/Screenshot-2024-12-09-225124.png"
          className="big-image"
        />
        <div className="pink-container">
          <p className="ins-heading">
            S’inscrire & économiser <span className="percent-span">10%</span>
          </p>
          <p className="sum-para">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn't. Yet busy any meeting
            shark light marginalised 4-blocker message. Productize corporate
            nail caught synergy highlights lunch. Company another pushback items
            dear or any. john@doe.com S’inscrire
          </p>
          <div className="joh-container">
            <div className="white-container">John@doe.com</div>
            <button className="inscire-button">
              S'INSCRIRE <IoArrowForwardSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailSection
