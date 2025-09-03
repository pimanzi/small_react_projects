import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './utils/server';
import Vans from './pages/vans/Vans';
import VanDetail from './pages/vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './pages/Host/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhoto from './pages/Host/HostVanPhoto';
import HostVanPricing from './pages/Host/HostVanPricing';
import { getVans } from './api';
import { Suspense } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={
          <Suspense fallback={<div>loading</div>}>
            <Vans />
          </Suspense>
        }
        loader={getVans}
        errorElement={<Error></Error>}
      />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route element={<HostLayout />} path="host">
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />}></Route>
          <Route path="photos" element={<HostVanPhoto></HostVanPhoto>}></Route>

          <Route
            path="pricing"
            element={<HostVanPricing></HostVanPricing>}
          ></Route>
        </Route>
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
