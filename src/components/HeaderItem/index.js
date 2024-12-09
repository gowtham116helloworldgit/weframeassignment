import './index.css'
const HeaderItem = props => {
  const {itemDetails, isActive} = props
  const {id, item} = itemDetails
  const styling = isActive ? 'special-styling' : 'normal-styling'
  return <li className={styling}>{item}</li>
}
export default HeaderItem
