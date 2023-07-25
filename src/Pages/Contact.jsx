import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { MdContactPhone } from 'react-icons/md';
import { RiChatFollowUpFill } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';

export default function Contact() {
    return(
        <div className="hero bg-gray-800 py-8" id='contact'>
            <div className="hero-content text-center">
                <div className="text-center text-white">
                    <p className="text-5xl">
                        Contact
                    </p>
                    <p className="mt-4 text-2xl py-2 lg:text-[32px]">
                        Feel free to get in touch with me
                    </p>
                    <div className=" mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="text-center">
                            <IoLocationSharp className="text-[50px] lg:text-[60px] w-full text-green-400 " />
                            <p className="text-2xl py-2 lg:text-[32px]">
                                Location
                            </p>
                            <p className="text-xl lg:text-[28px]">
                                North Jakarta, Indonesia, 14310
                            </p>
                        </div>
                        <a href='tel:+6285963955448' className="">
                            <MdContactPhone className="text-[50px] lg:text-[60px] w-full text-cyan-400 " />
                            <p className="text-2xl py-2 lg:text-[32px]">
                                Call Me
                            </p>
                            <p className="text-xl lg:text-[28px]">
                                +62-859-6395-5448
                            </p>
                        </a>
                        <a href='mailto:snawairtas@gmail.com' className="">
                            <SiMinutemailer className="text-[50px] lg:text-[60px] w-full text-red-400 " />
                            <p className="text-2xl py-2 lg:text-[32px]">
                                Mail Me
                            </p>
                            <p className="text-xl lg:text-[28px]">
                                snawairtas@gmail.com
                            </p>
                        </a>
                        <div className="">
                            <RiChatFollowUpFill className="text-[50px] lg:text-[60px] w-full text-orange-400 " />
                            <p className="text-2xl py-2 lg:text-[32px]">
                                Follow Me
                            </p>
                            <div className="mt-2 px-8 ml-14 lg:ml-4 grid grid-cols-3 text-[40px]">
                                <a href={'https://github.com/NawairtaS32'} target="_blank">
                                    <AiFillGithub />
                                </a>

                                <a href={'https://wa.link/hkrjpa'}>
                                    <BsWhatsapp />
                                </a>

                                <a href={'https://www.linkedin.com/in/igustimade/'}>
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
  