import { Outlet } from 'react-router'
import './Root.css'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer';



function Root() {
  return (
    <div>
      <div className='lg:px-10 xl:px-20'>
        <Navbar></Navbar>
      </div>
      <div className='px-4 md:px-10 xl:px-20'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
