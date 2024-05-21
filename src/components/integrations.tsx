import React from "react";

const ImageContainer: React.FC<{ item: string }> = (item) => {
    // console.log(item)
    return (
        <div className="mx-3 h-30 w-30">
            <img src={`./src/assets/images/${item.item}`} alt="images" />
        </div>
    )

}
const Integrations = () => {
    const firstRowImages: string[] = ['Icon wrap.png', 'Icon wrap-2.png', 'Icon wrap-3.png', 'Icon wrap-4.png', 'Icon wrap-5.png', 'Icon wrap-6.png', 'Icon wrap-7.png', 'Icon wrap-8.png'];
    const secondRowImages: string[] = [ 'Icon wrap-9.png', 'Icon wrap-10.png', 'Icon wrap-11.png', 'Icon wrap-12.png', 'Icon wrap-13.png', 'Icon wrap-14.png'];

    return (
        <>
            <div className="bg-whiteBg py-24">
                <div className="flex items-center justify-center flex-col">
                    <div >
                        <div className="flex justify-center items-center flex-col">
                            <p className=" font-medium text-textMeidumBlueColor bg-chipBg rounded-full mb-3 text-center px-3 py-1 border-2 border-borderStroke text-sm">Integrations</p>
                            <div className=" max-sm:w-full px-4 text-center ">
                                <h3 style={{width : "39rem"}} className="font-interSemibold text-textMediumBlackColor text-4xl mx-4 text-center max-sm:p-10 ">Connect seamlessly with MIRA Your all-in-one solution for integrating with your favorite tools</h3>
                                <p style={{width : "40rem"}} className="font-interRegular text-lg text-textRegularGreyColor max-sm:-mt-10 p-10">From Knowledge Base systems to CRM, Call Center Software, Telephony Systems, IVR, and Ticketing Systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col items-center justify-center p-4 sm:flex-row max-sm:grid grid-cols-2 ">
                            {firstRowImages.map((i) => (
                                <ImageContainer item={i} ></ImageContainer>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-col items-center justify-center   sm:flex-row   max-sm:grid grid-cols-2">
                            {secondRowImages.map((i) => (
                                <ImageContainer item={i} ></ImageContainer>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Integrations;