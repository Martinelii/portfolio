import './App.css'
import Home from './pages/home/Home'
import NavBar from './components/navBar/NavBar'
import Sobre from './components/sobre/Sobre'
import Projetos from './components/projetos/Projetos'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Sobre />
      <Projetos />
    </>
  )
}

export default App
