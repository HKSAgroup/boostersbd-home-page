import React from "react";
import man from "../../assets/img/man.png";
import instaIcon from "../../assets/img/icon/instaIcon.png";
import fbIcon from "../../assets/img/icon/smallIcon.png";
import { BsCheck } from "react-icons/bs";
const Skills = () => {
  return (
    <div className="container grid lg:grid-cols-2 grid-cols-1  gap-24 py-10 my-10">
      <div className="space-y-4">
        <div className="h-[136px] w-full  bg-[url('/src/assets/img/man.png')] bg-cover bg-no-repeat ">
          <div
            className="h-full w-full rounded-[7px] flex items-center sm:gap-8 gap-3 sm:px-9 px-5 text-white"
            style={{ backgroundColor: "rgba(244, 167, 45, 0.9)" }}
          >
            <h1 className="xl:text-[39px] lg:text-[28px] text-[26px] font-evolventa font-bold  tracking-normal">
              6 years
            </h1>
            <p className=" text-lg font-arial font-semibold">
              In the advertising market
            </p>
          </div>
        </div>
        <div className="h-[136px] w-full  bg-[url('/src/assets/img/map.png')] bg-cover bg-no-repeat ">
          <div
            className="h-full w-full rounded-[7px] flex items-center sm:gap-8 gap-3 sm:px-9 px-5 text-white"
            style={{ background: "rgba(115, 82, 206, 0.9)" }}
          >
            <h1 className="xl:text-[39px] lg:text-[28px] text-3xl font-evolventa font-bold not-italic tracking-normal">
              3 000 +
            </h1>
            <p className=" text-lg font-arial font-semibold">
              Customers in the world
            </p>
          </div>
        </div>
        <div className="h-[136px] w-full  bg-[url('/src/assets/img/man2.png')] bg-cover bg-no-repeat ">
          <div
            className="h-full w-full rounded-[7px] flex items-center sm:gap-28 gap-5 sm:px-9 px-5 text-white"
            style={{ background: "rgba(49, 50, 47, 0.9)" }}
          >
            <h1 className="lg:text-[39px] text-3xl font-evolventa font-bold  tracking-normal">
              15
            </h1>
            <p className=" text-lg font-arial font-semibold">
              Certified advertising specialists
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase text-base font-arial mb-3">
          SAVE MONEY ON AD VERTISING
        </p>
        <h1 className="lg:text-4xl text-3xl font-evolventa font-bold not-italic">
          Pay through AdHand
        </h1>
        <p className="text-xl font-arial not-italic tracking-[0.01em] leading-[35px] mt-1">
          More people will see your ads thanks to the right settings, and <br />{" "}
          you will spend the same budget
        </p>
        <div className="flex gap-5 xl:py-16 lg:py-12 py-14">
          <div className="flex gap-2">
            <img src={instaIcon} alt="" />
            <p className="text-[17px] font-arial">Instagram</p>
          </div>
          <div className="flex gap-2">
            <img src={fbIcon} alt="" />
            <p>Instagram</p>
          </div>
        </div>

        <h1 className="text-xl font-evolventa not-italic font-bold tracking-[0.01em]">
          We can help to:
        </h1>
        <p className="flex items-center gap-[18px] mt-9">
          <BsCheck size={20} className="bg-[#FAD69C] h-5 w-5 rounded-full" />
          <span>Set up the first campaign</span>
        </p>
        <p className="flex items-center gap-[18px] mt-4">
          <BsCheck size={20} className="bg-[#FAD69C] h-5 w-5 rounded-full" />
          <span>Understand how to set up and run campaigns</span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
