'use client'
import React from 'react'
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin ,FaWhatsapp} from 'react-icons/fa';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import "./social.css"
export default function Social() {
    function sendEmail() {
        console.log('clicked');
        window.location.assign("mailto:shadiEmtanis@gmail.com");
      }
  return (
    <div className= "fixed bottom-0 flex justify-evenly items-center w-full h-16 px-4 rounded-t-xl  bg-neutral-100 border-neutral-200  m-auto">
    {/* Removed the surrounding divs */}
    <BsTelephoneFill className="iconPhone" onClick={() => window.open("tel:0502136502", "_blank")} />
    <MdEmail className="iconEmail" onClick={sendEmail} />
    <a href="https://api.whatsapp.com/send?phone=972502136502" target="_blank" rel="noreferrer">
      {/* Replace 'YourPhoneNumberHere' with the actual phone number in international format (e.g., +1234567890) */}
       <FaWhatsapp className="iconInstagram" />
    </a>
    <a href="https://www.instagram.com/shadi7.6/" target="_blank" rel="noreferrer">
      <FaInstagram className="iconInstagram" />
    </a>
    <a href="https://www.facebook.com/shadi.emtanes" target="_blank" rel="noreferrer">
      <FaFacebook className="iconFacebook" />
    </a>
  </div>
  )
}
