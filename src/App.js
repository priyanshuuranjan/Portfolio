// import logo from './logo.svg';
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Componets/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
