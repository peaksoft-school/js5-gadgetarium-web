import { lazy, Suspense } from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

// import AboutPage from '../containers/client/AboutPage'
// import Contacts from '../containers/client/Contacts'
// import DeliveryPage from '../containers/client/DeliveryPage'
// import FagPage from '../containers/client/FagPage'
// import CartPage from '../containers/client/main-pages/CartPage'
// import ComparisonPage from '../containers/client/main-pages/ComparisonPage'
// import FavouritesPage from '../containers/client/main-pages/FavouritesPage'
// import Main from '../containers/client/main-pages/Main'
// import OrderingPage from '../containers/client/main-pages/OrderingPage'
// import ProductCatalogPage from '../containers/client/main-pages/ProductCatalogPage'
// import ProductInnerPage from '../containers/client/main-pages/ProductInnerPage'
// import MainLayout from '../layout/MainLayout'
import NotFound from '../components/UI/NotFound'

const MainLayuot = lazy(() => import('../layout/MainLayout'))
const AboutPage = lazy(() => import('../containers/client/AboutPage'))
const Contacts = lazy(() => import('../containers/client/Contacts'))
const DeliveryPage = lazy(() => import('../containers/client/DeliveryPage'))
const FagPage = lazy(() => import('../containers/client/FagPage'))
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
   () => import('../containers/client/main-pages/ProductCatalogPage')
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
               <Route path="catalog" element={<Outlet />}>
                  <Route index element={<ProductCatalogPage />} />
                  <Route path=":productId" element={<ProductInnerPage />} />
               </Route>
               <Route path="comparison" element={<ComparisonPage />} />
               <Route path="favourites" element={<FavouritesPage />} />
               <Route path="cart" element={<Outlet />}>
                  <Route index element={<CartPage />} />
                  <Route path="ordering" element={<OrderingPage />} />
               </Route>
               <Route path="about" element={<AboutPage />} />
               <Route path="delivery" element={<DeliveryPage />} />
               <Route path="fag" element={<FagPage />} />
               <Route path="contacts" element={<Contacts />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </MainLayuot>
      </Suspense>
   )
}

export default MainRoutes
