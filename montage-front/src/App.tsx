import './nullstyle.css'
import './App.css'
import Header from './components/Header/Header'
import Lmenu from './components/LMenu/Lmenu'
import Body from './components/Body/Body'

const App: React.FC = () => {


  return (

    <div className='App'>
      <Header />

      <div className='container'>
      <Lmenu />
      <Body />
      
      </div>
      
      
    </div>
  )
}

export default App
