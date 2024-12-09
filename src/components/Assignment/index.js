import Header from '../Header'
import HeaderItem from '../HeaderItem'
import Home from '../Home'
import Articles from '../Articles'
import DetailSection from '../DetailSection'
import Footer from '../Footer'
import './index.css'
const itemsHeaderList = [
  {id: 1, item: 'ART DE LA TABLE'},
  {id: 2, item: 'MOBILIER'},
  {id: 3, item: 'NAPPAGE'},
  {id: 4, item: 'MATERIEL DE SALLE'},
  {id: 5, item: 'CUISINE'},
  {id: 6, item: 'BARBECUE'},
  {id: 7, item: 'TENTE'},
  {id: 8, item: 'CHAUFFAGE'},
  {id: 9, item: 'PODIUM - PISTE DE DANSE'},
  {id: 10, item: 'SON ET LUMIERE'},
  {id: 11, item: 'PACKS'},
  {id: 12, item: 'CONSOMMABLES'},
]
const Assignment = () => {
  return (
    <div className="app-container">
      <Header />
      <ul className="headeritem-container">
        {itemsHeaderList.map(eachItem => (
          <HeaderItem
            isActive={eachItem.id === 1}
            key={eachItem.id}
            itemDetails={eachItem}
          />
        ))}
      </ul>
      <Home />
      <h1 className="articles-heading">Articles similaires</h1>
      <Articles />
      <DetailSection />
      <hr className="last-horizantal" />
      <Footer />
    </div>
  )
}
export default Assignment
