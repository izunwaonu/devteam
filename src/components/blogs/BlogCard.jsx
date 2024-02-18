import React from 'react'

const BlogCard = ({Img}) => {
  return (
    <>
    <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
        <div className="overflow-hidden">
            <img
            src={Img}
            alt="no image found"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
        </div>
        <div className='flex justify-between pt-2 text-slate-600'>
            <p>January 23, 2024</p>
            <p className='line-clamp-1'>By Cornelius Ugwu</p>
        </div>
        <div className='space-y-2 py-3'>
            <hi className='line-clamp-1 font-bold'>Unleashing Growth: Harnessing the 
                Power of Online Presence for Your Business
            </hi>
            <p className='line-clamp-2'>
                In today's fast-paced digital era, establishing a formidable online presence has become an indispensable strategy for businesses seeking sustained growth. The power of an impactful online presence transcends mere visibility; it serves as a catalyst for brand awareness, customer engagement, and overall business expansion. By embracing the vast opportunities offered by the digital realm, businesses can unleash unprecedented growth and stay ahead in an increasingly competitive landscape.

A robust online presence begins with the development of a professional and user-friendly website, the virtual storefront of the modern business. This digital hub not only showcases products or services but also serves as a dynamic platform for engaging with customers. A well-optimized website, coupled with effective search engine optimization (SEO) strategies, ensures that businesses can be easily discovered by their target audience, thereby enhancing visibility and driving organic traffic.

Social media platforms have emerged as dynamic arenas for businesses to connect with their audience on a personal level. Through strategic social media marketing, businesses can share valuable content, promotions, and engage in meaningful conversations. Targeted advertising on platforms such as Facebook, Instagram, and Twitter enables businesses to reach specific demographics, fostering brand awareness and customer loyalty. The evolving landscape of online marketing demands businesses to adapt, creating content that resonates with their audience and utilizing multimedia formats, such as videos, to capture attention in a crowded digital space.

In conclusion, the digital age presents unparalleled opportunities for businesses to expand their reach and foster growth through a robust online presence. By navigating the complexities of website optimization, leveraging social media platforms, and staying attuned to the latest digital trends, businesses can unleash the full potential of their online presence and position themselves for sustained success in an ever-evolving business landscape.</p>
        </div>
    </div>
    </>
  )
}

export default BlogCard