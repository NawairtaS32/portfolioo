import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project1a from "../assets/images/project-1a.png";
import project1b from "../assets/images/project-1b.png";
import project1c from "../assets/images/project-1c.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project_person from "../assets/images/project_person1.png";
import Modal from "../Components/Modal";


const Project = () => {
    const [modalParkir, setModalParkir] = useState(false);
    const [modalKasir, setModalKasir] = useState(false);

    function closeKasir() {
        setModalKasir(false)
    }
    
    function openkasir() {
        setModalKasir(true)
    }

    function closeParkir() {
        setModalParkir(false)
      }
    
      function openParkir() {
        setModalParkir(true)
      }

  
  return (
    <>
        <Modal
          show={modalParkir}
          closeModal={closeParkir}
          Name = {"NsPark"}
          category = {"Website"}
          tools = {"VsCode"}
          Languages = {"Framework Laravel, PHP, Bootstrap" }
          Database = {"MySQL"}
          linkGithub = {"https://github.com/NawairtaS32/CeklisParkir"}
          liveDemo = {"https://parkir.nawairtas.com/public/"}
          imageDua = {project1a}
          imageSatu = {project1}
          imageTiga = {project1b}
          imageEmpat = {project1c}
        />
        <Modal
          show={modalKasir}
          closeModal={closeKasir}
          Name = {"Kasir"}
          category = {"Website"}
          tools = {"VsCode"}
          Languages = {"React Js, Tailwind CSS, Javascript" }
          linkGithub = {"https://github.com/NawairtaS32/CeklisParkir"}
          imageSatu = {project2}
        />
      <section id="projects" className="py-12 text-white">
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-semibold">
            My <span className="text-cyan-600">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-md lg:text-2xl">Showcasing some of my best work</p>
        </div>
        <br />
        <div className="flex max-w-6xl gap-6 py-6 px-5 mx-auto items-center">
          <div className="w-full">
            <Swiper
              slidesPerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
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
                <SwiperSlide >
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl" onClick={openParkir}>
                    <img src={project1} alt="" className="rounded-lg h-[320px] w-full" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl" onClick={openkasir}>
                    <img src={project2} alt="" className="rounded-lg h-[320px] w-full" />
                  </div>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
