import React from 'react';
// import Modal from './modal'
import Slider from 'react-slick';
import './carousel.css'; // Ensure your CSS file is being imported correctly

interface CarouselCardProps {
    title: string;
    description: string;
    color: { backgroundImage: string }; // Ensures that color accepts an object with a backgroundImage string
    icon: string; // Path to the icon image
}

const CarouselCard: React.FC<CarouselCardProps> = ({ title, description, color, icon }) => (
    <div className={`rounded-3xl shadow-xl p-4 flex flex-col items-center text-center cardsection`} style={{...color, width: '360px', maxWidth: '400px'}}>
        {/* Main card container with dynamic gradient */}
        <div className="flex pl-5 w-full justify-start">
            {/* Centering the icon */}
            <div className="pt-6">
                {/* Icon container with white background */}
                <img src={icon} alt="Icon" className="h-12 w-12 object-contain" /> 
            </div>
        </div>
        <div className="font-interSemibold text-white bg-white bg-opacity-20 rounded-lg p-4 w-full text-left inside-card">
            {/* Nested content card with semi-transparent white background */}
            <h2 className="text-xl text-textSemiBoldWhiteColor font-interSemibold mb-2">{title}</h2>
            <p className="text-textMediumWhiteColor font-interMedium text-lg max-sm:text-base">{description}</p>
        </div>
    </div>
);

interface ArrowProps {
    type: 'next' | 'prev';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;  // Ensure this matches the type for HTML button onClick event
}

const SampleArrow: React.FC<ArrowProps> = ({ type, onClick }) => (
    <button
        className={`slick-arrow slick-${type}`}
        onClick={onClick}
        aria-label={type}
    >
        {type === 'next' ? <img src="./src/assets/images/arrowright.png" alt="right" /> : <img src="./src/assets/images/arrowleft.png" alt="right" />}
    </button>
);

const CarouselSection: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:3.5,
        slidesToScroll: 1,
        nextArrow: <SampleArrow type="next" />,
        prevArrow: <SampleArrow type="prev" />,
        responsive: [
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 1.1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.1,
                }
            }
        ]
    };

    // const [isOpen, setIsOpen] = useState(false);

    // const openModal = () => {
    //   setIsOpen(true);
    // };
  
    // const closeModal = () => {
    //   setIsOpen(false);
    // }
    const cards = [
        { title: "Real Estate", description: "We handle questions and booking requests and can even call potential clients for you. And we keep you updated without bothering you during meetings", color: { backgroundImage: "linear-gradient(to bottom, #7f56d9, #8960e2, #936bec, #9d75f5, #a780ff)" }, icon: "./src/assets/images/home-03.png" },
        { title: "Call Centers", description: "We offer support with various inquiries such as account inquiries, billing assistance, and product troubleshooting for customers.", color: { backgroundImage: "linear-gradient(to bottom, #079455, #209f63, #30aa70, #3eb57e, #4cc08c)" }, icon: "./src/assets/images/headphones-01.png" },
        { title: "Healthcare", description: "We help patients schedule appointments, access medical information, and receive medication reminders.", color: { backgroundImage: "linear-gradient(to bottom, #1570ef, #3481f4, #4c91f9, #63a1fc, #79b1ff)" }, icon: "./src/assets/images/medical-circle.png" },
        { title: "Hospitality", description: "We provide assistance with hotel bookings, reservation changes, and local recommendations for travelers.", color: { backgroundImage: "linear-gradient(to bottom, #dd2590, #e6409e, #ee55ac, #f768ba, #ff7ac8)" }, icon: "./src/assets/images/calendar-heart-02.png" }
    ];

    return (
    <div className="container mx-auto pl-20 py-20">
  <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
    <div className="w-5/6 mb-16"> {/* Adjust max-width as needed */}
      <h1 className="text-4xl lg:text-4xl font-interSemibold text-textSemiBoldBlackColor pb-4 max-sm:text-2xl">Tailored to Fit, Powered to Excel</h1>
      <p className="text-textRegularGreyColor font-interRegular text-xl w-4/6 max-sm:text-lg max-sm:text-center max-sm:w-5/6">
        Discover How Mira Crafts AI Solutions Unique to Your Business. Let Mira Automate Your Workflow, Keeping You Laser-Focused on Your Core Strengths.
      </p>
    </div>
    {/* <div className="flex justify-center w-1/6 lg:justify-end lg:flex-1 -mt-20 mr-32 max-sm:-mt-10 max-md:-mt-10 max-sm:w-full">
      <button onClick={openModal} className="bg-textSemiBoldBlueColor text-white font-interSemibold border-borderStrokeJoin py-2 px-4 rounded-full w-40 max-sm:ml-16">
        Join the waitlist
      </button> 
    </div>
    <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} /> */}
         
  </div>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <CarouselCard key={index} {...card} />
                ))}
            </Slider>
        </div>
    );
};

export default CarouselSection;
