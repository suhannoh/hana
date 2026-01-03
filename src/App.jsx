import { Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/theme.css' 
import Layout from './layout/Layout'
import Main from './pages/main/main'
import Product from './pages/product/Product'
import ProductDetail from './pages/product/ProductDetail'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product/' element={<Product />} />
          <Route path='/product/:category' element={<Product />} />
          <Route path='/product/:category/:id' element={<ProductDetail />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
