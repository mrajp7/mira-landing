import{ useEffect, useState} from 'react';
import Vapi from "@vapi-ai/web";
import Modal from './modal';
import miraLogo from '../assets/images/Union.png';
import aiAvatar from '../assets/images/main.png';
import aiAvatarInAction from '../assets/images/ai-avatar-action.gif';



const vapiPublicKey = process.env.REACT_APP_VAPI_KEY;
if (!vapiPublicKey) {
    throw new Error("REACT_APP_VAPI_KEY is not defined");
}
const assistantID = process.env.REACT_APP_ASSISTANT_ID;
if (!assistantID) {
    throw new Error("REACT_APP_ASSISTANT_ID is not defined");
}
const vapi = new Vapi(vapiPublicKey);

 const MainSection = () => {

    const [isOpen, setIsOpen] = useState(false);
     const [connecting, setConnecting] = useState(false);
     const [connected, setConnected] = useState(false);
     const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);

     useEffect(() => {
         vapi.on("call-start", () => {
             setConnecting(false);
             setConnected(true);
             // setShowPublicKeyInvalidMessage(false);
         });

         vapi.on("call-end", () => {
             setConnecting(false);
             setConnected(false);
             // setShowPublicKeyInvalidMessage(false);
         });

         vapi.on("speech-start", () => {
             setAssistantIsSpeaking(true);
         });

         vapi.on("speech-end", () => {
             setAssistantIsSpeaking(false);
         });

         vapi.on("error", (error) => {
             console.error(error);

             setConnecting(false);

         });

         // we only want this to fire on mount
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    }

     const startCallInline = () => {
         setConnecting(true);
         vapi.start(assistantID);
     };
     const endCall = () => {
         vapi.stop();
     };

    return (
      <>
      <div className="flex flex-row px-32 max-sm:flex-col">
      <header className="mb-8 mt-8 w-1/2 max-sm:mb-0 max-sm:ml-20">
          <img src={miraLogo} alt="Mira Logo" className="mb-4"/>
      </header>
      <div className="mb-8 mt-8 w-1/2 text-end max-sm:w-3/4">
      <button onClick={openModal} className="bg-textSemiBoldBlueColor text-white font-interSemibold border-borderStrokeJoin py-2 px-4 rounded-full w-40">
        Join the waitlist
      </button> 
        <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
      </div>
      </div>

        <div className="relative flex justify-center">
          <div className="bg-heroBackground rounded-3xl w-5/6 text-center justify-center relative z-10 pb-40">
            <div className="flex flex-col items-center">
                {!connected &&
              <img src={aiAvatar} alt="AI Avatar" className="w-70 h-60 mb-4 mt-28" onClick={startCallInline}/>}
                {assistantIsSpeaking &&
                    <img src={aiAvatarInAction} alt="Centered Image" className="w-70 h-60 mb-4 mt-28"
                         onClick={endCall}/>}
                {connected && !assistantIsSpeaking &&
                    <img src={aiAvatar} alt="AI Avatar" className="w-70 h-60 mb-4 mt-28" onClick={endCall}/>}
                {!connected && !connecting &&
                <p
                    className="bg-blue-400 bg-opacity-1 hover:ease-in text-white font-semibold py-2 px-6 rounded-full mb-6">
                Give it a try...
              </p>}
                {connecting &&
                    <p className="bg-blue-400 bg-opacity-1 hover:ease-in text-white font-semibold py-2 px-6 rounded-full mb-6">
                        One Sec...
                    </p> }
                {connected  && assistantIsSpeaking &&
                    <p className="bg-blue-400 bg-opacity-1 hover:ease-in text-white font-semibold py-2 px-6 rounded-full mb-6">
                        You can talk back to me...
                    </p> }
                {connected  && !assistantIsSpeaking &&
                    <p className="bg-blue-400 bg-opacity-1 hover:ease-in text-white font-semibold py-2 px-6 rounded-full mb-6">
                        I'm Listening...
                    </p> }
              <h1 className="text-7xl font-semibold text-white mb-4 leading-tight max-sm:text-3xl">
                Voice AI Agent Transforming <br/> Customer Service and Sales
              </h1>
              <p className="text-xl tracking-wide text-white max-w-2xl mx-auto">
                Mira is revolutionizing customer experience by harnessing the power of AI for seamless voice and chat interactions.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default MainSection;
  
  
  