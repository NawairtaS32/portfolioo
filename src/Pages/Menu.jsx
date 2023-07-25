import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { AiOutlineFundProjectionScreen, AiOutlineClose } from "react-icons/ai";
import { GrVulnerability } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

const menuItems = [
    {
        id: 1,
        icon: <FaUserCircle className="text-[50px] text-white" />,
        to: "about",
        label: "About",
    },
    {
        id: 2,
        icon: <GrVulnerability className="text-[50px] text-slate-900 bg-green-900 p-1 rounded-full" />,
        to: "skills",
        label: "Skills",
    },
    {
        id: 3,
        icon: <AiOutlineFundProjectionScreen className="text-[50px] text-white bg-slate-600 hover:bg-blue-600 p-1 rounded-2xl" />,
        to: "projects",
        label: "Projects",
    },
    {
        id: 4,
        icon: <FcContacts className="text-[50px]" />,
        to: "contact",
        label: "Contact",
    },
];

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
        };
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <div
            className={` max-w-lg mx-auto fixed bottom-[24%] right-0 bg-blue-400/60 border-double border-4 px-10 rounded-l-[60px] grid grid-cols-1 gap-4 p-8 text-white z-50 ${
            isMenuOpen ? "menu-open" : "menu-closed"
            }`}
        >
            <div className="flex flex-col gap-6 items-center w-full">
            {menuItems.map((item) => (
                <Link key={item.id} to={item.to} smooth={true} offset={-40} duration={500}>
                <div className="flex flex-col justify-center items-center">
                    {item.icon}
                    <span>{item.label}</span>
                </div>
                </Link>
            ))}
            </div>
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
