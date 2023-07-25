import React, { useEffect, useState } from "react";
import { BsWhatsapp } from 'react-icons/bs';

const Bot = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const div = document.querySelector("div");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div className={`fixed bottom-4 sm:right-8 right-4 z-[999] cursor-pointer text-white 
                    text-4xl bg-green-600 w-14 h-14 lg:text-5xl lg:w-20 lg:h-20  items-center justify-center rounded-full animate-bounce
                    ${
                      sticky ? "flex" : "hidden"
                    }
                    `}
    >
      <a href={'https://wa.link/hkrjpa'}>
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default Bot;
