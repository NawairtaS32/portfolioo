import { Link } from "react-router-dom";
import nawairtas from "../assets/images/nawairtas.png";

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <Link to={"/"}>
                <img src={nawairtas} alt="" className="animate-bounce ml-[10%] w-[80%] " />
            </Link>
            <div className=" ">
                <p className=" flex text-white text-[140px] ">
                    4 <span className="animate-spin" > O </span> 4
                </p>
                <p className="text-center text-xl ">
                    Sory, the page not found
                </p>
            </div>
        </div>
    )
};
