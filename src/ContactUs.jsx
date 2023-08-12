import React, { useEffect, useState } from "react";
// import { Fade } from "react-reveal";

const ContactUs = () => {
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log(formState, "formdata")

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://backend-vtnh.onrender.com/send-email', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  useEffect(() => {
    const formInputs = document.querySelectorAll(".form-input");
    formInputs.forEach((input) => {
      input.addEventListener("focus", () => setIsFormFocused(true));
      input.addEventListener("blur", () => setIsFormFocused(false));
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-cyan-200 to-blue-500 body-font h-max">
      <div className="flex px-5 py-10 mx-auto space-x-10 ">

        <div className="lg:w-1/2 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto w-full mt-10 md:mt-0 relative z-10 shadow-md border-2">
          <h2 className="text-gray-900 text-2xl mb-4 font-semibold text-center">
            Contact Us
          </h2>
          {/* <Fade bottom cascade> */}
          <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              // value={formState.name}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out form-input"
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Mobile No
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              // value={formState.phone}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out form-input"
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formState.email}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out form-input"
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              // value={formState.message}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out form-input"
            ></textarea>
          </div>
          <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            {isFormFocused ? "Form is focused!" : ""}
          </p>
          {/* </Fade> */}
        </div>
        <div className="lg:w-[40%]  md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto w-[60%] mt-10 md:mt-0 relative z-10 shadow-md border-2">
          <div style={{ color: "black" }} className="h-[50%] inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=526%2C%20FIRST%20FLOOR%2C%20PARMANAND%20COLONY%20(WEST)%2C%20DELHI-110009&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>

          <div className="h-[50%] py-[100px] font-bold"><p>526, FIRST FLOOR, PARMANAND COLONY (WEST) DELHI- 110009
          </p></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
