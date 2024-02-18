
import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "How experienced is the team at Dev Team Tech?",
      content: "At Dev Team Tech, our team boasts a wealth of experience in web app, mobile app, and software development. With years of collective expertise and a proven track record of successful projects, our developers are adept at tackling diverse challenges and delivering high-quality solutions tailored to our clients' specific needs. We continuously invest in professional development and stay abreast of the latest technologies to ensure that our team remains at the forefront of the industry, providing our clients with innovative and reliable services. "
    },
    {
      title: "What is the typical timeline for project completion?",
      content: "The typical timeline for project completion at Dev Team Tech varies depending on the scope and complexity of each project. However, we strive to provide realistic timelines that align with our clients' goals and expectations. During the initial consultation, we work closely with our clients to understand their project requirements and establish a timeline that balances efficiency with quality. Throughout the development process, we maintain open communication and transparency, providing regular updates on progress and milestones to ensure timely delivery and client satisfaction.."
    },
    {
      title: "What services does Dev Team Tech offer?",
      content: "At Dev Team Tech, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. From web development to mobile app development, software development, UI/UX design, and consulting, we are dedicated to delivering innovative solutions that drive business growth and success. Our experienced team collaborates closely with clients to understand their unique requirements and goals, leveraging the latest technologies and best practices to create tailored solutions that exceed expectations. With a focus on quality, creativity, and customer satisfaction, Dev Team Tech is your trusted partner for all your digital needs"
    },
    {
      title: "How does Dev Team Tech ensure the security of client data and intellectual property?",
      content: "At Dev Team Tech, we prioritize the security and confidentiality of our clients' data and intellectual property. We employ stringent security measures and best practices to safeguard sensitive information throughout the development process. This includes implementing robust encryption protocols, restricting access to authorized personnel only, and regularly updating our systems to address potential vulnerabilities. Additionally, all team members undergo comprehensive training on data protection and confidentiality protocols to ensure compliance with industry standards and regulations. We also offer non-disclosure agreements (NDAs) to provide an added layer of protection for our clients' intellectual property. Our commitment to security and privacy is unwavering, and we continuously monitor and enhance our security measures to mitigate risks and safeguard our clients' valuable assets."
    }]
}

const Faqu = () => {
  return (
    <>
    <div 
    data-aos="fade-right"

    
    className='container m-2 py-8 md:py-12'>
        <Faq data={data}/>
    </div>

    </>
  )
}

export default Faqu