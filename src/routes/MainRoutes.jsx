import { lazy, Suspense } from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
// import Catalog from '../containers/client/catalog/Catalog'

import ProtectedRoute from './private/ProtectedRoute'

const PersonPage = lazy(() => import('../containers/person/PersonPage'))
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

const Loader = () => {
   const override = {
      display: 'block',
      height: '100vh',
      margin: '150px auto 0 auto',
   }
   return (
      <RingLoader
         color="#cb11ab"
         cssOverride={override}
         speedMultiplier={1.2}
         size={120}
      />
   )
}

const MainRoutes = () => {
   return (
      <MainLayuot>
         <Routes>
            <Route
               path="/"
               element={
                  <Suspense fallback={<Loader />}>
                     <Main />
                  </Suspense>
               }
            />
            <Route path="catalog" element={<Outlet />}>
               <Route
                  index
                  element={
                     <Suspense fallback={<Loader />}>
                        <ProductCatalogPage />
                     </Suspense>
                  }
               />
               <Route
                  path=":category/:productId"
                  element={
                     <Suspense fallback={<Loader />}>
                        <ProductInnerPage />
                     </Suspense>
                  }
               />
            </Route>
            <Route
               path="comparison"
               element={
                  <Suspense fallback={<Loader />}>
                     <ComparisonPage />
                  </Suspense>
               }
            />
            <Route
               path="favourites"
               element={
                  <Suspense fallback={<Loader />}>
                     <FavouritesPage />
                  </Suspense>
               }
            />
            <Route path="cart" element={<Outlet />}>
               <Route
                  index
                  element={
                     <Suspense fallback={<Loader />}>
                        <CartPage />
                     </Suspense>
                  }
               />
               <Route
                  path="ordering"
                  element={
                     <Suspense fallback={<Loader />}>
                        <OrderingPage />
                     </Suspense>
                  }
               />
            </Route>
            <Route
               path="person"
               element={
                  <Suspense fallback={<Loader />}>
                     <ProtectedRoute roles="USER" element={<PersonPage />} />
                  </Suspense>
               }
            />
            <Route
               path="about"
               element={
                  <Suspense fallback={<Loader />}>
                     <AboutPage />
                  </Suspense>
               }
            />
            <Route
               path="delivery"
               element={
                  <Suspense fallback={<Loader />}>
                     <DeliveryPage />
                  </Suspense>
               }
            />
            <Route
               path="faq"
               element={
                  <Suspense fallback={<Loader />}>
                     <FaqPage />
                  </Suspense>
               }
            />
            <Route
               path="contacts"
               element={
                  <Suspense fallback={<Loader />}>
                     <Contacts />
                  </Suspense>
               }
            />
            {/* <Route path="*" element={<NotFound />} /> */}
         </Routes>
      </MainLayuot>
   )
}

export default MainRoutes
