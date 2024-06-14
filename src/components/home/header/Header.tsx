
import Image from 'next/image'
import WarehouzezLogo from '/public/logo.png';
import Menulist from './Menulist';

const Header = () => {
  
   
  return (
    <div className="header_wrap">
        <div className="container flex items-center justify-around">
            <div className="logohead_wrap">
                <div className="headerLogo_section">
                    <Image src={WarehouzezLogo} alt="Warehouzez Logo" />
                </div>
            </div>
            <div className="headerMenu_section">
               <Menulist />
            </div>
            <div className="headerContact_section md:hidden lg:flex">
            <button className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                Contact Us
            </button>
            </div>
        </div>
    </div>
  )
}

export default Header;