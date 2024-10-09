import React from "react"
import { Link } from "react-router-dom";
import vebzart from "../assets/vebzart.png";
const Footer = () => {
  return (
    <div>
    <div className="text-[#3a5a40] bg-gradient-to-b from-[#dad7cd] to-[#ffffff] text-lg font-semibold lg:py-[80px]  max-sm:py-[50px]">
        <footer className=" flex justify-around ">
            <div>
                <Link to="/Mayan"><h1>Home</h1></Link>
                <Link to="/Mayan/About"><h1>About</h1></Link>
                <h1>Contact</h1>
                <div>
                <h1 className=" pt-[30px] text-center max-sm:hidden">mayan exim global transit ®</h1>  
                </div>
                
            </div>
            <div>
                <Link to="/Mayan/Certificate"><h1>Certificate</h1></Link>
                <Link to="/Mayan/Services"><h1>Services</h1></Link>
                <Link to="/Mayan/Products"><h1>Products</h1></Link>
            </div>
            
            <div>
                <a href="https://www.linkedin.com/company/mayan-exim-global-transit/" target="new"><h1>Linked In</h1></a>                
                <a href="https://wa.me/918098787661" target="_blank" rel="noopener noreferrer"><h1>Whatsapp</h1></a>
                <a href="https://mailto:mayanexim@gmail.com"><h1>E-mail</h1></a>
                <span><img src={vebzart} className="h-[60px] w-[80px] mt-[20px] max-sm:hidden"/></span>
            </div>
            
        </footer>
            <h1 className=" pt-[30px] text-center md:hidden">mayan exim global transit ®</h1>
            
        </div>
        <span className="flex justify-center"><img src={vebzart} className="h-[60px] w-[80px] "/></span>
        </div>
      );
};

export default Footer;
