import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { AiOutlineFundProjectionScreen, AiOutlineClose } from "react-icons/ai";
import { GrVulnerability } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

const menuItems = [
    {
      id: "about",
      icon: <FaUserCircle className="text-[50px] text-white" />,
      target: -100,
    },
    {
      id: "skills",
      icon: <GrVulnerability className="text-[50px] text-slate-900 bg-green-900 p-1 rounded-full" />,
      target: -40,
    },
    {
      id: "projects",
      icon: <AiOutlineFundProjectionScreen className="text-[50px] text-white bg-slate-600 hover:bg-blue-600 p-1 rounded-2xl" />,
      target: -40,
    },
    {
      id: "contact",
      icon: <FcContacts className="text-[50px]" />,
      target: -40,
    },
];

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        ref={menuRef}
        className={`max-w-lg mx-auto fixed bottom-[24%] right-0 bg-blue-400/60 px-10 rounded-l-[60px] grid grid-cols-1 gap-8 p-8 text-white z-50 ${
          isMenuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        {menuItems.map((item) => (
          <Link key={item.id} to={item.id} smooth={true} offset={item.target} duration={500} onClick={toggleMenu}>
            <div className="flex flex-col justify-center items-center">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>

      <button
        className={`w-[60px] h-[60px] font-bold rounded-3xl fixed top-[1%] right-[4%] flex justify-center items-center z-50 lg:hidden ${
          isSticky ? "text-black" : "lg:bg-transparent text-white"
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <AiOutlineClose className="text-[28px]" />
        ) : (
          <FiMenu className="text-[28px]" />
        )}
      </button>
    </>
  );
}
