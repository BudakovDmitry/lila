import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to={`game`}>Game</Link>
      <Link to={`sign-in`}>Login</Link>
    </div>
  )
}

export default Home
