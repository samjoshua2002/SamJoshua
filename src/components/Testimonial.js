// Testimonial.js
import React from 'react';
import { Details } from '../constants/contents';

function Testimonial() {
  return (
    <section className="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className='flex items-center justify-center'>
          <img
            alt=""
            src='abilityFusionIcon.jpeg'
            className="h-12"
          />
          <p className='text-xl font-semibold'>Ability Fusion</p>
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-700 sm:text-2xl sm:leading-9">
            <p>
              “I highly recommend {Details.name} for successfully delivering a web application integrated with React.js and Tailwind CSS. Their timely work, technical expertise, and effective communication made the project a success. I’m confident they will excel in future endeavors.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src='https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?w=384'
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Ragul Rajangam</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Ability Fusion</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>








  );
}

export default Testimonial;
