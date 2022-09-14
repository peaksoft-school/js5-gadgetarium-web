import { lazy, Suspense } from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
// import Catalog from '../containers/client/catalog/Catalog'

const MainLayuot = lazy(() => import('../layout/MainLayout'))
const AboutPage = lazy(() => import('../containers/client/AboutPage'))
const Contacts = lazy(() => import('../containers/client/Contacts'))
const DeliveryPage = lazy(() => import('../containers/client/DeliveryPage'))
const FaqPage = lazy(() => import('../containers/client/FaqPage'))
const CartPage = lazy(() => import('../containers/client/main-pages/CartPage'))
const ComparisonPage = lazy(
   () => import('../containers/client/main-pages/ComparisonPage')
)
const FavouritesPage = lazy(
   () => import('../containers/client/main-pages/FavouritesPage')
)
const Main = lazy(() => import('../containers/client/main-pages/Main'))
const OrderingPage = lazy(
   () => import('../containers/client/main-pages/OrderingPage')
)
const ProductCatalogPage = lazy(
   () => import('../containers/client/catalog/Catalog')
)
const ProductInnerPage = lazy(
   () => import('../containers/client/main-pages/ProductInnerPage')
)

const override = {
   display: 'block',
   margin: '150px auto 0 auto',
}

const MainRoutes = () => {
   return (
      <Suspense
         fallback={
            <RingLoader
               color="#cb11ab"
               cssOverride={override}
               speedMultiplier={1.2}
               size={120}
            />
         }
      >
         <MainLayuot>
            <Routes>
               <Route path="" element={<Main />} />
               <Route path="catalog" element={<ProductCatalogPage />} />
               <Route
                  path="catalog/:productId"
                  element={<ProductInnerPage />}
               />
               <Route path="comparison" element={<ComparisonPage />} />
               <Route path="favourites" element={<FavouritesPage />} />
               <Route path="cart" element={<Outlet />}>
                  <Route index element={<CartPage />} />
                  <Route path="ordering" element={<OrderingPage />} />
               </Route>
               <Route path="about" element={<AboutPage />} />
               <Route path="delivery" element={<DeliveryPage />} />
               <Route path="faq" element={<FaqPage />} />
               <Route path="contacts" element={<Contacts />} />
            </Routes>
         </MainLayuot>
      </Suspense>
   )
}

export default MainRoutes
