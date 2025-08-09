// JSX For Using Web3Forms Inside React
// WIP DO NOT USE
import React from "react";

function WF_App() {
  const onSubmit = async (event) => {
    event.preventDefault();
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
      window.location.href = "http://www.w3schools.com";
    } else {
      window.alert("Something went wrong!");
    }
  };

  return (
    <div class="flex items-center min-h-screen bg-gray-300 dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700">
              Contact Us
            </h1>
            <p class="text-gray-400">
              Please do not put in additional sensitive informations
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
                  <label for="WF_message" class="block mb-2 text-gray-600">Your Message</label>

                  <textarea rows="5" name="message" id="WF_message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                  {/* <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                    Please enter your message.
                  </div> */}
                </div>

                <div class="mb-6">
                  <label for="WF_type" class="block mb-2 text-gray-600">Your Message</label>
                  <select name="qtype" id="WF_type" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
                    <option value="generic">Generic</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div class="mb-6">
                  <button type="reset" onclick="return confirm('Reset The Form?');" class="w-full px-3 py-4 text-white bg-indigo-900 rounded-md active:bg-blue-800 focus:outline-none transition-colors duration-100">
                    Reset
                  </button>
                </div>

                <div class="mb-6">
                  <button type="submit" onclick="return confirm('Submit The Form?');" class="w-full px-3 py-4 text-white bg-indigo-900 rounded-md active:bg-blue-800 focus:outline-none transition-colors duration-100">
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
