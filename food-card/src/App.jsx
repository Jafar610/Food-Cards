import{ Component } from 'react'
import Card from './components/Card.jsx'
import Data from './assets/data.js'


class App extends Component {
  render() {
    return (
      <div>
        {Data.map((foodData) =>{
          return(
            <Card
           name = {foodData.name}
           images = {foodData.images}
           oldPrice = {foodData.oldPrice}
           newPrice = {foodData.newPrice}
           description = {foodData.description}
          />
          )
        })}
      </div>
    )
  }
}

export default App
