import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { AiOutlineFundProjectionScreen, AiOutlineClose } from "react-icons/ai";
import { GrVulnerability } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-scroll';



export default function Menu(){

    const [show, setShow] = useState(false)
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          const button = document.querySelector("button");
          window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const handleShowModal = ()=>{
        setShow(!show)
    }


    
    return (
        <>
            {show && (
                    <div className="max-w-lg mx-auto" >
                        <div className={`fixed bottom-[24%] bg-blue-400/60 border-double border-4 px-10 rounded-l-[60px] grid grid-cols-1 gap-8 p-8 -right-[0px] text-white z-[200]
                                `}  >
                            <Link
                                to= "about"
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={handleShowModal}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <FaUserCircle className="text-[50px] text-white" />
                                </div>
                            </Link>
                            
                            <Link
                                to= "skills"
                                smooth={true}
                                offset={-40}
                                duration={500}
                                onClick={handleShowModal}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <GrVulnerability className="text-[50px] text-slate-900 bg-green-900 p-1 rounded-full" />
                                </div>
                            </Link>

                            <Link
                                to= "projects"
                                smooth={true}
                                offset={-40}
                                duration={1500}
                                onClick={handleShowModal}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <AiOutlineFundProjectionScreen className="text-[50px] text-white bg-slate-600 hover:bg-blue-600 p-1 rounded-2xl" />
                                </div>
                            </Link>

                            <Link
                                to= "contact"
                                smooth={true}
                                offset={-40}
                                duration={500}
                                onClick={handleShowModal}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <FcContacts className="text-[50px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
            )}
        
            <button className={`w-[60px] h-[60px] font-bold  rounded-3xl fixed top-[1%] 
                                right-[4%] flex justify-center items-center z-[250] flex lg:hidden
                                ${
                                    sticky ? "text-black" : "lg:bg-transparent text-white"
                                } 
                                `} 
                    onClick={handleShowModal}>
                {
                    show ?
                    <AiOutlineClose className="text-[28px] " />
                    :
                    <FiMenu className="text-[28px] " />
                }
            </button>
        </>
    )
}