import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent1: NextPage = () => {
  const onDecemberContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCustomObjectContainerClick = useCallback(() => {
    // Please sync "home-page" to the project
  }, []);

  return (
    <div className="absolute top-[0px] left-[0px] rounded-3xl [background:linear-gradient(0deg,_#925fe2,_rgba(146,_95,_226,_0),_#e2d4f7)] w-[200px] h-[801px] overflow-hidden flex flex-col items-start justify-start pt-12 px-[30.5px] pb-[35px] box-border gap-[48px] z-[1] text-center text-base text-white font-poppins">
      <div className="h-32 flex flex-row items-start justify-start py-0 pr-1.5 pl-[4.5px] box-border">
        <div className="self-stretch rounded-13xl [background:linear-gradient(180deg,_#925fe2,_#7042c0)] flex flex-row items-start justify-start pt-[31.699999999999815px] px-[33px] pb-8 gap-[13.333333969116211px]">
          <div className="h-32 w-32 relative rounded-13xl [background:linear-gradient(180deg,_#925fe2,_#7042c0)] hidden" />
          <img
            className="h-[55.5px] w-[61.3px] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/box-outline-24px.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-6 flex flex-row items-start justify-start gap-[12px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/pencil.svg"
        />
        <b className="flex-1 relative inline-block min-w-[102px]">
          Registration
        </b>
      </div>
      <div className="w-[126px] flex-1 flex flex-col items-start justify-start gap-[48px] text-gray-100">
        <div
          className="self-stretch h-6 flex flex-row items-start justify-start gap-[12px] cursor-pointer"
          onClick={onDecemberContainerClick}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/dashboard.svg"
          />
          <div className="flex-1 relative inline-block min-w-[90px]">
            Dashboard
          </div>
        </div>
        <div className="w-[75px] h-6 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/documentx.svg"
          />
          <div className="flex-1 relative inline-block min-w-[39px]">{`Drop `}</div>
        </div>
      </div>
      <div className="w-[118px] h-6 flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.5px] box-border text-gray-200">
        <div
          className="self-stretch flex-1 flex flex-row items-start justify-start gap-[12px] cursor-pointer"
          onClick={onCustomObjectContainerClick}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/logout.svg"
          />
          <div className="flex-1 relative inline-block min-w-[55px]">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
