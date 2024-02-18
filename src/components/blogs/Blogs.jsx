import React from 'react'
import BlogCard from './BlogCard'
import Img1 from "../../assets/blogs/img1.png"
import Img2 from "../../assets/blogs/img1.png"
import Img3 from "../../assets/blogs/img1.png"


const Blogs = () => {
  return (
    <>
    <diV className="dark:bg-gray-900 dark:text-white">
    <section data-aos="fade-up" className='container mb-10 py-8'>
        <h1 className='mb-8 border-l-8 py-2 pl-2 text-center text-3xl text-bold'>Our Latest Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <BlogCard Img={Img1}/>
            <BlogCard Img={Img2}/>
            <BlogCard Img={Img3}/>
          
        </div>
    </section>
    </diV>
   
    </>
  )
}

export default Blogs