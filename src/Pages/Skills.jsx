import React from "react";
import Progres from "../Components/Progres";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Skills() {
  // Combine all data sets into a single array
  const dataArray = [
    {
      data: [
        { label: 'HTML & CSS', value: 80 },
        { label: 'Javascript', value: 75 },
        { label: 'TypeScript', value: 64 },
        { label: 'MySQL', value: 80 },
        { label: 'Node.js', value: 70 },
        { label: 'Json', value: 76 },
      ],
      title: 'Programming Skills',
    },
    {
      data: [
        { label: 'Responsive Web Design', value: 80 },
        { label: 'Multi Level User', value: 80 },
        { label: 'API Integration', value: 70 },
        { label: 'UI/UX', value: 78 },
        { label: 'Database Management', value: 70 },
        { label: 'Gitlab & Github', value: 78 },
        { label: 'Web Hosting and Deployment', value: 70 },

      ],
      title: 'Website Development Skills',
    },
    {
      data: [
        { label: 'Laravel', value: 76 },
        { label: 'Next js', value: 68 },
        { label: 'Inertia Js', value: 70 },
        { label: 'React Js', value: 70 },
        { label: 'Bootstarp', value: 76 },
        { label: 'Talwind Css', value: 78 },

      ],
      title: 'Framework Skills',
    },
    // Add more data sets here with different labels
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl lg:text-5xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-md lg:text-2xl">My Knowledge</p>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={false}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {/* Map through the dataArray */}
          {dataArray.map((item, dataIndex) => (
            <SwiperSlide key={dataIndex}>
              <div className="lg:mx-20">
                {/* Pass the individual data set and title to the Progres component */}
                <h3 className="text-xl lg:text-3xl font-bold my-8 text-white" >
                  {item.title}
                </h3>
                <Progres data={item.data} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
