import React from "react";
import { Link } from 'react-scroll';
import hero from "../assets/images/profil.png";


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 lg:flex-row flex-col items-center"
    >
      <div className="flex-1 relative flex items-center justify-center h-full">
        <img src={hero} alt="" 
              className=" mt-[40px] border-4 lg:border-0 border-slate-200 lg:bg-transparent 
                          rounded-b-[180px] rounded-tr-[240px] rounded-tl-[40px]  bg-slate-100/50   
                          lg:mt-10 w-[60%] h-[60%] lg:w-[540px] lg:h-[900px] z-10" 
        />
      </div>
      <div className="flex-1">
        <div className="lg:text-left text-center  ">
          <div className="text-[28px] lg:text-7xl font-semibold tracking-normal lg:tracking-wide">
            <div className="lg:my-4 ">
                <p className="text-[20] py-4 text-slate-400">
                    Hello, I am
                </p>
                <div className=" capitalize font-extrabold">
                    <p className="">
                        I Gusti <span className="text-green-400">Made</span>
                    </p>
                    <p className="">
                        Bagas <span className="text-green-400">Satriawan</span>
                    </p>
                </div>
            </div>
            <p className=" text-[20px] lg:text-5xl text-slate-600">
                Junior Web Developer
            </p>
          </div>
          <div className="py-6">
            <Link
                to= "about"
                smooth={true}
                offset={-140}
                duration={500}
            >
                <button className="btn btn-primary">About Me</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
