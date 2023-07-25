import React from "react";
import aboutImg from "../assets/images/project_person1.png";




const About = () => {
  
  const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('resumeImbs.pdf').then(res => {
          res.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'igustMadeBs.pdf';
              alink.click();
          })
      })
  }

  return (
    <section id="about" className=" my-[80px] text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl lg:text-5xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-md lg:text-2xl">My introduction</p>
        <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-6 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 tracking-wide">
              <div className=" lg:mt-8  text-start text-md lg:text-2xl ">
                <p className="">
                  Fresh graduate from Borobudur University completing Bachelor of Computer degree in 2022.
                  During my studies, I have mastered several programming languages such as 
                  HTML, CSS, and JavaScript, as well as frameworks such as React JS and Laravel.
                </p>
                <br />
                <p className="">
                I also have expertise in Database Design and Analysis. 
                I am interested in pursuing a career as a Web Developer and am proficient in this field. 
                I am ready to continue learning and improving my skills in Web Development.
                </p>
              </div>
              <br />
                <button className="btn-primary" onClick={onButtonClick}>
                    Download CV
                </button>
            </div>
          </div>
          <div className="flex-1 lg:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-[320px] object-cover bg-cyan-600 rounded-xl hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
