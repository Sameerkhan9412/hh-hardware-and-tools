import React from 'react'
const About = () => {
    const aboutSection=[
        {   id:1,
            desc:"Welcome to SolveurPro, your trusted platform for solving everyday challenges with ease and efficiency. We specialize in providing top-tier educational services, Employability skills training, and skilled home services, ensuring that individuals and families have access to expert assistance whenever they need it.",
            image:"https://m.media-amazon.com/images/I/41pzyYbGJNL.jpg"
        },
        {   id:2,
            desc:"At SolveurPro, we believe in empowering individuals—whether it’s through personalized tutoring, career-focused vocational training, or professional home services such as plumbing, electrical work, and cleaning. Our goal is to enhance learning, improve employability, and simplify daily life with skilled professionals at your service.",
            image:"https://m.media-amazon.com/images/I/51hu9QeUYHL._SX300_SY300_QL70_FMwebp_.jpg"
        },
        {   id:3,
            desc:"With a customer-first approach, we ensure reliable, high-quality services through expert professionals and responsive support. As we continue to grow, we remain committed to expanding our services, embracing technology, and building long-term partnerships to better serve our clients.",
            image:"https://m.media-amazon.com/images/I/81xz8DKHHaL._SX679_.jpg"
        },
    ]
  return (
    <div className='mt-14'>
        <h1 className='text-red-600 font-bold text-center text-4xl'>About Us</h1>
        <div className='max-w-6xl mx-auto'>
            {
                aboutSection.map((section,index)=>(
                    <div className={`flex w-[100%] justify-between items-center gap-4 mx-8 p-4 ${section.id%2==0?'flex flex-row-reverse':''} max-md:flex-col max-md:mx-2 `}>
                        <p className='w-[50%] text-black text-lg px-4 max-md:w-full max-md:text-sm'>{section.desc}</p>
                            <img src={section.image} alt="" className='  w-[40%] rounded-b-lg overflow-hidden mx-4 max-md:w-[70%] ' />
                    </div>
                ))
            }
        </div>
        <p className='bg-red-600 text-white text-2xl p-8 rounded-full mb-8 text-center font-bold'>Join us on this journey towards excellence, empowerment, and convenience—because at SolveurPro, we are here to solve your problems, every step of the way.</p>
    </div>
  )
}

export default About