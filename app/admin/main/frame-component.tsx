import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[223px] rounded-3xl [background:linear-gradient(98.5deg,_#593598,_#dfcff7)] shadow-[8px_8px_48px_8px_rgba(0,_0,_0,_0.08)] w-[842px] overflow-hidden flex flex-row items-start justify-between pt-[11px] pb-[39px] pr-4 pl-[38px] box-border max-w-full gap-[20px] z-[1] text-center text-base text-gray-200 font-poppins mq675:flex-wrap">
      <div className="w-[379px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[33px] max-w-full">
          <div className="w-[147px] relative whitespace-pre-wrap inline-block">
            December 7, 2023
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-13xl text-white">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi mq750:text-7xl">
              Welcome back, Admin!
            </h1>
            <div className="w-[344px] relative text-base text-gray-200 flex items-center justify-center max-w-full">
              Always stay updated in your ADMIN PORTAL
            </div>
          </div>
          <img
            className="w-[74.9px] h-[81px] absolute !m-[0] top-[-27px] right-[69.1px] object-contain"
            loading="lazy"
            alt=""
            src="/front-shapes@2x.png"
          />
        </div>
      </div>
      <div className="h-[68px] flex flex-row items-start justify-start relative">
        <img
          className="h-[165.8px] w-[165.8px] absolute !m-[0] bottom-[-117.8px] left-[-148px] object-contain"
          alt=""
          src="/objectother-12@2x.png"
        />
        <img
          className="h-[68px] w-[72px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/untitled3@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
