import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';

export default function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          const nav = document.querySelector("nav");
          window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);
    return(
            <nav className={`navbar p-2 lg:p-0 w-full text-2xl rounded-b-3xl lg:rounded-none 
                                border-double border-4 lg:border-0 border-slate-200 text-white fixed top-0 z-50
                                ${
                                    sticky ? "bg-blue-400/60  text-gray-900" : " bg-blue-600 lg:bg-transparent text-white lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-t lg:from-blue-500 lg:via-cyan-500 lg:to-slate-500"
                                  }
                                `}
            >
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case lg:pl-[12%] text-3xl lg:text:5xl lg:text-5xl font-bold font-serif ">
                        Satriawan
                    </a>
                </div>
                <div className={` ${
                                    sticky ? "lg:bg-white/0 bg-white" : "bg-blue-500"} 
                                    text-gray-900 lg:block hidden px-7 py-2 font-medium  rounded-bl-full 
                                    pr-[10%] 
                                `}
                >
                    <ul className="menu menu-horizontal uppercase px-1">
                        <li>
                            <Link
                                to= "about"
                                smooth={true}
                                offset={-180}
                                duration={500}
                            >
                                <div className="">
                                    <span className="py-2 font-bold hover:text-white">
                                        about
                                    </span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to= "skills"
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                <div className="">
                                    <span className="py-2 font-bold hover:text-white">
                                        Skill
                                    </span>
                                </div>
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                to= "projects"
                                smooth={true}
                                offset={-40}
                                duration={1500}
                            >
                                <div className="">
                                    <span className="py-2 font-bold hover:text-white">
                                      projects
                                    </span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to= "contact"
                                smooth={true}
                                offset={-24}
                                duration={500}
                            >
                                <div className="">
                                    <span className="py-2 font-bold hover:text-white">
                                        Contact
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
};
