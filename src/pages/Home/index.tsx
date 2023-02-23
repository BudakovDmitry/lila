import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to={`game`}>Game</Link>
    </div>
  )
}

export default Home
