import React from 'react'
import img from "../../../public/img.png"
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <div >
            <div className="max-w-[132rem] !m-auto relative grid grid-cols-1 md:grid-cols-2 p-[0 0.3]">
                <div>
                    <h1>Consistency with the focus gives you the <span>
                        confidence
                    </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit ut repellat nesciunt.</p>
                    <div>
                        <button>Order Now</button>
                        <button><FaPlay />
                            Watch Now </button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero