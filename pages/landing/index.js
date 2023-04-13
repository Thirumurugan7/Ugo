import React, { useState } from "react";

function Landing() {
  const [gotAccount, setGotAccount] = useState();
  // Creating a function to connect user's wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      console.log("clicked");
      console.log(ethereum);
      // Checking if user have Metamask installed
      if (!ethereum) {
        // If user doesn't have Metamask installed, throw an error
        alert("Please install MetaMask");
        return;
      }

      // If user has Metamask installed, connect to the user's wallet
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setGotAccount(accounts);
      // At last save the user's wallet address in browser's local storage
      localStorage.setItem("walletAddress", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Creating a hero component with black background and centering everything in the screen */}
      <section className="relative bg-black flex flex-col h-screen justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                It is Udemy, but{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Decentralized
                </span>
              </h1>
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Learn New Skills with Our Online Courses
              </h1>
              <p className="text-gray-300 mb-6">
                Unlock your potential with our expert-led courses. Choose from a
                wide range of topics and learn at your own pace.
              </p>
              <div className="max-w-3xl mx-auto">
                {/* <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  A YouTube Clone built on top of Polygon network, allow users
                  to create, share and watch videos, without worrying about
                  their privacy.
                </p> */}
                <button
                  className="items-center  bg-white rounded-full font-medium  p-4 shadow-lg"
                  onClick={() => {
                    // Calling the connectWallet function when user clicks on the button
                    connectWallet();
                  }}
                >
                  {gotAccount && <span>{gotAccount}</span>}
                  {!gotAccount && <span>Connect Wallet</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-1 text-white ">
          <h1>Made with 💜 by Akatsuki</h1>
        </div>
      </section>
    </>
  );
}

export default Landing;
