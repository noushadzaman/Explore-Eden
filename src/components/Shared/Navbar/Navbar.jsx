import Container from '../Container'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'
import { Link } from 'react-router-dom';

const Navbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div id="navbar" className='duration-200 ease-in-out fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Logo></Logo>
            {/* Dropdown Menu */}
            <div className='flex items-center gap-3'>
              <Link to="/rooms" className='px-4 font-semibold'>Rooms</Link>
              <MenuDropdown />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
