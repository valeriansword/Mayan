import React from "react"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-[#3a5a40] bg-gradient-to-b from-[#dad7cd] to-[#ffffff] text-lg font-semibold py-[80px] max-sm:py-[50px]">
        <footer className=" flex justify-around ">
            <div>
                <Link to="/Mayan"><h1>Home</h1></Link>
                <Link to="/Mayan/About"><h1>About</h1></Link>
                <h1>Contact</h1>
                <div className="mt-[50px] max-sm:hidden">
                    <h1>© mayanexim 2024</h1>
                </div>
            </div>
            <div>
                <h1>Legal</h1>
                <Link to="/Mayan/Services"><h1>Services</h1></Link>
                <Link to="/Mayan/Products"><h1>Products</h1></Link>
            </div>
            
            <div>
                <a href="https://www.linkedin.com/company/mayan-exim-global-transit/" target="new"><h1>Linked In</h1></a>                
                <a
        href="https://wa.me/918098787661"
        target="_blank"
        rel="noopener noreferrer"
      ><h1>Whatsapp</h1></a>
                <a href="https://mailto:mayanexim@gmail.com"><h1>E-mail</h1></a>
            </div>
            
        </footer>
            <h1 className="text-center pt-[30px] md:hidden">© mayanexim 2024</h1>
        </div>
      );
};

export default Footer;
