import { BrowserRouter,} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { AppRoutes } from '../../Routes' 
import { Navbar } from '../../Components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
} 

export default App