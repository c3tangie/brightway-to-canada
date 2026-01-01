// JSX For Using Web3Forms Inside React
// WIP DO NOT USE
import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

function WF_App() {
  // const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [validationMessage, setValidationMessage] = useState("Please select a category.");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set initial validation message on the hidden input
    const hiddenInput = document.getElementById('category-validation');
    if (hiddenInput) {
      hiddenInput.setCustomValidity("Please select a category.");
    }
  }, []);
  
  const categoryOptions = [
    { value: "general", label: "General" },
    { value: "appointments", label: "Appointments" },
    { value: "services", label: "Services" },
    { value: "career", label: "Career" },
    { value: "feedback", label: "Feedback" }
  ];

  const handleCategorySelect = (value, label) => {
    setSelectedCategory({ value, label });
    setIsDropdownOpen(false);
    setValidationMessage("");
    // Clear validation on hidden input
    const hiddenInput = document.getElementById('category-validation');
    if (hiddenInput) {
      hiddenInput.setCustomValidity("");
    }
  };

  const handleCategoryChange = (event) => {
    if (event.target.value === "") {
      event.target.setCustomValidity("Please select a category.");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownBlur = (e) => {
    // Only close dropdown if clicking outside the dropdown container
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Check if form is valid (this will trigger native validation messages)
    if (!event.target.checkValidity()) {
      event.target.reportValidity();
      return;
    }
    
    const formData = new FormData(event.target);
    
    // Add the selected category to form data
    formData.append("qtype", selectedCategory.value);
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
      // Reset the custom dropdown
      setSelectedCategory("");
      setIsDropdownOpen(false);
      setValidationMessage("Please select a category.");
      // Reset validation on hidden input
      const hiddenInput = document.getElementById('category-validation');
      if (hiddenInput) {
        hiddenInput.setCustomValidity("Please select a category.");
      }
    }
  };

  return (
    <div class="flex items-center min-h-screen bg-gray-300">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto my-10 bg-white p-2 sm:p-5 rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700">
              Contact Us
            </h1>
            <p class="text-gray-600">
              Please do not put in additional sensitive information
            </p>
          </div>
          <div class="m-3 sm:m-7">
            <form className='mt-5 max-w-screen-2xl mx-auto px-2 sm:px-6 xl:px-20 2xl:px-20 font-RobotoFlex text-center text-xl leading-normal' onSubmit={onSubmit}>
                <div class="flex mb-6 space-x-4 text-base">
                  <div class="w-full md:w-1/2">
                    <label for="WF_fname" class="block mb-2 text-sm text-gray-600">First Name</label>
                    <input type="text" name="name" id="WF_fname" placeholder="John" required class="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                      Please provide your first name.
                    </div> */}
                  </div>
                  <div class="w-full md:w-1/2">
                    <label for="WF_lname" class="block mb-2 text-sm text-gray-600">Last Name</label>
                    <input type="text" name="last_name" id="WF_lname" placeholder="Smith" required class="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                      Please provide your last name.
                    </div> */}
                  </div>
                </div>

                <div class="flex mb-6 space-x-4 text-base">
                  <div class="w-full md:w-1/2">
                    <label for="WF_email" class="block mb-2 text-sm text-gray-600">Email Address</label>
                    <input type="email" name="email" id="WF_email" placeholder="you@company.com" required class="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    {/* <div class="empty-feedback text-red-400 text-sm mt-1">
                      Please provide your email address.
                    </div>
                    <div class="invalid-feedback text-red-400 text-sm mt-1">
                      Please provide a valid email address.
                    </div> */}
                  </div>

                  <div class="w-full md:w-1/2">
                    <label for="WF_phone" class="block text-sm mb-2 text-gray-600">Phone Number</label>
                    <input type="text" name="phone" id="WF_phone" placeholder="+1 (123) 456-789" required class="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />

                    {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                      Please provide your phone number.
                    </div> */}
                  </div>
                </div>

                
                <div class="mb-6 text-base">
                  <label for="WF_type" class="block mb-2 text-gray-600">Category</label>
                  <div class="relative" onBlur={handleDropdownBlur} tabIndex={-1}>
                    {/* Hidden input for HTML5 validation */}
                    <input
                      type="text"
                      id="category-validation"
                      name="category-required"
                      value={selectedCategory ? selectedCategory.value : ""}
                      onChange={() => {}} // Controlled by dropdown
                      required
                      style={{position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', opacity: 0, pointerEvents: 'none', zIndex: -1}}
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                    
                    <button
                      type="button"
                      id="WF_type"
                      onClick={toggleDropdown}
                      class={`w-full px-3 py-2 text-left text-sm sm:text-base border-2 border-gray-200 bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${selectedCategory ? 'text-gray-900' : 'text-gray-400'}`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="listbox"
                      aria-labelledby="category-label"
                    >
                      <span class="block truncate">
                        {selectedCategory ? selectedCategory.label : "[Select Category]"}
                      </span>
                      <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg class={`w-5 h-5 text-gray-400 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                    
                    {isDropdownOpen && (
                      <div class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                        <ul class="py-0.5" role="listbox">
                          {categoryOptions.map((option) => (
                            <li
                              key={option.value}
                              onClick={() => handleCategorySelect(option.value, option.label)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleCategorySelect(option.value, option.label);
                                }
                              }}
                              class="px-3 py-1 text-gray-900 cursor-pointer select-none hover:bg-indigo-50 hover:text-indigo-900 focus:bg-indigo-50 focus:text-indigo-900 focus:outline-none text-left"
                              role="option"
                              tabIndex={0}
                            >
                              {option.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div class="mb-6 text-base">
                  <label for="WF_message" class="block mb-2 text-gray-600">Your Message</label>

                  <textarea rows="5" name="message" id="WF_message" placeholder="Your Message" class="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                  {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                    Please enter your message.
                  </div> */}
                </div>

                <div class="mb-6">
                  <button type="reset" onClick={handleResetClick} class="w-full px-3 py-4 text-white  bg-gray-500 hover:bg-gray-600 rounded-md focus:outline-none transition-colors duration-100">
                    Reset
                  </button>
                </div>

                <div class="mb-6">
                  <button type="submit" onClick={handleSubmitClick} class="w-full px-3 py-4 text-white  bg-navy-600 hover:bg-navy-700 rounded-md focus:outline-none transition-colors duration-100">
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