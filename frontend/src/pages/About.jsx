import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis itaque nisi eius? Voluptatem, amet! Quibusdam ipsa atque error, quasi voluptatem, dolorum aliquam, quae magni impedit fugit eveniet? Adipisci, minima!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit optio accusamus numquam dolor consequuntur molestias distinctio. Quasi, odio mollitia quo nam nihil quis aspernatur ex temporibus perferendis recusandae, consequatur nisi.</p>
        <b className='text-gray-800'>Our Misson</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quos quae! Quaerat ratione doloribus neque hic architecto a cum ex, facilis recusandae dolores sint quibusdam consequatur ducimus, minima iure accusamus.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum? Laboriosam dolorem mollitia iure nostrum iste. Laudantium cum ipsum enim.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum? Laboriosam dolorem mollitia iure nostrum iste. Laudantium cum ipsum enim.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum? Laboriosam dolorem mollitia iure nostrum iste. Laudantium cum ipsum enim.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About