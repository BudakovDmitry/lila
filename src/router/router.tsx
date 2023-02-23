import { createBrowserRouter } from 'react-router-dom'
import Home from 'src/pages/Home'
import Game from 'src/pages/Game'
import Error from 'src/pages/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'game',
    element: <Game />,
  },
])
