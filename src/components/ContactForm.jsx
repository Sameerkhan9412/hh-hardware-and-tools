'use client'
import axios from 'axios';
import React, { useState } from 'react'

const ContactForm = () => {
    const [formData,setFormData]=useState({name:"",email:"",mobile:"",product:"",location:"",message:""});
    const submitForm = async (e) => {
      e.preventDefault();
  
      try {
          const response = await axios.post("/api/contact", formData);
  
          if (response.data.success) {
              alert("Your message has been sent successfully!");
  
              // Reset form fields
              setFormData({
                name: "",
                email: "",
                mobile: "",
                product: "",
                location: "",
                message: ""
            });
          } else {
              alert("Failed to send message. Please try again.");
          }
      } catch (error) {
          console.error("Error submitting form:", error);
          alert("Something went wrong. Please try again later.");
      }
  };
  
    

  return (
    <form onSubmit={(e)=>submitForm(e)}  className="bg-white text-black p-4 gap-4 mb-6 col-span-5 md:col-span-3">
    <h1 className=" font-bold text-2xl text-black mb-6">send us a message</h1>
    <div className="grid grid-cols-2 gap-4">
      <label htmlFor="fullname">Full Name <br/>
        <input type="text"  id="fullname" onChange={(e)=>setFormData({...formData,name:e.target.value})} className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" placeholder="Name" name="name" />
      </label>
      <label htmlFor="email">Email<br/>
        <input type="email"  id="email" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" name='email' placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})} />
      </label>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <label htmlFor="mobile">Mobile <br/>
        <input type="tel" placeholder="+1 234 567 890" pattern="[+0-9\s-]+"  id="mobile" className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" name="mobile" onChange={(e)=>setFormData({...formData,mobile:e.target.value})}  />
      </label>
      <label htmlFor="product">Product<br/>
        <input type="text"  id="product" name='product' onChange={(e)=>setFormData({...formData,product:e.target.value})} className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]" placeholder="files" />
      </label>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4">
      <label htmlFor="subject">Location <br/>
        <input type="text" placeholder="uttar pradesh, aligarh"  id="subject" name='location' onChange={(e)=>setFormData({...formData,location:e.target.value})} className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]"  />
      </label>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4">
      <label htmlFor="message">Message <br/>
       <textarea name="message" id="message" onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder="Message" rows={4} className="border-2 outline-none w-full p-2 rounded-lg border-[#E0E0E0]"></textarea>
      </label>
    </div>
    
    <button type="submit" className="bg-red-600 text-white p-2 hover:bg-red-500 cursor-pointer px-4 rounded-lg mt-6 transition-all ">Send Message</button>

  </form>
  )
}

export default ContactForm