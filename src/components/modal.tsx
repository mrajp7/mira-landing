import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

interface ModalProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validate = (): boolean => {
    const newErrors: FormData = { name: "", email: "", phoneNumber: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    setErrors(newErrors);

    // If there are no errors, return true, else false
    return !newErrors.name && !newErrors.email && !newErrors.phoneNumber;
  };

  const errorText = (content: string) => {
    if (content) return <label className="text-red-500 mt-2">{content}</label>;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  

    if (validate()) {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      })
      // Add your form submission logic here
      closeModal(); // Close the modal after submitting the form
    }else{
      e.preventDefault();
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-middle bg-white rounded-lg shadow-xl   transform transition-all h-80" style={{width : "30rem"}}>
            <button
    onClick={closeModal}
    className="absolute top-4 right-8 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
              <form onSubmit={handleSubmit}>
                <div className="bg-greyBg pt-6 pb-6 rounded-xl">
                  <div className=" mx-auto w-5/6">
                    <div className="mt-3 sm:mt-0 text-left ">
                      <div className="topSection flex flex-col justify-between">
                        <div className="leftSide">
                        <h3
                        className="text-lg mb-1 font-interSemibold text-gray-900"
                        id="modal-title"
                      >
                        Join the waitlist
                      </h3>
                      <p className="font-interRegular text-textRegularGreyColor text-sm">Don't Miss Out on Early Access to MIRA!</p>
                        </div>
                      </div>
                      <div className="mt-4 text-left">
                        <label
                          htmlFor="name"
                          className="block text-sm font-interMedium text-gray-700"
                        >
                          Name <span className="text-red-500 ">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder=" Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm  h-10 rounded-md ${ errors['name']!="" ? "border-red-500": "border-gray-300"} border border-solid `} 
                        />
                        {errorText(errors.name)}
                      </div>
                      <div className="mt-4 text-left">
                        <label
                          htmlFor="email"
                          className="block text-sm font-interMedium text-gray-700"
                        >
                          Email <span className="text-red-500 ">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder=" Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm ${ errors.email!=""? "border-red-500":"border-gray-300"} border border-solid h-10 rounded-md`}
                        />
                        {errorText(errors.email)}
                      </div>
                      <div className="mt-4 text-left">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-interMedium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder=" Enter your phone number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm h-10 ${ errors.phoneNumber!=""? "border-red-500":"border-gray-300"}  border border-solid rounded-md`}
                        />
                        {errorText(errors.phoneNumber)}
                      </div>

                      <div className="my-5 flex justify-center">
                        <button
                          type="submit"
                          className=" w-11/12 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Claim Your Spot
                        </button>
                        {/* <button
                          onClick={closeModal}
                          type="button"
                          className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Close
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
