import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How can MIRA benefit my call center?",
    answer: "MIRA can significantly benefit your call center by automating routine inquiries, reducing response times, and improving overall efficiency. With its advanced natural language processing (NLP) capabilities and seamless integration with multiple systems, MIRA can handle a large volume of inquiries across multiple channels, freeing up human agents to focus on more complex issues. This results in improved customer satisfaction, reduced wait times, and optimized resource utilization."
  },
  {
    question: "What features and capabilities does MIRA offer?",
    answer: "Details about features and capabilities."
  },
  {
    question: "How accurate is MIRA's AI software in understanding and responding to customer inquiries?",
    answer: "Details about AI accuracy."
  },
  {
    question: "What languages does MIRA support for interactions with customers?",
    answer: "Details about language support."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="totalWrapper bg-greyBg">
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="totalWrapper mt-10 mb-12">
        <div className="flex justify-center items-center">
          <h3 className="text-textMeidumBlueColor bg-chipBg rounded-full text-center px-2 border-2 border-borderStroke text-base">FAQs</h3>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="font-interSemibold text-textSemiBoldBlackColor text-4xl tracking-normal">Frequently asked questions</p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="font-interRegular text-textRegularGreyColor text-xl tracking-normal">Everything you need to know about MIRA</p>
        </div>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className={`bg-greyBg p-4 mb-4 ${index < faqs.length - 1 ? 'border-b-2 border-gray-150' : ''}`}>
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-start w-full text-left text-gray-800 focus:outline-none">
            <span className="font-interMedium">{faq.question}</span>
            <img src={activeIndex === index ? "./src/assets/images/minus-circle.png" : "./src/assets/images/plus.png"} alt={activeIndex === index ? "Collapse" : "Expand"} className="h-6 w-6" />
          </button>
          {activeIndex === index && (
            <p className="mt-4 text-gray-600 font-interRegular">{faq.answer}</p>
          )}
        </div>
      ))}
       <div className="flex justify-center items-center">
       <Link to="/allFaq">
       <h3 className="text-textMeidumBlueColor bg-chipBg rounded-full text-center px-2 py-2 border-2 border-borderStroke text-sm">See all FAQs</h3>
        </Link>
         
        </div>
    </div>
    </div>
  );
};

export default FAQSection;