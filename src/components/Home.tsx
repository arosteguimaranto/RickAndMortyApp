
import { useRickAndMortyContext } from '../context/charactersContext'


const Home = () => {
const {loading, characters} = useRickAndMortyContext();
console.log(characters);


  return (
    <div>
      <h1>Hola</h1>
      {JSON.stringify(characters)}
      <div>

      </div>
    </div>
  )
}

export default Home


  

  

