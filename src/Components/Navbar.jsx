import React, { useState } from "react";
import {
  Compass,
  ChevronDown,
  Home,
  Search,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdowns = {
    destinations: {
      label: "Destinations",
      links: [
        { title: "Mountains", href: "#" },
        { title: "Beaches", href: "#" },
        { title: "Forests", href: "#" },
        { title: "Deserts", href: "#" },
        { title: "Cities", href: "#" },
      ],
    },
    activities: {
      label: "Activities",
      links: [
        { title: "Hiking", href: "#" },
        { title: "Photography", href: "#" },
        { title: "Camping", href: "#" },
        { title: "Swimming", href: "#" },
      ],
    },
    guides: {
      label: "Travel Guides",
      links: [
        { title: "Popular Routes", href: "#" },
        { title: "Season Guide", href: "#" },
        { title: "Travel Tips", href: "#" },
        { title: "Local Customs", href: "#" },
      ],
    },
    services: {
      label: "Services",
      links: [
        { title: "Transportation", href: "#" },
        { title: "Accommodation", href: "#" },
        { title: "Tour Packages", href: "#" },
        { title: "Equipment Rental", href: "#" },
      ],
    },
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
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-gray-800" />
            <span className="text-gray-800 text-xl font-bold">TravelLens</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-800 hover:text-gray-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Dropdowns */}
            {Object.entries(dropdowns).map(([key, dropdown]) => (
              <div
                key={key}
                className="relative"
              >
                <button
                  onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={() => handleMouseLeave(key)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <span>{dropdown.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {dropdownStates[key] && (
                  <div
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={() => handleMouseLeave(key)}
                    className="absolute top-full left-0  w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    {dropdown.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
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
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                <Home className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            {/* Mobile Dropdowns */}
            {Object.entries(dropdowns).map(([key, dropdown]) => (
              <div key={key} className="py-2">
                <button
                  onClick={() => toggleMobileDropdown(key)}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 transition-colors py-2"
                >
                  <span>{dropdown.label}</span>
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
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="flex justify-around py-4 border-t border-gray-200 mt-2">
              <button className="text-gray-700 hover:text-gray-900 transition-colors p-2">
                <Home className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors p-2">
                <Search className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors p-2">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors p-2">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
