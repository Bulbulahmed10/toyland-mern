import React from "react";
import logo from "../../../assets/logo.png";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialYoutube } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
import { GrMapLocation } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import paymentImg from "../../../assets/payments_large_25c93ac6-988d-4e66-b116-eab60a12eced_large.png";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:my-10 gap-6 px-4 py-16">
        <div>
          <div className="flex items-center gap-2 ">
            <img data-aos="zoom-in" className="w-14 h-14" src={logo} alt="" />
            <span
              data-aos="fade-left"
              className="font-StyleScript text-4xl font-bold tracking-widest text-red-500">
              Toyland
            </span>
          </div>
          <p className="mt-2" data-aos="zoom-out">
            A kids toy shop is a store that specializes in <br /> selling toys
            and games designed specifically for children.
          </p>
          <ul className="mt-8" data-aos="zoom-out-down">
            <li className=" flex gap-2 mt-2">
              <GrMapLocation className="text-xl" />
              <span className="text-slate-500 ">
                Address: 1800 about kinney Nebraska UK
              </span>
            </li>
            <li className=" flex gap-2 mt-2">
              <MdAlternateEmail className="text-xl" />
              <span className="text-slate-500 ">Email: hello@example.com</span>
            </li>
            <li className=" flex gap-2 mt-2">
              <TbPhoneCall className="text-xl" />
              <span className="text-slate-500 ">Phone: (012) 345 6789</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div data-aos="flip-up">
            <p className="text-lg font-bold mb-4">Quick Links</p>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-blue-400">
                <a href="#">Help Center</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">Redeem Voucher</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">Contact Us</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">Policies & Rules</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">Check Offer List</a>
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <p className="text-lg font-bold mb-4">Information</p>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-blue-400">
                <a href="#">Product Support</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">Checkout</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">License Policy</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">Affiliate</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up">
            <p className="text-lg font-bold mb-4">Follow Us On</p>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-blue-400 flex items-center gap-2">
                <FiFacebook className="text-xl" />
                <a
                  href="https://www.facebook.com/Mdbulbulmolla01/"
                  target="_blank">
                  Facebook
                </a>
              </li>
              <li className="hover:text-blue-400 flex items-center gap-2">
                <TfiTwitter className="text-xl" />
                <a href="https://twitter.com/BulBul_AHMED_10" target="_blank">
                  Twitter
                </a>
              </li>
              <li className="hover:text-blue-400 flex items-center gap-2">
                <IoLogoInstagram className="text-xl" />
                <a
                  href="https://www.instagram.com/bulbul_ahmed10/"
                  target="_blank">
                  Instagram
                </a>
              </li>
              <li className="hover:text-blue-400 flex items-center gap-2">
                <SlSocialYoutube className="text-xl" />
                <a
                  href="https://www.youtube.com/@ProgrammingHero"
                  target="_blank">
                  Youtube
                </a>
              </li>
              <li className="hover:text-blue-400 flex items-center gap-2">
                <ImPinterest2 className="text-xl" />
                <a href="https://www.pinterest.com/" target="_blank">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between py-6 px-5">
        <p>
          Copyright <span className="text-blue-400">Toyland</span> | Built with
          <span className="text-blue-400">Toyland</span> by
          <span className="text-blue-400">TeamOnePercent</span>
        </p>
        <img className="my-3 md:my-0" src={paymentImg} alt="" />
      </div>
    </>
  );
};

export default Footer;
