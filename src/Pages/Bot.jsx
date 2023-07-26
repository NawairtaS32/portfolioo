import React, { useEffect, useState } from "react";
import { BsWhatsapp } from 'react-icons/bs';

const Bot = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setVisible(!isAtTop && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 sm:right-8 right-4 z-[999] cursor-pointer text-white 
                    text-4xl bg-green-600 w-14 h-14 lg:text-5xl lg:w-20 lg:h-20 items-center justify-center 
                    rounded-full animate-bounce ${visible ? "flex" : "hidden"}`}
    >
      <a href={'https://wa.link/hkrjpa'}>
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default Bot;
