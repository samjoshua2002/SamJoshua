import React from 'react';
import { Details } from '../constants/contents';

function Testimonial() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div >
          <p className=" text-center text-xl font-semibold">Ability Fusion</p>
        </div>
        <div className="mt-8">
          <div className="text-center text-lg font-medium text-gray-700">
            <p>
              “I highly recommend {Details.name} for successfully delivering a web application integrated with React.js and Tailwind CSS. Their timely work, technical expertise, and effective communication made the project a success. I’m confident they will excel in future endeavors.”
            </p>
          </div>
          <div className="mt-8 text-center">
            <img
              alt="Ragul Rajangam"
              src="https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?w=384"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 text-gray-900 font-semibold">Ragul Rajangam</div>
            <div className="text-gray-600">CEO of Ability Fusion</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
