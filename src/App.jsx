import { Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/theme.css' 
import Layout from './layout/Layout'
import Main from './pages/main/Main'
import Product from './pages/product/Product'
import ProductDetail from './pages/product/ProductDetail'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ScrollToTop from './components/product/ScrollToTop'

function App() {

  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product/' element={<Product />} />
          <Route path='/product/:category' element={<Product />} />
          <Route path='/product/:category/:id' element={<ProductDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
