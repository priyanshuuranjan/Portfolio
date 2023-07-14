// import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
    </Routes>
    </>
  );
}

export default App;
