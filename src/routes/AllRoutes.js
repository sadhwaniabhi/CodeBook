import { Form, Route, Routes } from "react-router-dom"
import { HomePage, Login, Register, PageNotFound, ProductsPage, CartPage, DashboardPage } from '../pages/index';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/login" element= { <Login /> } />
      <Route path="/register" element={ <Register />} />
      <Route path="/products" element = { <ProductsPage />} />
      <Route path="/cart" element={ <CartPage /> } />
      <Route path="/dashboard" element={ <DashboardPage />} />
      <Route path="*" element={ <PageNotFound />} />
    </Routes>
  )
}
