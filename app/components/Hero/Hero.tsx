import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b1.png";
// import BurgerImg2 from "@/public/images/b2.png";
// import BurgerImg3 from "@/public/images/b3.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      showDots={true}
      responsive={responsive}
      infinite
      autoPlay={true}
      autoPlaySpeed={4000}
      itemClass="item"
      centerMode={false}
    >
      {/* 1st hero slide */}
      <div className="w-full md:h-[88vh] h-[50vh] flex items-center justify-center bg-blue-950 md:clip_path">
        <div className="w-[88%] h-[100%] grid grid-cols-2 items-center justify-center mx-auto">
          {/* Image */}
          <Image
            src={BurgerImg1}
            alt="burguer"
            className="md:w-[600px] w-[150px] object-cover mx-auto"
          />
          {/* information */}
          <div className="">
            <h1 className="md:text-[40px] text-[25px] font-semibold text-yellow-400 ">
              Fast Food Burger
            </h1>
            <h1 className="md:text-[90px] text-[40px] md:leading-[5rem] leading-[2.5rem] text-white font-bold uppercase">
              Best
              <br />
              Burger
            </h1>
            <p className="mt-[0.5rem] text-white opacity-70 text-[12px] md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              quidem hic ipsam consequuntur iusto earum fuga velit suscipit
              atque dignissimos!
            </p>
            <button className="mt-[1rem] md:mt-[2rem] px-[15px] py-1 md:px-8 md:py-3  text-[12px] md:text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] md:w-[1.7rem] md:h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
