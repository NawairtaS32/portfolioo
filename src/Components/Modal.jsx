import { Dialog, Transition } from "@headlessui/react";
import { Autoplay, Pagination } from "swiper";
import { FaWindowClose } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";


export default function Modal({ 
    closeModal, 
    Fragment, 
    show,
    imageSatu, 
    imageDua, 
    imageTiga, 
    imageEmpat, 
    Name, 
    Languages, 
    tools,
    category,
    linkGithub, 
    liveDemo,
    Database,
}) {
    
    
    return(
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-[320px] lg:max-w-[1000px] transform overflow-hidden rounded-2xl bg-slate-900/80 p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium place-content-between flex  leading-6 text-white text-center text-2xl lg:text-5xl"
                            >
                                <div className="">
                                    {Name}
                                </div>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    >
                                        <FaWindowClose className="font-bold" />
                                </button>
                            </Dialog.Title>
                            {/* keterangan */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 text-lg lg:xl text-white py-4">
                                <div className="">
                                    <p className="">
                                        Category : {category || "-"}
                                    </p>
                                    <p>
                                        Tools : {tools  || "-"}
                                    </p>
                                </div>
                                <div className="">
                                    <p>
                                        Languages : {Languages  || "-"}
                                    </p>
                                    <p >
                                        Database : {Database  || "-"}
                                    </p>
                                </div>
                            </div>
                            {/* image */}
                            <Swiper
                                slidesPerview={1}
                                spaceBetween={20}
                                breakpoints={{
                                    768: {
                                    slidesPerView: 1,
                                    },
                                }}
                                loop={false}
                                autoplay={{
                                    delay: 3000,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                            >
                                {imageSatu ?

                                    <SwiperSlide>
                                    <div className="h-[228px] lg:h-[500px] w-full rounded-xl">
                                        <img src={imageSatu} alt="" className={`rounded-lg h-[200px] lg:h-[470px] w-full 
                                            ${ imageSatu ? "flex" : "hidden"  }`} />
                                    </div>
                                </SwiperSlide>
                                    :
                                    ""
                                }

                                {imageDua ?

                                    <SwiperSlide>
                                        <div className="flex h-[228px] lg:h-[500px] w-full p-4 rounded-xl">
                                            <img src={imageDua} alt="" className={`rounded-lg h-[200px] lg:h-[470px] w-full 
                                                }`} />
                                        </div>
                                    </SwiperSlide>
                                    :
                                    ""
                                }

                                {imageTiga ?

                                    <SwiperSlide>
                                    <div className="h-[228px] lg:h-[500px] w-full rounded-xl">
                                        <img src={imageTiga} alt="" className={`rounded-lg h-[200px] lg:h-[470px] w-full 
                                            ${ imageTiga ? "flex" : "hidden"  }`} />
                                    </div>
                                </SwiperSlide>
                                    :
                                    ""
                                }

                                {imageEmpat ?

                                    <SwiperSlide>
                                        <div className="flex h-[228px] lg:h-[500px] w-full p-4 rounded-xl">
                                            <img src={imageEmpat} alt="" className={`rounded-lg h-[200px] lg:h-[470px] w-full 
                                                }`} />
                                        </div>
                                    </SwiperSlide>
                                    :
                                    ""
                                }
                            </Swiper>
                            <div className="mt-4 flex gap-4 text-lg lg:text-2xl ">
                                <a
                                    href={linkGithub}
                                    target="_blank"
                                    className="text-cyan-600 bg-gray-800 px-2 py-2 inline-block"
                                >
                                    Github
                                </a>
                                <a
                                    href={liveDemo || "/Not Found"}
                                    target="_blank"
                                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
};
