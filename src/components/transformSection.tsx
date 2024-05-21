import React from "react";

const ButtonCard: React.FC<{ item: string }> = ({ item }) => {
  return (
    <div className="px-2 py-2 mx-3 border-solid border-2 border-chipBorder-300 rounded-xl max-sm:mb-6">
      <div style={{ display: "inline-block", verticalAlign: "top" }}>
        <img src="./src/assets/images/Check Circle.png" alt="checkbox" />
      </div>
      <div className="font-interRegular text-lg" style={{ display: "inline-block", }}>
        {item}
      </div>

    </div>
  );
};



const TransformSection = () => {

  const firstRowContent: string[] = ["Seamless Integration", "Customizable Responses", "Real-time Insights"]
  const secondRowContent: string[] = ["Multi-channel Support", "Advanced Security", "Continuous Learning", "Seamless Handoff"]
  return (
    <>
        <div className="flex justify-center mb-10">
        <img src="./src/assets/images/MacBook Pro 16.png" alt="Product Screenshot" className="max-w-6xl w-6/7 object-contain -mt-40 z-10 max-sm:w-96" />
        </div>
      <div className="bg-greyBg py-24">
        <div className="flex flex-col items-center justify-center   mb-5 ">
          <h3 className="font-interSemibold text-textMediumBlackColor text-4xl mb-5 text-center max-sm:px-4 w-38" >Transform inquiries into opportunities with MIRA</h3>
          <p className="font-interRegular text-textRegularGreyColor text-xl  text-center sm:mb-5  max-sm:px-2 w-38">Elevating sales, delighting customers, and boosting margins effortlessly.</p>
          {/* First row with 3 elements */}

          <div className="flex flex-col items-center justify-center p-4 sm:flex-row  sm:mb-5  ">
            {firstRowContent.map((item) => (
              <ButtonCard item={item}></ButtonCard>
            ))}
          </div>

          {/* Second row with 4 elements */}
          <div className="flex flex-col items-center justify-center p-4  sm:flex-row sm:mb-5">
            {secondRowContent.map((item) => (
              <ButtonCard item={item}></ButtonCard>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col max-sm: w-5/5">
        <img src="./src/assets/images/Container-2.png" alt="checkbox" />
        </div>
      </div>


    </>
  );
};

export default TransformSection;