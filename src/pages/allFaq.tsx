 // import React from "react";
 import React, { useEffect, useState } from 'react';

 // Hardcoded FAQ data
 const faqs = [{
     "category": "Benefits and Capabilities",
     "questions": [
         {
             "question": "How can MIRA benefit my call center?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What features and capabilities does MIRA offer?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can you provide examples of use cases where MIRA has been successfully implemented?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How accurate is MIRA's AI software in understanding and responding to customer inquiries?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What languages does MIRA support for interactions with customers?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA adapt to evolving customer needs and preferences over time?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA provide personalized recommendations or suggestions based on customer interactions and data analysis?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What level of customization and configuration options are available to tailor MIRA to our specific business requirements?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle complex or technical inquiries that may require specialized knowledge or expertise?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any success stories or testimonials specifically related to MIRA's ability to improve customer satisfaction scores or Net Promoter Scores (NPS)?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA provide insights into customer sentiment and emotional state during interactions to tailor responses effectively?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle sensitive topics or crisis situations, ensuring appropriate responses and escalation protocols are followed?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Data Privacy and Security",
     "questions": [
         {
             "question": "How does MIRA handle data privacy and security?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA offer role-based access controls (RBAC) to ensure that only authorized personnel have access to sensitive customer data?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What measures are in place to ensure customer data confidentiality and compliance with regulations?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can you provide details about MIRA's data encryption and access control mechanisms?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any data anonymization techniques used by MIRA to protect sensitive customer information while still providing valuable insights?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA ensure compliance with industry-specific regulations, such as GDPR or HIPAA, regarding data handling and privacy?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA provide audit trails or logs of all interactions for compliance and accountability purposes?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Integration and Compatibility",
     "questions": [
         {
             "question": "What integration options are available for integrating MIRA with our existing systems?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA integrate with CRM systems, and if so, how seamless is the integration process?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA integrate with IVR systems, and if so, how seamless is the integration process?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA integrate with Call Center systems, and if so, how seamless is the integration process?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA integrate with Knowledge Base systems, and if so, how seamless is the integration process?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA integrate with Telephony systems, and if so, how seamless is the integration process?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any compatibility requirements or limitations that we should be aware of when integrating MIRA with our infrastructure?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA offer pre-built integrations with popular third-party applications and platforms commonly used in call center environments?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle updates and upgrades to ensure compatibility with evolving technology standards and APIs?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle API versioning and deprecation to minimize disruption to integrations with third-party systems over time?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA support custom integrations with proprietary or legacy systems unique to our organization?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any limitations or considerations for integrating MIRA with legacy systems that may use outdated protocols or proprietary formats?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA ensure data consistency and integrity when synchronizing information between multiple integrated systems?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA support real-time data synchronization for applications requiring up-to-the-minute information updates?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there opportunities for co-development or customization partnerships to extend MIRA's capabilities or integrate with industry-specific solutions?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA provide sandbox environments or developer tools for testing and prototyping integrations before deployment in production environments?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Reporting and Analytics",
     "questions": [
         {
             "question": "What reporting and analytics features are included with MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA provide insights into customer interactions, sentiment analysis, and performance metrics?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How customizable are the reporting dashboards and analytics tools offered by MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA generate predictive models or forecasts based on historical data to assist in resource planning and optimization?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA ensure data accuracy and reliability in its reporting and analytics outputs?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle data aggregation and normalization across disparate sources to provide a unified view of customer interactions?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA identify trends or patterns in customer behavior that may indicate emerging issues or opportunities for improvement?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Outbound Calls and Support",
     "questions": [
         {
             "question": "Can MIRA assist with outbound calls and customer outreach initiatives?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What functionalities does MIRA offer for managing outbound call campaigns and follow-ups?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle customer responses and feedback during outbound interactions?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA support automated campaign management and scheduling for outbound call initiatives, including A/B testing and performance tracking?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA dynamically adjust outbound call strategies based on real-time feedback and performance metrics to maximize effectiveness?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle opt-outs and compliance with regulatory requirements for outbound communications, such as Do Not Call lists?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Support and Maintenance",
     "questions": [
         {
             "question": "What ongoing support and maintenance services do you provide for MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How responsive is your support team to address technical issues or queries?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any service level agreements (SLAs) for support response times and resolution?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA handle version updates and patches to ensure system stability and security without disrupting ongoing operations?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA provide proactive monitoring and alerts for potential issues or anomalies to minimize downtime and service interruptions?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Scalability and Performance",
     "questions": [
         {
             "question": "How does MIRA handle spikes in call volume and fluctuations in customer demand?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can MIRA scale to accommodate growing business needs and increasing call traffic?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What measures are in place to ensure optimal performance and reliability under heavy load conditions?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What scalability benchmarks or performance thresholds has MIRA achieved in real-world deployments, particularly in high-demand scenarios?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there options for load testing and performance tuning to optimize MIRA's performance based on our specific usage patterns and requirements?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Cost Structure and Pricing",
     "questions": [
         {
             "question": "What is the cost structure for implementing and using MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any upfront costs or licensing fees associated with MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does pricing vary based on usage, features, or customization requirements?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible.."
         },
         {
             "question": "Can you provide insights into the total cost of ownership (TCO) for implementing and maintaining MIRA over the long term, including factors like licensing, infrastructure, and support?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any volume-based pricing discounts or flexible billing options available based on usage tiers or subscription models?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA help organizations achieve cost savings and ROI compared to traditional call center solutions, particularly in terms of agent efficiency and customer satisfaction metrics?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there any hidden fees or surcharges that organizations should be aware of when budgeting for MIRA implementation and ongoing usage?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Training and Onboarding",
     "questions": [
         {
             "question": "What training and onboarding services are available for our staff to learn how to use MIRA effectively?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Do you provide documentation, tutorials, or training materials to support the adoption of MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Can you customize training sessions to align with our specific business needs and objectives?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Does MIRA offer virtual or on-site training sessions led by experienced trainers to facilitate hands-on learning and knowledge transfer?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Are there options for certification programs or proficiency assessments to validate our staff's proficiency in using MIRA effectively?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How does MIRA provide ongoing learning resources and updates to ensure our staff remains up-to-date with the latest features and best practices?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Voice Biometrics and Authentication",
     "questions": [
         {
             "question": "Can MIRA handle voice biometrics for customer authentication and verification?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "How accurate and reliable is MIRA's voice recognition technology?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What security measures are in place to prevent unauthorized access to customer accounts or sensitive information?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 },
 {
     "category": "Success Stories and Case Studies",
     "questions": [
         {
             "question": "Can you share any success stories or case studies of organizations that have implemented MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "What measurable benefits or improvements have clients experienced after deploying MIRA?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         },
         {
             "question": "Do you have references or testimonials from satisfied customers who have used MIRA in their call centers?",
             "answer": "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized\
             30-minute onboarding call to get you up and running as soon as possible."
         }
     ]
 }]
 
 
 const ImageSection = () => {
     return (
         <div className='flex items-center 	max-sm:card mb-8'>
             <div className='w-4/5 mx-auto bg-white py-6' >
                 <div className='flex  items-center justify-center  pb-4'>
                     <img src="./src/assets/images/Avatar group.png" alt="Avatar Group" />
                 </div>
                 <p className='font-interSemibold text-xl text-center text-textSemiBoldBlackColor'>Still have questions?</p>
                 <p className='font-interRegular text-lg text-textRegularGreyColor text-center mx-2'>If you can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                 <div className="flex items-center flex-center justify-center mt-3">
 
                     <button className="rounded-2xl bg-textSemiBoldBlueColor h-10 w-28 text-center text-white">Get in touch</button>
                 </div>
             </div>
 
         </div>
 
     )
 }
 
 const ImageFullLastSection = () => {
     return (
         <div className='w-full'>
             <img src="./src/assets/images/footer.png" className='w-full' alt="Last Section" />
         </div>
     );
 }
 const FAQSection: React.FC = () => {
     const [activeIndex, setActiveIndex] = useState<number | null>(0);
 
     const toggleFAQ = (index: number) => {
         setActiveIndex(activeIndex === index ? null : index);
     };
 
     return (
         <div className="max-w-4xl mx-auto px-4 py-12">
             <div className="totalWrapper mt-20 mb-12">
 
                 {faqs.map((category, catIndex) => (
                     <div key={catIndex}>
                         <div className="flex justify-start items-center mt-5">
                             <p className="font-interSemibold text-blue-400 text-2xl tracking-normal pl-4 pb-5">{category.category}</p>
                         </div>
                         {category.questions.map((faq, index) => (
                             <div key={index} className={`bg-white p-5 ${index < category.questions.length - 1 ? 'border-b-2 border-gray-150' : ''}`}>
                                 <button
                                     onClick={() => toggleFAQ(index)}
                                     className="flex justify-between items-start w-full text-left text-gray-800 focus:outline-none">
                                     <span className="font-semibold mr-3">{faq.question}</span>
                                     <img src={activeIndex === index ? "./src/assets/images/minus-circle.png" : "./src/assets/images/plus.png"} alt={activeIndex === index ? "Collapse" : "Expand"} className="h-6 w-6 object-cover" />
                                 </button>
                                 {activeIndex === index && (
                                     <p className="mt-4 text-gray-600">{faq.answer}</p>
                                 )}
                             </div>
                         ))}
                     </div>
                 ))}
             </div>
         </div>
     );
 };
 
 
 const FooterSection = () => {
     return (<div className='w-4/5 mx-auto mt-8'>
 
         <hr />
         <div className='flex items-center sm:justify-between  mt-10  justify-center'>
             <img src={"./src/assets/images/Union.png"} alt="Logo" className='sm:10 max-sm:h-5 ' />
             <p className='font-interRegular max-sm:text-lg'>© 2024 Mira. All rights reserved.</p>
         </div>
 
     </div>)
 }
 
 
 
 const FAQDetailView = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
      }, []);
     return (
         <div className='bg-greyBg' >
             <div className="bg-heroBackground p-20">
 
                 <div className="flex items-center justify-center ">
                     <div className="  rounded-xl  w-20 bg-white mt-2">
                         <p className=" text-textMediumBlueColor font-interMedium text-center text-lg">FAQs</p>
                     </div>
 
 
                 </div>
                 <div className="text-center my-4 text-white ">
                     <h2 className="font-interSemibold text-5xl">Frequently asked questions</h2>
                 </div>
                 <div className="text-center   text-white mt-3 mb-3">
                     <p className="font-interRegular text-xl">Everything you need to know about MIRA</p>
                 </div>
                 <div className="flex items-center justify-center">
 
                     <div className="rounded-xl bg-white h-12 w-80  items-center   flex flex-row mt-10">
                         <img src={"./src/assets/images/search.png"} className="m-3  h-5 text-center w-5" alt="search" />
                         <input className="focus:border-transparent focus:outline-none" type="text" placeholder=" Search" />
                     </div>
 
                 </div>
             </div>
             < FAQSection></FAQSection>
             <ImageSection></ImageSection>
             <ImageFullLastSection></ImageFullLastSection>
             <FooterSection></FooterSection>
         </div>
 
     );
 };
 
 // eslint-disable-next-line react-refresh/only-export-components
 export default FAQDetailView;
 
 