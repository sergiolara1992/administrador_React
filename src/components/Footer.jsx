import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-14 pb-3">
      <div className=" container flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className=" font-medium uppercase cursor-pointer">
              Find a store
            </div>
            <div className="font-medium uppercase  cursor-pointer">
              become a partner
            </div>
            <div className=" font-medium uppercase  cursor-pointer">
              sign up for email
            </div>
            <div className=" font-medium uppercase cursor-pointer">
              send us feedback
            </div>
            <div className=" font-medium uppercase  cursor-pointer">
              student discount
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className=" font-medium uppercase ">
                get help
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Returns
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className=" font-medium uppercase ">
                About JOSE PETS
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                News
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Careers
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Investors
              </div>
              <div className=" text-white hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF  size={20} />
          </div>
          <div
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </div>
          <div
            onClick={() => window.open("https://youtube.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaYoutube size={20} />
          </div>
          <div
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </div>

      <div className="container flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white hover:text-white cursor-pointer text-center md:text-left mt-10">
          © 2023 JOSE PETS, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center md:mt-10">
          <div className="text-[12px] text-white hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/ hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </div>
    </footer>
  );
}

export default Footer