import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdowns = {
    // destinations: {
    //   label: "Destinations",
    //   links: [
    //     { title: "Mountains", href: "#" },
    //     { title: "Beaches", href: "#" },
    //     { title: "Forests", href: "#" },
    //     { title: "Deserts", href: "#" },
    //     { title: "Cities", href: "#" },
    //   ],
    // },
    // activities: {
    //   label: "Activities",
    //   links: [
    //     { title: "Hiking", href: "#" },
    //     { title: "Photography", href: "#" },
    //     { title: "Camping", href: "#" },
    //     { title: "Swimming", href: "#" },
    //   ],
    // },
    // guides: {
    //   label: "Travel Guides",
    //   links: [
    //     { title: "Popular Routes", href: "#" },
    //     { title: "Season Guide", href: "#" },
    //     { title: "Travel Tips", href: "#" },
    //     { title: "Local Customs", href: "#" },
    //   ],
    // },
    // services: {
    //   label: "Services",
    //   links: [
    //     { title: "Transportation", href: "#" },
    //     { title: "Accommodation", href: "#" },
    //     { title: "Tour Packages", href: "#" },
    //     { title: "Equipment Rental", href: "#" },
    //   ],
    // },
  };
  const NavLinks = {
    Home: "/",
    "About Us": "/#about-us",
    Publication: "/publication",
    Megazines: "/megazines",
    Academy: "/academy",
    "digital Application": "/digital-application",
    Events: "/events",
    Blogs: "/blogs",
    Career: "/career",
    "Contact-Us": "/contact-us",
  };
  const handleMouseEnter = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: false }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (key) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="bg-transparent z-10 fixed w-full backdrop-blur-lg top-0 left-0 min-h-16 flex justify-center items-center shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 h-5">
            <img src={logo} className="invert h-10" alt="logo" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden text-light6 hover:text-light6 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {Object.entries(NavLinks).map(([key, link]) => (
              <Link
                key={key}
                to={link}
                className="flex items-center space-x-1 text-light6 hover:text-light6 transition-colors"
              >
                <span>{key}</span>
              </Link>
            ))}
            <Link
              to="/#about-us"
              className="flex items-center space-x-1 text-light6 hover:text-light6 transition-colors"
            >
              <span>About Us</span>
            </Link>
            {/* Dropdowns */}
            {Object.entries(dropdowns).map(([key, dropdown]) => (
              <div key={key} className="relative">
                <button
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={() => handleMouseLeave(key)}
                  className="flex items-center space-x-1 text-light6 hover:text-light6 transition-colors"
                >
                  <span>{dropdown.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {dropdownStates[key] && (
                  <div
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={() => handleMouseLeave(key)}
                    className="absolute top-full left-0  w-48 bg-main1 rounded-md shadow-lg py-1 z-50"
                  >
                    {dropdown?.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block px-4 py-2 text-light6 hover:bg-main3 transition-colors"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Regular Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-light6 hover:text-light6 transition-colors p-2">
                Signin
              </button>
              <button className="text-light6 hover:text-light6 transition-colors p-2">
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4">
            {/* Mobile Dropdowns */}
            {Object.entries(dropdowns).map(([key, dropdown]) => (
              <div key={key} className="py-2">
                <button
                  onClick={() => toggleMobileDropdown(key)}
                  className="w-full flex items-center justify-between text-light6 hover:text-light6 transition-colors py-1"
                >
                  <span className="text-light6">{dropdown.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      dropdownStates[key] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownStates[key] && (
                  <div className="bg-gray-50 rounded-md mt-1">
                    {dropdown.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block px-4 py-2 text-light6 hover:bg-main3 transition-colors"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            {Object.entries(NavLinks).map(([key, link]) => (
              <Link
                key={key}
                to={link}
                className="flex items-center justify-center text-xl w-full my-2 border-t-[1px] space-x-1 text-light6 hover:text-light6 transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
              >
                <span>{key}</span>
              </Link>
            ))}
            <div className="flex justify-around py-4 border-t border-gray-200 mt-2">
              <button className="text-light6 hover:text-light6 transition-colors p-2">
                Signin
              </button>
              <button className="text-light6 hover:text-light6 transition-colors p-2">
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
