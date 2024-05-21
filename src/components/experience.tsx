import playButton from '../assets/images/buttonIcon.png'
import pauseButton from '../assets/images/pause-icon.png'
import {useEffect, useState} from "react";
import Vapi from "@vapi-ai/web";

interface CardProps {
    index: number;
    title: string;
    description: string;
    image?: string; // Optional image prop
    isPressed: boolean;
    onButtonClick: () => void;
}

const vapiPublicKey = process.env.REACT_APP_VAPI_KEY;
if (!vapiPublicKey) {
    throw new Error("REACT_APP_VAPI_KEY is not defined");
}
const hotelAssistantID = process.env.HOTEL_ASSISTANT_ID;
if (!hotelAssistantID) {
    throw new Error("HOTEL_ASSISTANT_ID is not defined");
}
const restaurantAssistantID = process.env.RESTAURANT_ASSISTANT_ID;
if (!restaurantAssistantID) {
    throw new Error("HOTEL_ASSISTANT_ID is not defined");
}
const hospitalAssistantID = process.env.HOSPITAL_ASSISTANT_ID;
if (!hospitalAssistantID) {
    throw new Error("HOTEL_ASSISTANT_ID is not defined");
}
const vapi = new Vapi(vapiPublicKey);

const ExperienceSection = () => {
    const [pressedStates, setPressedStates] = useState([false, false, false]);
    useEffect(() => {
        vapi.on("call-start", () => {
           //Todo
        });

        vapi.on("call-end", () => {
           //Todo
        });

        vapi.on("speech-start", () => {
           //Todo
        });

        vapi.on("speech-end", () => {
           //Todo
        });

        vapi.on("error", (error) => {
            console.error(error);
        });

        // we only want this to fire on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const startHotelCall = () => {
        vapi.start(hotelAssistantID);
    };
    const startRestaurantCall = () => {
        vapi.start(restaurantAssistantID);
    };
    const startHospitalCall = () => {
        vapi.start(hospitalAssistantID);
    };
    const endCall = () => {
        vapi.stop();
    };


    const handleButtonClick = (index: number) => {
        const newPressedStates = pressedStates.map((state, i) => i === index ? !state : false);
        setPressedStates(newPressedStates);

        switch (index) {
            case 0:
                if (newPressedStates[0]) {
                    endCall()
                    startHotelCall()
                    // Add your specific action for the first card being pressed
                } else {
                    endCall()
                    // Add your specific action for the first card being unpressed
                }
                break;
            case 1:
                if (newPressedStates[1]) {
                    endCall()
                    startRestaurantCall()
                } else {
                   endCall()
                    // Add your specific action for the second card being unpressed
                }
                break;
            case 2:
                if (newPressedStates[2]) {
                    endCall()
                    startHospitalCall()
                    // Add your specific action for the third card being pressed
                } else {
                    endCall()
                    // Add your specific action for the third card being unpressed
                }
                break;
            default:
                break;
        }
    };

    function Card({ title, description, image, index, isPressed, onButtonClick }: CardProps) {
        return (
            <div className="card rounded-lg shadow-md bg-greyBg w-5/6 mx-auto" style={{ height: '28rem' }}>
                <div className="card-header flex items-center flex-col mt-8">
                    {image && <img src={image} alt={title} className="w-16 h-16 mb-8" />}
                    <h2 className="text-xl font-interSemibold">{title}</h2>
                </div>
                <div className="card-body flex items-center flex-col text-center p-4">
                    <p className="font-interRegular text-textRegularGreyColor text-base" style={{ width: '19rem' }}>{description}</p>
                    <div className="buttonDiv">
                        {!isPressed ? (
                            <button
                                onClick={onButtonClick}
                                className={`${index === 2 ? 'mt-20' : 'mt-16'} flex flex-row justify-around rounded-lg px-8 py-2 bg-tryNow text-textSemiBoldWhiteColor font-interSemibold`}
                            >
                                Try Now &nbsp;
                                <img src={playButton} className="w-4 h-4 mt-1" alt="iconPng" />
                            </button>
                        ) : (
                            <button
                                onClick={onButtonClick}
                                className={`${index === 2 ? 'mt-20' : 'mt-16'} flex flex-row justify-around rounded-lg px-8 py-2 bg-white text-blue-500 border border-blue-500 font-interSemibold`}
                            >
                                Stop &nbsp;
                                <img src={pauseButton} className="w-4 h-4 mt-1" alt="iconPng" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    const cards = [
        {
            index: 0,
            title: 'Hotel Concierge',
            description: 'Discover how MIRA can enhance guest experiences by providing personalized concierge services. From booking reservations to offering information about hotel services, see how MIRA can handle it all with ease.',
            image: '/src/assets/images/hotel2.png',
        },
        {
            index: 1,
            title: 'Restaurant Staff',
            description: "Experience MIRA as a restaurant staff assistant. Whether it's taking orders, answering menu questions, or making reservations, MIRA ensures a seamless dining experience for your customers.",
            image: '/src/assets/images/Restaurent.png',
        },
        {
            index: 2,
            title: 'Hospital Receptionist',
            description: 'See how MIRA can improve patient interactions as a hospital receptionist. From scheduling appointments to providing information about services, MIRA offers reliable and empathetic support in healthcare settings.',
            image: '/src/assets/images/hospital.png',
        },
    ];

    return (
        <div className="totalWrapper">
            <div className="bodyWrapper">
                <div className="sec1 mt-20">
                    <h3 className="font-interSemibold text-center text-3xl">Experience MIRA in Action</h3>
                    <div className="flex justify-center items-center flex-col">
                        <p className="font-interRegular mt-6 w-1/2 text-textRegularGreyColor text-xl text-center max-sm:w-2/3">
                            Explore the capabilities of MIRA through interactive demos. Choose from three scenarios to see how MIRA can revolutionize customer interactions in various industries.
                        </p>
                    </div>
                </div>
                <div className="belowCard">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-sm:gap-10">
                            {cards.map((card, index) => (
                                <Card
                                    key={card.title}
                                    {...card}
                                    isPressed={pressedStates[index]}
                                    onButtonClick={() => handleButtonClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;