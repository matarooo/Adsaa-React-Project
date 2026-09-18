import { Outlet } from 'react-router';
import Navbar from './../Componets/Navbar';
import Footer from '../Componets/Footer';

export default function MainLayout() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
