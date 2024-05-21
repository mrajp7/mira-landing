import './aiSection.css'; // Ensure to include this if you have custom styles
import animatedPhone from '../assets/images/phone.gif'

const AIReception = () => {
    return (
      <>
              <div className="totalWrapperAI flex justify-center items-center py-20 bg-white">
        <div style={{height : "26rem"}} className="relative flex flex-col md:flex-row items-center w-5/6 bg-phoneBgContainer rounded-xl p-10 shadow-lg">
          <div className="text-left text-white md:w-1/2 lg:w-3/5 flex flex-col justify-center">
            <blockquote className="text-4xl md:text-4xl lg:text-6xl text-textSemiBoldWhiteColor font-interSemibold leading-tight mb-4">
              “Great, I've scheduled an appointment for 4pm this Thursday”
            </blockquote>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-interRegular text-textRegularWhiteColor">Your AI receptionist</p>
          </div>
          <div className="relative md:w-1/2 lg:w-2/5 flex justify-center items-center mt-10 md:mt-0">
            <div className="absolute right-0 transform translate-x-1/2 md:translate-x-0 md:right-10 top-1/2 md:top-auto md:bottom-0 md:translate-y-1/2">
              <img src={animatedPhone} style={{transform : "translateX(35%)"}} alt="Phone" className="w-5/6 md:w-2/3 lg:w-4/5 h-auto" />
            </div>
          </div>
        </div>
      </div>
      </>
        // <div className="totalWrapperAI mt-40 flex justify-center">
        // <div className="bg-phoneBgContainer h-4/5 w-4/5 rounded-3xl">
        //     <div className="flex flex-row">
        //     <div className="container w-2/3 p-11 mt-16">
        //     <img src="./src/assets/images/quotation.png" alt="bgContainer" />
        //     <p style={{width : "35rem"}} className="text-textSemiBoldWhiteColor font-interSemibold text-5xl leading-tight mb-4">Great, I've scheduled an appointment for 4pm this Thursday</p>
        //     <span className="font-interRegular text-textRegularWhiteColor">Your AI receptionist</span>
        //     </div>
        //     <div className="w-1/3">
        //     <img className="-mt-10 w-72" src="./src/assets/images/phone.png" alt="phone" />
        //     </div>
        //     </div>
        // </div>
        // </div>

    )
};

export default AIReception;