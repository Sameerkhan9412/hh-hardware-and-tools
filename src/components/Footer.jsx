import React from "react";
// import logo from "https://res.cloudinary.com/sameerkhan/image/upload/v1690021344/Logo-Full-Light_dmyqu2.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Link from "next/link";
// import instagram from "../../assets/instagram.png";
// import facebook from "../../assets/facebook.png";
// import linkedin from "../../assets/linkedin.png";
// import whatsapp from "../../assets/whatsapp.gif";
// import youtube from "../../assets/youtube.png"
// import phone from "../../assets/phone.jpeg";

const socialIcons = [
  { icons: "https://res.cloudinary.com/sameerkhan/image/upload/v1742054248/hhhardware/y8fhkkpwatzk9yntaa8j.png", link: "https://www.instagram.com/solveurpro_enterprises/" },
  { icons: "https://res.cloudinary.com/sameerkhan/image/upload/v1742054278/hhhardware/kqu9ygqh16qp1ddaaceu.png", link: "https://facebook.com/solverurpro" },
  { icons: "https://res.cloudinary.com/sameerkhan/image/upload/v1742054342/hhhardware/vftixdk68ehrpw1jfycz.png", link: "https://www.linkedin.com/company/solveurpro-enterprise/posts/?feedView=all" },
  { icons: "https://res.cloudinary.com/sameerkhan/image/upload/v1742054380/hhhardware/whatsapp-BcW6t1pr_ccq0r2.gif", link: "https://wa.me/7895680679" },
];
const Footer = () => {
  return (
    <div className="w-full bg-[#457B9D] text-[#1D3557] ">
  <div className="grid grid-cols-1 py-16 px-4 max-w-7xl mx-auto gap-4 md:grid-cols-2 lg:grid-cols-5">
    <div className=" md:col-span-2 ">
      <img src={"https://res.cloudinary.com/sameerkhan/image/upload/v1690021344/Logo-Full-Light_dmyqu2.png"} alt="" className="w-60 rounded-lg " />
      <div className="flex gap-2 my-4">
        {
          socialIcons.map((child,index)=>(
            <a href={`${child.link}`} key={index} target="_blank"><img src={child.icons} alt="social icons" className="" /></a>
          ))
        }
      </div>
    </div>
    <div className="font-bold ">
      <h1 className="text-red-500 text-lg">SERVICES</h1>
      <div className="flex flex-col gap-4">
        <Link href="/services">Tutoring Services</Link>
        <Link href="/services">Job Enablement Training</Link>
        <Link href="/services">Recruitment Consultancy</Link>
        <Link href="/services">Entrepreneurship Support</Link>
        <Link href="/services">Physically Challenged Students</Link>
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">COMPANY</h1>
      <div className="flex flex-col gap-4">
        <Link href="about">About Us</Link>
        <Link href="contact">Contact Us</Link>
        <Link href="">Gallary</Link>
        <Link href="">News</Link>
        <Link href="">Jobs</Link>
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">CONTACT US</h1>
      <div className="flex flex-col gap-4">
        <a href="tel:7895680679" className="flex items-center gap-2" >  <HiOutlinePhone/>7895680679</a>
        <a href="mailto:solveurprobiz@gmail.com" className="flex items-center gap-2" ><HiOutlineMail/>solveurprobiz@gmail.com</a>
      </div>
    </div>
  </div>  
  <p className=" text-center py-2 text-sm">
        <a href="https://portfoliobysameer.vercel.app/" target="_blank">Design And Developed By ❤️ Sameer Khan &copy; 2025 hhhardware & Tools. All Rights Reserved</a>
      </p>
  </div>
  );
};

export default Footer;