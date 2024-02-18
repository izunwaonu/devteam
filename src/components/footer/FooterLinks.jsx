import React from 'react'

const FooterLinks = ({links}) => {
    console.log('FooterLinks', links)
  return (
    <>
        {
            links.map((link)=>(
                
                    <l1 key={link.name} className="cursor-pointer  transition-all duration-300 hover:translate-x-[4px]">
                    <a href="">{link.name}</a>
                    </l1>
                
            ))
        }
    </>
  )
}

export default FooterLinks