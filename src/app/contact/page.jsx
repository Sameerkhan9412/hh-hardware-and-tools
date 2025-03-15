import React from "react";
// import img from "https://www.solveurpro.com/assets/male-educator-S-HSRWGs.jpg";
import { FaPhone } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
// import contactimg from "https://res.cloudinary.com/sameerkhan/image/upload/v1742053782/hhhardware/contact_ol69le.webp";
const Contact = () => {
  return (
    <div className=" mx-auto relative min-h-screen">
      <div className="relative px-8 ">
        <div className="flex max-w-7xl mx-auto my-4 items-center flex-col lg:flex-row ">
          <div className=" text-[#1D3557] px-4 flex flex-col items-start w-full lg:w-3/5  ">
            <h1 className="text-2xl  font-extrabold mb-6">Get in touch</h1>
            <h2 className="md:text-2xl">
              Want to get in touch? We'd love to hear from you.
            </h2>
            <h2 className="md:text-2xl">Here's how you can reach us.</h2>
          </div>
          <img src={"https://res.cloudinary.com/sameerkhan/image/upload/v1742053970/hhhardware/male-educator-S-HSRWGs_iqlrz1.jpg"} alt="" className="w-full p-2 md:p-4 lg:w-2/5 lg:p-8" />
        </div>

        <div className=" max-w-7xl mx-auto grid grid-cols-1 gap-8 text-black items-center justify-center h-fit pb-8 md:grid-cols-2 ">
          <div className="shadow-[0px_10px_20px_rgba(0,0,0,1)] px-4 py-8 flex flex-col gap-2 items-center justify-center h-fit rounded-lg bg-white">
            <FaPhone className="text-4xl text-[#1D3557] rotate-90" />
            <h3 className="  font-bold">Talk to Sales</h3>
            <span className="text-center">
              Just pick up the phone to chat with a
              member of our  team.
            </span>
            <span className="text-[#1D3557] font-bold">7895680679</span>
          </div>
          <div className="shadow-[0px_10px_20px_rgba(0,0,0,1)] px-4 py-8 flex flex-col gap-2 items-center justify-center h-full rounded-lg bg-white">
            <FaHeadphonesSimple className="text-4xl text-[#1D3557]" />
            <h3 className="font-bold">Contact Customer Support</h3>
            <span className="text-center">
              Need a little help? Our support team is here for you.
            </span>
            <span className="bg-[#1D3557] text-white font-bold cursor-pointer py-2 px-4 rounded-lg transition-colors hover:bg-red-400">
              Contact Support
            </span>
          </div>
        </div>
        <img
          src={"https://res.cloudinary.com/sameerkhan/image/upload/v1742053782/hhhardware/contact_ol69le.webp"}
          alt=""
          className="absolute top-0 right-0 border-0 bottom-0 object-cover h-full w-full -z-20"
        />
        <div className="absolute top-0 right-0 border-0 bottom-0 h-full w-full  bg-white opacity-70 -z-10"></div>
      </div>

      {/* form */}
      <div className="grid grid-cols-5 mb-4 max-w-7xl mx-auto my-4">
        <div className="bg-[#B1B1B1] gap-4 text-white px-4 py-8 rounded-lg w-full col-span-5 md:col-span-2">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold">Contact Us</span>
            <span>We're open for any suggestion or just to have a chat.</span>

            <div className="flex flex-col ">
            <span>Address:</span>
            <span>S.S Nagar, Aligarh (U.P) 202122, India</span>
            </div>
            <div className="flex flex-col">
            <span>Phone:</span>
            <span>7895680679</span>
            </div>
            <div className="flex flex-col">
            <span>Email:</span>
            <span>solveurprobiz@gmail.com</span>
            </div>
            </div>
        </div>
        <form action="" className="bg-white text-black p-4 gap-4 mb-6 col-span-5 md:col-span-3">
          <h1 className=" font-bold text-2xl text-black mb-6">send us a message</h1>
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="fullname">Full Name <br/>
              <input type="text"  id="fullname" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" placeholder="Name" />
            </label>
            <label htmlFor="email">Email<br/>
              <input type="email"  id="email" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" placeholder="Email" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <label htmlFor="mobile">Mobile <br/>
              <input type="tel" placeholder="+1 234 567 890" pattern="[+0-9\s-]+"  id="mobile" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]"  />
            </label>
            <label htmlFor="class">Class<br/>
              <input type="text"  id="class" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" placeholder="12th" />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <label htmlFor="subject">Subject <br/>
              <input type="text" placeholder="Mathmatics,Physics,Biology etc"  id="subject" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]"  />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <label htmlFor="message">Message <br/>
             <textarea name="message" id="message" placeholder="Message" rows={4} className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]"></textarea>
            </label>
          </div>
          
          <button type="submit" className="bg-red-600 text-white p-2 hover:bg-red-500 cursor-pointer px-4 rounded-lg mt-6 transition-all ">Send Message</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;