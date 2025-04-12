import React from 'react';

const Brands = () => {
  return (
    <section className="py-10 bg-white">
      <h1 className="text-center text-4xl font-extrabold text-gray-700 mb-10">Our Brands</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-10 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dyhv34cil/image/upload/v1744469728/WhatsApp_Image_2025-04-06_at_1.29.24_PM_3_i1nbfm.jpg"
            alt="brand logo"
            className="max-h-48 object-contain"
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dyhv34cil/image/upload/v1744469837/WhatsApp_Image_2025-04-06_at_1.29.24_PM_2_s4uep9.jpg"
            alt="brand logo"
            className="max-h-48 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
