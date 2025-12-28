// JSX For Using Web3Forms Inside React
// WIP DO NOT USE
import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import seaBackground from "./sea-7498910_1920.jpg";

function WF_App() {
  // const navigate = useNavigate();
  
  useEffect(() => {
    // Set initial custom validation message
    const selectElement = document.getElementById('WF_type');
    if (selectElement) {
      selectElement.setCustomValidity("Please select a category.");
    }
  }, []);
  
  const handleCategoryChange = (event) => {
    if (event.target.value === "") {
      event.target.setCustomValidity("Please select a category.");
    } else {
      event.target.setCustomValidity("");
    }
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Check if category is selected
    const category = event.target.qtype.value;
    if (category === "") {
      alert("Please select a category.");
      return;
    }
    
    const formData = new FormData(event.target);

    formData.append("access_key", "b0223251-5a13-4fd9-bdcc-d0d43dd63153");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // navigate('/thankyou');
      window.location.href = '#/thankyou';
    } else {
      window.alert("Something went wrong!");
    }
  };

  const handleSubmitClick = (e) => {
    if (!window.confirm('Submit The Form?')) {
      e.preventDefault();
    }
  };

  const handleResetClick = (e) => {
    if (!window.confirm('Reset The Form?')) {
      e.preventDefault();
    } else {
      // After reset, set category back to placeholder and restore validation message
      setTimeout(() => {
        const selectElement = document.getElementById('WF_type');
        if (selectElement) {
          selectElement.value = "";
          selectElement.setCustomValidity("Please select a category.");
        }
      }, 0);
    }
  };

  return (
    <div className="container mx-auto min-h-screen bg-slate-700"> {/* Remove min-h-screen and bg-gray-300 */}

      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl mx-auto my-10 bg-white/95 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700">
              Contact Us
            </h1>
            <p class="text-gray-400">
              Please do not put in additional sensitive information
            </p>
          </div>
          <div class="m-7">
            <form className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex text-center text-xl leading-normal' onSubmit={onSubmit}>
                <div class="flex mb-6 space-x-4 text-base">
                  <div class="w-full md:w-1/2">
                    <label for="WF_fname" class="block mb-2 text-sm text-gray-600">First Name</label>
                    <input type="text" name="name" id="WF_fname" placeholder="" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                      Please provide your first name.
                    </div> */}
                  </div>
                  <div class="w-full md:w-1/2">
                    <label for="WF_lname" class="block mb-2 text-sm text-gray-600">Last Name</label>
                    <input type="text" name="last_name" id="WF_lname" placeholder="" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                      Please provide your last name.
                    </div> */}
                  </div>
                </div>

                <div class="flex mb-6 space-x-4 text-base">
                  <div class="w-full md:w-1/2">
                    <label for="WF_email" class="block mb-2 text-sm text-gray-600">Email Address</label>
                    <input type="email" name="email" id="WF_email" placeholder="you@company.com" required class="w-full px-3 py-2 text- placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    {/* <div class="empty-feedback text-red-400 text-sm mt-1">
                      Please provide your email address.
                    </div>
                    <div class="invalid-feedback text-red-400 text-sm mt-1">
                      Please provide a valid email address.
                    </div> */}
                  </div>

                  <div class="w-full md:w-1/2">
                    <label for="WF_phone" class="block text-sm mb-2 text-gray-600">Phone Number</label>
                    <input type="text" name="phone" id="WF_phone" placeholder="+1 (123) 456-789" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />

                    {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                      Please provide your phone number.
                    </div> */}
                  </div>
                </div>

                <div class="mb-6 text-base">
                  <label for="WF_type" class="block mb-2 text-gray-600">Category</label>
                  <select name="qtype" id="WF_type" required onChange={handleCategoryChange} class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
                    <option value="" disabled selected style={{backgroundColor: 'transparent', color: '#9CA3AF'}} class="cursor-default">[Select Category]</option>
                    <option value="general" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">General</option>
                    <option value="appointments" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">Appointments</option>
                    <option value="services" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">Services</option>
                    <option value="career" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">Career</option>
                    <option value="feedback" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">Feedback</option>
                  </select>
                </div>

                <div class="mb-6 text-base">
                  <label for="WF_message" class="block mb-2 text-gray-600">Your Message</label>

                  <textarea rows="5" name="message" id="WF_message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                  {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                    Please enter your message.
                  </div> */}
                </div>

                <div class="mb-6">
                  <button type="reset" onClick={handleResetClick} class="w-full px-3 py-4 text-white bg-sky-900 rounded-md active:bg-sky-600 focus:outline-none transition-colors duration-100">
                    Reset
                  </button>
                </div>

                <div class="mb-6">
                  <button type="submit" onClick={handleSubmitClick} class="w-full px-3 py-4 text-white bg-sky-900 rounded-md active:bg-sky-600 focus:outline-none transition-colors duration-100">
                    Send Message
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WF_App;
