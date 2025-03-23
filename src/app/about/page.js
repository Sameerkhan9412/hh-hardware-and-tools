import React from 'react'
const About = () => {
    const aboutSection=[
        {   title:"Our Mission",
            desc:"At H.H.Hardware & Tools, our mission is simple: to provide professionals and craftsmen with high-quality hand files they can trust. For over three generations, we’ve been committed to combining traditional craftsmanship with modern innovation to create tools that are strong, precise, and built to last. We’re not just making tools – we’re helping people create, build, and succeed with confidence.",
            image:"https://res.cloudinary.com/sameerkhan/image/upload/v1742728155/hhhardware/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV_vjm4wq.jpg"
        },
        {   title:"Our Vision",
            desc:"We see a future where H.H.Hardware & Tools is known worldwide for its quality and reliability. Our vision is to grow our presence in global markets while staying true to the values that got us here – trust, quality, and craftsmanship. We want to be the go-to brand for professionals everywhere, offering tools that make their work easier, more precise, and more rewarding.",
            image:"https://res.cloudinary.com/sameerkhan/image/upload/v1742728209/hhhardware/gmt_banner_website_csr-or_our-vision_february_2025_mobile_ba8h1x.jpg"
        },
    ]
  return (
    <div className='mt-4 text-sm max-w-6xl  mx-auto'>
        <h1 className='text-[#457B9D] font-bold text-center text-4xl'>About Us</h1>
       
       <div className='flex flex-col gap-4 px-4 mx-4'>
        <p className=''>At H.H.Hardware & Tools, quality isn’t just a standard – it’s a tradition. For over three generations, we’ve been crafting premium-quality hand files that professionals and craftsmen trust. Founded and led by Mohd Ibrahim Hameed, our family-run business combines decades of experience with modern innovation to create tools that deliver strength, precision, and reliability.</p>
        <p>
        We’re proud to have built a name that stands for excellence – not just in India, but around the world. Our hand files are exported to Asia, Africa, Europe, North America, and Latin America, helping builders, metalworkers, and professionals tackle their projects with confidence. Every file we produce is a result of careful craftsmanship and attention to detail, ensuring that it meets the highest industry standards.
        </p>
        <p>What sets us apart is our dedication to getting it right – from sourcing the best raw materials to using advanced manufacturing techniques. Our team takes pride in every product that leaves our facility, knowing that it will help someone create, build, or repair with precision.</p>
        <p>
        At H.H.Hardware & Tools, we’re not just making tools – we’re continuing a legacy of craftsmanship and trust. Whether you’re a seasoned professional or just starting out, you can count on us to provide the tools you need to get the job done right.
        </p>
       </div>
        <div className='max-w-6xl mx-auto'>
            {
                aboutSection.map((section,index)=>(
                    <div className={`flex w-[100%] justify-between items-center gap-4 mx-8 p-4 ${index%2==0?'flex flex-row-reverse':''} max-md:flex-col max-md:mx-2  `}>
                        <div className='w-[70%] text-black text-lg px-4 max-md:w-full max-md:text-sm'>
                        <h2 className='text-2xl text-[#457B9D] font-extrabold '>{section.title}</h2>
                        <p className=''>{section.desc}</p>
                            </div>
                        <img src={section.image} alt="" className='  w-[30%] rounded-b-lg overflow-hidden mx-4 max-md:w-[70%] ' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default About