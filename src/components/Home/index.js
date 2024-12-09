import './index.css'
const Home = () => {
  return (
    <div className="home-container">
      <div className="description-container">
        <p className="home-para">Home</p>
        <p className="empty-para"></p>
        <p className="table-para">Art de la table</p>
      </div>
      <div className="newhome-container">
        <div className="machine-container">
          <div className="thumbnails-contaier">
            <div className="image1-container">
              <img
                src="https://i.ibb.co/6HwQXkV/Screenshot-2024-12-09-152202.png"
                className="chair-image"
              />
            </div>
            <div className="image1-container">
              <img
                src="https://i.ibb.co/XtZKMDS/Screenshot-2024-12-09-152358.png"
                className="chair-image"
              />
            </div>
            <div className="image1-container">
              <img
                src="https://i.ibb.co/XtZKMDS/Screenshot-2024-12-09-152358.png"
                className="chair-image"
              />
            </div>
            <div className="image1-container">
              <img
                src="https://i.ibb.co/XtZKMDS/Screenshot-2024-12-09-152358.png"
                className="chair-image"
              />
            </div>
          </div>
          <img
            src="https://i.ibb.co/bWJYdkY/coffe-maker.png"
            className="coffemachine-image"
          />
        </div>
        <div className="cheese-container">
          <div className="cheese-heading-container">
            <h1 className="cheese-heading">
              Cheese – appareil à raclette 1/2 roue
            </h1>
            <img
              className="love-image"
              src="https://i.ibb.co/mFLSSFJ/Screenshot-2024-12-09-155859.png"
            />
          </div>
          <p className="price-para">
            39,50€
            <span className="price-span">/pièce</span>
          </p>
          <div className="scale-container">
            <img
              src="https://i.ibb.co/1mKjqgj/Screenshot-2024-12-09-162256.png"
              className="scale-image"
            />
            <p className="centi-para">
              20<sup>cm</sup>
            </p>
            <img
              src="https://i.ibb.co/ZzV9FFZ/Screenshot-2024-12-09-162304.png"
              className="round-image"
            />
            <p className="centi-para2">
              50<sup>cm</sup>
            </p>
          </div>
          <p className="location-para">
            Location appareil à raclette - Raclette traditionnelle 1/2 roue{' '}
            <br />
            Réglable en hauteur <br /> Appareil à raclette professionnel <br />
            Boîtier de chauffe horizontal réglable en hauteur
          </p>
          <p className="volts-para">
            220V
            <br />
            900W
          </p>
          <hr className="horizantal-line" />
          <div className="button-container">
            <div className="one-container">
              <p className="one">-</p>
              <p className="two">1</p>
              <p>+</p>
            </div>
            <button className="blue-button">AJOUTER AU PANIER</button>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="content-container">
          <h1 className="description-heading1">Description produit</h1>
          <p className="description-para">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
            pour votre mariage, une fête d'anniversaire ou du personnel, ce
            produit a fait l'objet d'une sélection rigoureuse par notre équipe.
            Il est en location chez nous sous la référence "VAJGC". Nous sommes
            à votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art
            de la Table".
          </p>
        </div>
        <div className="questions-container">
          <div className="livra-container">
            <p className="livra-para">LIVRAISONS</p>
            <p className="plus-container2">+</p>
          </div>
          <div className="livra-container2">
            <p className="livra-para2">QUESTIONS</p>
            <p className="plus-container1">+</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
