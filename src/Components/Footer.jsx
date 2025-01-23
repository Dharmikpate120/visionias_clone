import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-main2 md:bg-transparent text-white mt-20 md:mt-0 md:h-[500px] relative">
      <div className="hidden md:inline absolute top-0 left-0  -z-1 overflow-hidden w-full bg-transparent">
        <svg
          className="absolute"
          id="visual"
          viewBox="0 0 8000 600"
          width="8000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 341L43 324C86 307 172 273 258 260.7C344 248.3 430 257.7 516 271.5C602 285.3 688 303.7 774 305.5C860 307.3 946 292.7 1032 288.7C1118 284.7 1204 291.3 1290 304.8C1376 318.3 1462 338.7 1548 345.2C1634 351.7 1720 344.3 1806.2 332.5C1892.3 320.7 1978.7 304.3 2064.8 293.7C2151 283 2237 278 2323 286.5C2409 295 2495 317 2581 328C2667 339 2753 339 2839 330.3C2925 321.7 3011 304.3 3097 290.3C3183 276.3 3269 265.7 3355 272.8C3441 280 3527 305 3613 322.3C3699 339.7 3785 349.3 3871 337.2C3957 325 4043 291 4129 283.7C4215 276.3 4301 295.7 4387 300.2C4473 304.7 4559 294.3 4645 285.5C4731 276.7 4817 269.3 4903 276.7C4989 284 5075 306 5161 320.5C5247 335 5333 342 5419 336.3C5505 330.7 5591 312.3 5677 300.8C5763 289.3 5849 284.7 5935.2 285C6021.3 285.3 6107.7 290.7 6193.8 287C6280 283.3 6366 270.7 6452 280.5C6538 290.3 6624 322.7 6710 337.5C6796 352.3 6882 349.7 6968 335.3C7054 321 7140 295 7226 278.5C7312 262 7398 255 7484 259.7C7570 264.3 7656 280.7 7742 289.2C7828 297.7 7914 298.3 7957 298.7L8000 299L8000 601L7957 601C7914 601 7828 601 7742 601C7656 601 7570 601 7484 601C7398 601 7312 601 7226 601C7140 601 7054 601 6968 601C6882 601 6796 601 6710 601C6624 601 6538 601 6452 601C6366 601 6280 601 6193.8 601C6107.7 601 6021.3 601 5935.2 601C5849 601 5763 601 5677 601C5591 601 5505 601 5419 601C5333 601 5247 601 5161 601C5075 601 4989 601 4903 601C4817 601 4731 601 4645 601C4559 601 4473 601 4387 601C4301 601 4215 601 4129 601C4043 601 3957 601 3871 601C3785 601 3699 601 3613 601C3527 601 3441 601 3355 601C3269 601 3183 601 3097 601C3011 601 2925 601 2839 601C2753 601 2667 601 2581 601C2495 601 2409 601 2323 601C2237 601 2151 601 2064.8 601C1978.7 601 1892.3 601 1806.2 601C1720 601 1634 601 1548 601C1462 601 1376 601 1290 601C1204 601 1118 601 1032 601C946 601 860 601 774 601C688 601 602 601 516 601C430 601 344 601 258 601C172 601 86 601 43 601L0 601Z"
            fill="rgba(44, 44, 44, 0.4)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        <svg
          className="absolute"
          id="visual"
          viewBox="0 0 8000 600"
          width="8000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 244L43 266C86 288 172 332 258 336.7C344 341.3 430 306.7 516 283.2C602 259.7 688 247.3 774 262C860 276.7 946 318.3 1032 324.7C1118 331 1204 302 1290 272.5C1376 243 1462 213 1548 231C1634 249 1720 315 1806.2 324.5C1892.3 334 1978.7 287 2064.8 256C2151 225 2237 210 2323 202C2409 194 2495 193 2581 205.5C2667 218 2753 244 2839 248C2925 252 3011 234 3097 243.2C3183 252.3 3269 288.7 3355 305.3C3441 322 3527 319 3613 325.2C3699 331.3 3785 346.7 3871 343.7C3957 340.7 4043 319.3 4129 309.2C4215 299 4301 300 4387 305.2C4473 310.3 4559 319.7 4645 337C4731 354.3 4817 379.7 4903 378.5C4989 377.3 5075 349.7 5161 327.2C5247 304.7 5333 287.3 5419 291.2C5505 295 5591 320 5677 318.7C5763 317.3 5849 289.7 5935.2 301.3C6021.3 313 6107.7 364 6193.8 379C6280 394 6366 373 6452 356.8C6538 340.7 6624 329.3 6710 307.2C6796 285 6882 252 6968 261C7054 270 7140 321 7226 349C7312 377 7398 382 7484 384.7C7570 387.3 7656 387.7 7742 360.3C7828 333 7914 278 7957 250.5L8000 223L8000 601L7957 601C7914 601 7828 601 7742 601C7656 601 7570 601 7484 601C7398 601 7312 601 7226 601C7140 601 7054 601 6968 601C6882 601 6796 601 6710 601C6624 601 6538 601 6452 601C6366 601 6280 601 6193.8 601C6107.7 601 6021.3 601 5935.2 601C5849 601 5763 601 5677 601C5591 601 5505 601 5419 601C5333 601 5247 601 5161 601C5075 601 4989 601 4903 601C4817 601 4731 601 4645 601C4559 601 4473 601 4387 601C4301 601 4215 601 4129 601C4043 601 3957 601 3871 601C3785 601 3699 601 3613 601C3527 601 3441 601 3355 601C3269 601 3183 601 3097 601C3011 601 2925 601 2839 601C2753 601 2667 601 2581 601C2495 601 2409 601 2323 601C2237 601 2151 601 2064.8 601C1978.7 601 1892.3 601 1806.2 601C1720 601 1634 601 1548 601C1462 601 1376 601 1290 601C1204 601 1118 601 1032 601C946 601 860 601 774 601C688 601 602 601 516 601C430 601 344 601 258 601C172 601 86 601 43 601L0 601Z"
            fill="rgba(44, 44, 44, 0.4)"
            // fill="#fff"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        <svg
          id="visual"
          viewBox="0 0 8000 600"
          width="8000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 242L43 248.8C86 255.7 172 269.3 258 279C344 288.7 430 294.3 516 290C602 285.7 688 271.3 774 272C860 272.7 946 288.3 1032 300.3C1118 312.3 1204 320.7 1290 311C1376 301.3 1462 273.7 1548 272.5C1634 271.3 1720 296.7 1806.2 314C1892.3 331.3 1978.7 340.7 2064.8 346.2C2151 351.7 2237 353.3 2323 345.5C2409 337.7 2495 320.3 2581 310.5C2667 300.7 2753 298.3 2839 306.2C2925 314 3011 332 3097 323.8C3183 315.7 3269 281.3 3355 281.8C3441 282.3 3527 317.7 3613 333.5C3699 349.3 3785 345.7 3871 339.2C3957 332.7 4043 323.3 4129 306.8C4215 290.3 4301 266.7 4387 269.3C4473 272 4559 301 4645 305.2C4731 309.3 4817 288.7 4903 293.2C4989 297.7 5075 327.3 5161 326.2C5247 325 5333 293 5419 281.2C5505 269.3 5591 277.7 5677 276.3C5763 275 5849 264 5935.2 275.7C6021.3 287.3 6107.7 321.7 6193.8 332C6280 342.3 6366 328.7 6452 318.3C6538 308 6624 301 6710 296C6796 291 6882 288 6968 297.5C7054 307 7140 329 7226 329.3C7312 329.7 7398 308.3 7484 289.8C7570 271.3 7656 255.7 7742 258C7828 260.3 7914 280.7 7957 290.8L8000 301L8000 601L7957 601C7914 601 7828 601 7742 601C7656 601 7570 601 7484 601C7398 601 7312 601 7226 601C7140 601 7054 601 6968 601C6882 601 6796 601 6710 601C6624 601 6538 601 6452 601C6366 601 6280 601 6193.8 601C6107.7 601 6021.3 601 5935.2 601C5849 601 5763 601 5677 601C5591 601 5505 601 5419 601C5333 601 5247 601 5161 601C5075 601 4989 601 4903 601C4817 601 4731 601 4645 601C4559 601 4473 601 4387 601C4301 601 4215 601 4129 601C4043 601 3957 601 3871 601C3785 601 3699 601 3613 601C3527 601 3441 601 3355 601C3269 601 3183 601 3097 601C3011 601 2925 601 2839 601C2753 601 2667 601 2581 601C2495 601 2409 601 2323 601C2237 601 2151 601 2064.8 601C1978.7 601 1892.3 601 1806.2 601C1720 601 1634 601 1548 601C1462 601 1376 601 1290 601C1204 601 1118 601 1032 601C946 601 860 601 774 601C688 601 602 601 516 601C430 601 344 601 258 601C172 601 86 601 43 601L0 601Z"
            fill="rgba(44, 44, 44, 0.7)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
      <div className="absolute md:bottom-0 md:left-0 w-full md:h-[42%] bg-main2 md:bg-transparent pt-5 ">
        <div className="flex items-center flex-col md:flex-row w-full justify-center px-[10%]">
          <div className="container flex w-[60%]  flex-col justify-center gap-3 items-center md:items-evenly">
            <div className="text-2xl font-bold">
              <img className="grayscale h-16" src={logo} alt="" />
            </div>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-blue-300">
                <Facebook />
              </Link>
              <Link to="#" className="text-white hover:text-blue-300">
                <Twitter />
              </Link>
              <Link to="#" className="text-white hover:text-blue-300">
                <Linkedin />
              </Link>
              <Link to="#" className="text-white hover:text-blue-300">
                <Instagram />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 w-full max-w-[20rem]">
            <div className="container mx-auto mt-4 flex justify-center">
              <ul className="flex flex-col">
                <li>
                  <Link to="/" className="text-white hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacy-policy"
                    className="text-white hover:text-blue-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="terms-and-conditions"
                    className="text-white hover:text-blue-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/disclaimer"
                    className="text-white hover:text-blue-300"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="container mx-auto mt-4 flex justify-center ">
              <ul className="flex flex-col">
                <li>
                  <Link
                    to="/intellectual-property"
                    className="text-white hover:text-blue-300"
                  >
                    Intellectual Property
                  </Link>
                </li>
                <li>
                  <Link
                    to="/process-flow"
                    className="text-white hover:text-blue-300"
                  >
                    Process Flow
                  </Link>
                </li>
                <li>
                  <Link
                    to="/return-policy"
                    className="text-white hover:text-blue-300"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-and-delivery"
                    className="text-white hover:text-blue-300"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-5 my-8 md:my-3 flex justify-center items-center flex-col">
          <div className="flex place-items-center">
            Address : World Inbox Edu Paper Pvt Ltd FF-3, Sun Harmony, Nr
            vadodariya circle, Hill drive, Bhavnagar. 364001
          </div>
          <h2 className="font-bold text-lg">For Queries</h2>
          <div className="flex place-items-center">
            <Phone className="h-4" /> 0278-2564445, 9099096116
          </div>
          <div className="flex place-items-center ">
            <Mail className="h-4" />
            kaushik@worldinbox.co.in
          </div>
        </div>
        <div className="container mx-auto mt-4 text-center">
          <p>
            Copyright 2025 &copy; World Inbox Knowledge Sharing Pvt Ltd.. All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
