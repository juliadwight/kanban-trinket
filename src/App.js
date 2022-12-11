import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Board from './pages/Board'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
