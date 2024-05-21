
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="flex flex-col p-4 text-left max-sm:text-center">
    <h2 className="text-xl font-interSemibold mb-2">{title}</h2>
    <p className="text-base font-interRegular text-textRegularGreyColor">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: 'Efficient',
      description: 'MIRA streamlines customer interactions with its advanced natural language processing (NLP) algorithms, ensuring timely and accurate responses across various communication channels.',
    },
    {
      title: 'Adaptable',
      description: 'With multi-channel support and language accessibility, MIRA caters to diverse customer bases, providing personalized interactions in English and Arabic dialects, fostering cultural understanding and trust.',
    },
    {
        title: 'Insightful',
        description: 'Gain actionable insights and track key metrics with MIRA\'s advanced reporting and analytics dashboard, empowering informed decision-making and continuous improvement in customer service performance.',
      },
    {
      title: 'Innovative',
      description: 'Stay ahead of the competition with MIRA\'s cutting-edge features, including voice brand customization, sentiment analysis, and dynamic response template suggestions, delivering unparalleled customer experiences.',
    }
  ];

  return (
    <div className="bg-white mt-40 flex justify-center items-center max-sm:mt-28">
      <div className="container mx-auto px-40 flex flex-col md:flex-row max-sm:px-10 text-left">
        <div className=" mt-3 md:w-1/3 md:pr-10 mb-6 md:mb-0">
          <h1 className="text-4xl font-interSemibold text-textSemiBoldBlackColor mb-6 md:mb-10 max-sm:w-96 max-sm:text-center max-sm:ml-16 max-sm:-mt-10 " style={{width : "24rem"}}>All the features you need in one simple package</h1>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Features;