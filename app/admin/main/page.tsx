"use client";
import Navbar from "@/app/Components/Navbar";
import type { NextPage } from "next";
import { useCallback } from "react";

const AdminDashboard: NextPage = () => {
	const onNavBarContainerClick = useCallback(() => {
		// Please sync "home-page" to the project
	}, []);

	const onSubnetworkContainerClick = useCallback(() => {
		// Please sync "home-page" to the project
	}, []);

	return (
		<div
			style={{ backgroundImage: "url('/assets/login-page.png')" }}
			className=" min-h-screen w-full bg-no-repeat bg-cover bg-fixed w-[1280p bg-black max-w-full overflow-hidden flex flex-col items-start justify-start pt-[5.400000000000091px] px-[106px] pb-[60px] box-border relative gap-[47.90000000000009px] tracking-[normal] text-left text-[20px] text-white font-outfit mq750:gap-[24px_47.9px] mq750:pl-[53px] mq750:pr-[53px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border"
		>
			<div className="w-[1985px] h-[1404px] absolute !m-[0] top-[-507px] left-[-365px] flex items-center justify-center z-[0]">
				<img
					className="w-full h-full object-contain absolute left-[0px] top-[29px] [transform:scale(1.041)]"
					alt=""
					src="/assets/background-style--elipse.svg"
				/>
			</div>
			<div className="flex flex-row items-start justify-start py-0 px-[45px]">
				<div
					className="flex flex-row items-start justify-start cursor-pointer z-[1]"
					onClick={onNavBarContainerClick}
				>
					<Navbar isHomePage={false} isLoginPage={false} />
				</div>
			</div>
			<div className="self-stretch rounded-40xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.2),_rgba(204,_88,_84,_0.02)_77.08%,_rgba(179,_121,_223,_0.2))] [backdrop-filter:blur(80px)] flex flex-row items-start justify-start gap-[23px] max-w-full z-[1] text-center text-base text-gray-100 font-poppins">
				<div className="self-stretch w-[1065px] relative rounded-40xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.2),_rgba(204,_88,_84,_0.02)_77.08%,_rgba(179,_121,_223,_0.2))] [backdrop-filter:blur(80px)] hidden max-w-full" />
				<div className="h-[834px] w-[200px] rounded-3xl [background:linear-gradient(0deg,_#925fe2,_rgba(146,_95,_226,_0),_#e2d4f7)] overflow-hidden shrink-0 flex flex-col items-start justify-start py-12 px-[33.5px] box-border gap-[48px] z-[1] mq750:hidden mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[31px] mq1050:pb-[31px] mq1050:box-border">
					<div className="h-32 flex flex-row items-start justify-start py-0 pr-[3px] pl-[1.5px] box-border">
						<div className="self-stretch rounded-13xl [background:linear-gradient(180deg,_#925fe2,_#7042c0)] flex flex-row items-start justify-start pt-[35px] px-[33px] pb-[35.30000000000018px] gap-[13.333333969116211px]">
							<div className="h-32 w-32 relative rounded-13xl [background:linear-gradient(180deg,_#925fe2,_#7042c0)] hidden" />
							<img
								className="h-[57.7px] w-[61.3px] relative overflow-hidden shrink-0 z-[1]"
								loading="lazy"
								alt=""
								src="/assets/box-outline-24px.svg"
							/>
						</div>
					</div>
					<div className="self-stretch h-6 flex flex-row items-start justify-start gap-[12px]">
						<img
							className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
							loading="lazy"
							alt=""
							src="/assets/pencil.svg"
						/>
						<div className="flex-1 relative inline-block min-w-[96px]">
							Registration
						</div>
					</div>
					<div className="w-[126px] flex-1 flex flex-col items-start justify-start gap-[48px]">
						<div className="self-stretch h-6 flex flex-row items-start justify-start gap-[12px]">
							<img
								className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
								loading="lazy"
								alt=""
								src="/assets/dashboard.svg"
							/>
							<div className="flex-1 relative inline-block min-w-[90px]">
								Dashboard
							</div>
						</div>
						<div className="w-[76px] h-6 flex flex-row items-start justify-start gap-[12px] text-white">
							<img
								className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
								loading="lazy"
								alt=""
								src="/assets/documentx.svg"
							/>
							<b className="flex-1 relative inline-block min-w-[40px]">{`Drop `}</b>
						</div>
					</div>
					<div className="w-[108px] h-6 flex flex-row items-start justify-start py-0 pr-2 pl-[8.5px] box-border text-gray-200">
						<div
							className="self-stretch flex-1 flex flex-row items-start justify-start gap-[12px] cursor-pointer"
							onClick={onSubnetworkContainerClick}
						>
							<img
								className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
								loading="lazy"
								alt=""
								src="/assets/logout.svg"
							/>
							<div className="flex-1 relative inline-block min-w-[55px]">
								Logout
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-end justify-start gap-[75px] max-w-[calc(100%_-_223px)] text-mini text-black mq750:max-w-full mq450:gap-[19px_75px] mq1050:gap-[37px_75px]">
					<div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
						<div className="h-[196px] w-[842px] rounded-3xl [background:linear-gradient(98.5deg,_#593598,_#dfcff7)] shadow-[8px_8px_48px_8px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border relative gap-[153px] max-w-full z-[1] lg:gap-[76px_153px] mq750:h-auto mq750:gap-[38px_153px] mq450:gap-[19px_153px]">
							<div className="w-[358px] h-[322px] absolute !m-[0] right-[-158px] bottom-[-5839px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(196,_86,_71,_0.45),_rgba(210,_90,_99,_0))]" />
							<div className="w-[678px] flex flex-row items-start justify-start pt-0 px-[38px] pb-[2881px] box-border max-w-full shrink-0 text-base text-gray-200 lg:pb-[1217px] lg:box-border mq750:pb-[791px] mq750:box-border">
								<div className="w-[872px] flex flex-col items-end justify-start gap-[47px] shrink-0 [debug_commit:f6aba90] mq450:gap-[23px_47px]">
									<div className="self-stretch flex flex-row items-start justify-start max-w-full">
										<div className="w-[788px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
											<div className="w-[379px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full">
												<div className="self-stretch flex flex-col items-start justify-start relative gap-[33px] max-w-full mq450:gap-[16px_33px]">
													<div className="w-[147px] relative whitespace-pre-wrap inline-block">
														December 7, 2023
													</div>
													<div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-[32px] text-white">
														<h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[19px] mq1050:text-[26px]">
															Welcome back, Admin!
														</h1>
														<div className="w-[335px] relative text-base text-gray-200 flex items-center justify-center max-w-full">
															Always stay updated in your admin portal
														</div>
													</div>
													<img
														className="w-[74.9px] h-[81px] absolute !m-[0] top-[-27px] right-[69.1px] object-contain"
														loading="lazy"
														alt=""
														src="/assets/front-shapes@2x.png"
													/>
												</div>
											</div>
											<div className="h-[68px] flex flex-row items-start justify-start relative">
												<img
													className="h-[165.8px] w-[165.8px] absolute !m-[0] bottom-[-117.8px] left-[-148px] object-contain"
													alt=""
													src="/assets/objectother-12@2x.png"
												/>
												<img
													className="h-[68px] w-[72px] relative object-cover z-[1]"
													loading="lazy"
													alt=""
													src="/assets/untitled3@2x.png"
												/>
											</div>
										</div>
									</div>
									<div className="w-[318px] h-[284px] flex flex-col items-end justify-start gap-[32px] text-left text-mini-3 text-darkgray mq450:gap-[16px_32px]">
										<div className="self-stretch h-[55px] flex flex-row items-start justify-end py-0 pr-px pl-[3px] box-border">
											<div className="self-stretch flex-1 flex flex-row items-start justify-start py-[17px] px-5 relative gap-[20.59999999999991px]">
												<img
													className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
													alt=""
													src="/assets/card@2x.png"
												/>
												<div className="h-[19.7px] flex flex-col items-start justify-start pt-[1.300000000000182px] px-0 pb-0 box-border">
													<img
														className="w-[17.4px] h-[18.4px] relative z-[1]"
														loading="lazy"
														alt=""
														src="/assets/vector.svg"
													/>
												</div>
												<div className="self-stretch w-[103px] relative font-medium inline-block z-[1]">{`Email Address `}</div>
											</div>
										</div>
										<div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
											<div className="w-[70px] h-[21px] relative font-medium inline-block">
												Password
											</div>
											<div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-px text-[11.3px]">
												<div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px]">
													<img
														className="self-stretch h-[55px] relative max-w-full overflow-hidden shrink-0 z-[1]"
														loading="lazy"
														alt=""
														src="/assets/card-1.svg"
													/>
													<div className="self-stretch h-[17px] flex flex-row items-start justify-end py-0 px-px box-border">
														<div className="self-stretch w-[101px] relative font-medium inline-block z-[1]">
															Forgot Password?
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0">
											<button className="cursor-pointer [border:none] pt-[11px] px-5 pb-3 bg-[transparent] h-[50px] flex-1 rounded-mini [background:linear-gradient(90.3deg,_#9c3fe4,_#c65647)] flex flex-row items-start justify-center box-border whitespace-nowrap z-[1]">
												<div className="h-[50px] w-[314px] relative rounded-mini [background:linear-gradient(90.3deg,_#9c3fe4,_#c65647)] hidden" />
												<div className="self-stretch w-[61px] relative text-mid-9 font-medium font-poppins text-white text-left inline-block z-[1]">
													Sign in
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[575px] rounded-t-mini rounded-b-none bg-chocolate-100 overflow-hidden hidden flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] z-[2]">
								<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start min-w-[187px] min-h-[47px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="h-[19px] flex-1 relative leading-[130%] font-semibold inline-block">
											Assessments
										</div>
									</div>
								</div>
								<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start min-w-[187px] min-h-[47px] border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
									<div className="self-stretch rounded-tl-none rounded-tr-16xl rounded-b-none overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="h-[19px] flex-1 relative leading-[130%] font-semibold inline-block">
											Grades
										</div>
									</div>
								</div>
							</div>
							<div className="w-[575px] rounded-t-mini rounded-b-none bg-chocolate-100 overflow-hidden hidden flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] z-[3]">
								<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start min-w-[187px] min-h-[47px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="h-[19px] flex-1 relative leading-[130%] font-semibold inline-block">
											Assessments
										</div>
									</div>
								</div>
								<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start min-w-[187px] min-h-[47px] border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
									<div className="self-stretch rounded-tl-none rounded-tr-16xl rounded-b-none overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="h-[19px] flex-1 relative leading-[130%] font-semibold inline-block">
											Grades
										</div>
									</div>
								</div>
							</div>
							<div className="w-[705px] flex flex-row items-start justify-start pt-0 px-[65px] pb-[696.7px] box-border max-w-full shrink-0 text-xs text-white mq750:pl-8 mq750:pr-8 mq750:box-border mq450:pb-[294px] mq450:box-border mq1050:pb-[453px] mq1050:box-border">
								<div className="flex-1 flex flex-col items-end justify-start shrink-0 [debug_commit:f6aba90]">
									<div className="self-stretch rounded-t-mini rounded-b-none bg-orchid overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] z-[1] text-mini text-black">
										<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
											<div className="self-stretch h-[39px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%] font-semibold">
													Assessments
												</div>
											</div>
										</div>
										<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 min-w-[187px] border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
											<div className="self-stretch h-[39px] rounded-tl-none rounded-tr-16xl rounded-b-none overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%] font-semibold">
													Grades
												</div>
											</div>
										</div>
									</div>
									<div className="self-stretch bg-gray-400 overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] border-[1px] border-solid border-chocolate-100">
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													Quiz
												</div>
											</div>
										</div>
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] text-black font-inter border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													<span className="whitespace-pre-wrap">{`  `}</span>
													<b className="text-white">10 / 10</b>
												</div>
											</div>
										</div>
									</div>
									<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] z-[1] border-[1px] border-solid border-chocolate-100">
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													Lab
												</div>
											</div>
										</div>
										<div className="flex-1 bg-midnightblue-100 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-coral border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<b className="self-stretch flex-1 relative leading-[130%]">
													10 / 10
												</b>
											</div>
										</div>
									</div>
									<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] z-[2] border-[1px] border-solid border-chocolate-100">
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													{" "}
													Lab Test
												</div>
											</div>
										</div>
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<b className="self-stretch flex-1 relative leading-[130%]">
													15 / 15
												</b>
											</div>
										</div>
									</div>
									<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] z-[3] border-[1px] border-solid border-chocolate-100">
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													Group Assignment
												</div>
											</div>
										</div>
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<b className="self-stretch flex-1 relative leading-[130%]">
													9 / 10
												</b>
											</div>
										</div>
									</div>
									<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] z-[4] border-[1px] border-solid border-chocolate-100">
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													Midterm Test
												</div>
											</div>
										</div>
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<b className="self-stretch flex-1 relative leading-[130%]">
													13 / 15
												</b>
											</div>
										</div>
									</div>
									<div className="self-stretch rounded-t-none rounded-b-mini bg-gray-400 overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] z-[5] border-[1px] border-solid border-chocolate-100">
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<div className="self-stretch flex-1 relative leading-[130%]">
													{" "}
													Project
												</div>
											</div>
										</div>
										<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
											<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
												<b className="self-stretch flex-1 relative leading-[130%]">
													40 / 40
												</b>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[667px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full shrink-0 text-xs text-white">
								<div className="w-[924px] flex flex-col items-end justify-start gap-[60px] shrink-0 [debug_commit:f6aba90] mq1050:gap-[30px_60px]">
									<div className="self-stretch h-[685.3px] relative">
										<img
											className="absolute top-[288.3px] left-[691px] w-[239px] h-[397px]"
											alt=""
											src="/assets/ellipse-5.svg"
										/>
										<img
											className="absolute top-[0px] left-[0px] w-[397px] h-[397px]"
											alt=""
											src="/assets/ellipse-4.svg"
										/>
										<div className="absolute top-[72.3px] left-[63px] rounded-40xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.2),_rgba(204,_88,_84,_0.02)_77.08%,_rgba(179,_121,_223,_0.2))] [backdrop-filter:blur(80px)] w-[885px] h-[582px] z-[1]" />
									</div>
									<div className="w-[861px] flex flex-col items-end justify-start gap-[91px] max-w-full mq450:gap-[23px_91px] mq1050:gap-[45px_91px]">
										<div className="self-stretch flex flex-row items-end justify-center pt-[148px] pb-[129px] pr-5 pl-[46px] box-border relative max-w-full mq750:pl-[23px] mq750:pt-24 mq750:pb-[84px] mq750:box-border">
											<div className="h-full w-[885px] absolute !m-[0] top-[0px] right-[-24px] bottom-[0px]">
												<img
													className="absolute top-[16px] left-[20.8px] w-[234.2px] h-[306px]"
													alt=""
													src="/assets/ellipse-6.svg"
												/>
												<div className="absolute top-[0px] left-[0px] rounded-40xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.2),_rgba(204,_88,_84,_0.02)_77.08%,_rgba(179,_121,_223,_0.2))] [backdrop-filter:blur(80px)] w-full h-full z-[1]" />
											</div>
											<div className="w-[575px] flex flex-col items-start justify-start min-h-[305px] max-w-full text-mini text-black">
												<div className="self-stretch rounded-t-mini rounded-b-none bg-chocolate-100 overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[5]">
													<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-[39px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%] font-semibold">
																Assessments
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 min-w-[187px] border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
														<div className="self-stretch h-[39px] rounded-tl-none rounded-tr-16xl rounded-b-none overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%] font-semibold">
																Grades
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] flex flex-col items-start justify-start min-h-[258px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-gray-400 overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[2] border-[1px] border-solid border-chocolate-100">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Quiz
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] text-black font-inter border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																<span className="whitespace-pre-wrap">{`  `}</span>
																<b className="text-white">10</b>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] flex flex-col items-start justify-start min-h-[215px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[3] border-[1px] border-solid border-chocolate-100">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Lab
															</div>
														</div>
													</div>
													<div className="flex-1 bg-midnightblue-100 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-coral border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																10
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] flex flex-col items-start justify-start min-h-[172px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[4] border-[1px] border-solid border-chocolate-100">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																{" "}
																Lab Test
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																15
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] flex flex-col items-start justify-start min-h-[129px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[5] border-[1px] border-solid border-chocolate-100">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Group Assignment
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																10
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] flex flex-col items-start justify-start min-h-[86px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[6] border-[1px] border-solid border-chocolate-100">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Midterm Test
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]" />
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] rounded-t-none rounded-b-mini bg-gray-400 box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start [debug_commit:f6aba90] z-[7] ml-[-574px] border-[1px] border-solid border-chocolate-100">
												<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
													<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
														<div className="self-stretch flex-1 relative leading-[130%]">
															{" "}
															Project
														</div>
													</div>
												</div>
												<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-chocolate-100 border-l-[1px]">
													<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
														<b className="self-stretch flex-1 relative leading-[130%]" />
													</div>
												</div>
											</div>
										</div>
										<div className="w-[855px] overflow-x-auto flex flex-row items-end justify-center pt-[148px] pb-[129px] pr-5 pl-10 box-border relative max-w-full mq750:pt-24 mq750:pb-[84px] mq750:box-border">
											<div className="h-full w-[885px] absolute !m-[0] top-[0px] right-[-30px] bottom-[0px] shrink-0">
												<img
													className="absolute top-[176.5px] left-[8.9px] w-[296.4px] h-[397px]"
													alt=""
													src="/assets/ellipse-8.svg"
												/>
												<img
													className="absolute top-[0px] left-[482px] w-[397px] h-[288.6px]"
													alt=""
													src="/assets/ellipse-7.svg"
												/>
												<div className="absolute top-[0px] left-[0px] rounded-40xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.2),_rgba(204,_88,_84,_0.02)_77.08%,_rgba(179,_121,_223,_0.2))] [backdrop-filter:blur(80px)] w-full h-full z-[1]" />
											</div>
											<div className="w-[575px] shrink-0 flex flex-col items-start justify-start min-h-[305px] max-w-full text-mini text-black">
												<div className="self-stretch rounded-t-mini rounded-b-none bg-forestgreen overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[3]">
													<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-[39px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%] font-semibold">
																Assessments
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-300 box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 min-w-[187px] border-t-[1px] border-solid border-forestgreen border-l-[1px]">
														<div className="self-stretch h-[39px] rounded-tl-none rounded-tr-16xl rounded-b-none overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%] font-semibold">
																Grades
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] shrink-0 flex flex-col items-start justify-start min-h-[258px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-gray-400 overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[2] border-[1px] border-solid border-forestgreen">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-chocolate-200 border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Quiz
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] text-black font-inter border-t-[1px] border-solid border-forestgreen border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																<span className="whitespace-pre-wrap">{`  `}</span>
																<b className="text-white">10</b>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] shrink-0 flex flex-col items-start justify-start min-h-[215px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[3] border-[1px] border-solid border-forestgreen">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Lab
															</div>
														</div>
													</div>
													<div className="flex-1 bg-midnightblue-100 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-forestgreen border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																10
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] shrink-0 flex flex-col items-start justify-start min-h-[172px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[4] border-[1px] border-solid border-forestgreen">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																{" "}
																Lab Test
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-forestgreen border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																15
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] shrink-0 flex flex-col items-start justify-start min-h-[129px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[5] border-[1px] border-solid border-forestgreen">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Group Assignment
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-forestgreen border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																10
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] shrink-0 flex flex-col items-start justify-start min-h-[86px] max-w-full ml-[-574px]">
												<div className="self-stretch bg-red overflow-hidden flex flex-row flex-wrap items-start justify-start shrink-0 [debug_commit:f6aba90] z-[6] border-[1px] border-solid border-forestgreen">
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<div className="self-stretch flex-1 relative leading-[130%]">
																Midterm Test
															</div>
														</div>
													</div>
													<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-forestgreen border-l-[1px]">
														<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
															<b className="self-stretch flex-1 relative leading-[130%]">
																15
															</b>
														</div>
													</div>
												</div>
											</div>
											<div className="w-[574px] rounded-t-none rounded-b-mini bg-gray-400 box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start [debug_commit:f6aba90] z-[7] ml-[-574px] border-[1px] border-solid border-forestgreen">
												<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] border-t-[1px] border-solid border-dimgray border-l-[1px]">
													<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
														<div className="self-stretch flex-1 relative leading-[130%]">
															{" "}
															Project
														</div>
													</div>
												</div>
												<div className="flex-1 bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] min-w-[187px] font-inter border-t-[1px] border-solid border-forestgreen border-l-[1px]">
													<div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border">
														<b className="self-stretch flex-1 relative leading-[130%]">
															40
														</b>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[397px] h-[397px] absolute !m-[0] right-[-365px] bottom-[-541px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.58),_rgba(54,_0,_96,_0))]" />
							<div className="w-[397px] h-[397px] absolute !m-[0] right-[189px] bottom-[-545px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(196,_86,_71,_0.58),_rgba(210,_90,_99,_0))]" />
							<img
								className="w-[118.4px] h-[97.5px] absolute !m-[0] top-[18px] right-[-182.4px] object-contain"
								loading="lazy"
								alt=""
								src="/assets/front-shapes-1@2x.png"
							/>
							<div className="w-[1097px] h-[834px] relative rounded-40xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(179,_121,_223,_0.2),_rgba(204,_88,_84,_0.02)_77.08%,_rgba(179,_121,_223,_0.2))] [backdrop-filter:blur(80px)] shrink-0 [debug_commit:f6aba90] max-w-[130%]" />
						</div>
					</div>
					<div className="w-[817px] flex flex-col items-start justify-start gap-[54px] max-w-full text-left text-xs text-white font-inter mq450:gap-[27px_54px]">
						<div className="self-stretch h-[396px] rounded-[10px] bg-darkslategray box-border overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1] border-[1px] border-solid border-dimgray">
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-300 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] font-semibold">
											№
										</div>
									</div>
								</div>
								<div className="w-40 bg-gray-300 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] font-semibold">
											Student ID
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-300 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] font-semibold">
											Name
										</div>
									</div>
								</div>
								<button className="cursor-pointer [border:none] p-0 bg-gray-300 w-[76.8px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative text-xs leading-[16px] font-semibold font-inter text-white text-left">
											Status
										</div>
									</div>
								</button>
								<div className="self-stretch w-px bg-gray-300 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] font-semibold inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-300 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] font-semibold">
											CGPA
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-300 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] font-semibold">
											GPA
										</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-300 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] font-semibold">
											Email
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">1</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW01023456
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Emily Johnson
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">2.99</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">2.93</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] whitespace-nowrap">
											emilyj@gmail.com
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">2</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW01034567
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Daniel Martinez
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">2.91</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">2.84</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] whitespace-nowrap">
											danielm@gmail.com
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">3</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW01045678
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Sarah Davis
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">3.78</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">3.88</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] whitespace-nowrap">
											sarahd@gmail.com
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">4</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW01056789
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Michael Wilson
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">3.82</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">4.00</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] whitespace-nowrap">
											michaelw@gmail.com
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">5</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW01067890
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											John Doe
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">3.28</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">3.79</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px] whitespace-nowrap">
											johnd@gmail.com
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">6</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW00000000
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Unknown
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">7</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW00000000
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Unknown
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">9</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW00000000
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Unknown
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">10</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW00000000
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Unknown
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
							</div>
							<div className="self-stretch flex-1 bg-gray-400 overflow-x-auto flex flex-row items-start justify-start">
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">11</div>
									</div>
								</div>
								<div className="w-40 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											SW00000000
										</div>
									</div>
								</div>
								<div className="w-36 bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">
											Unknown
										</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">Active</div>
									</div>
								</div>
								<div className="self-stretch w-px bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-3">
										<div className="self-stretch w-px relative leading-[130%] inline-block whitespace-nowrap" />
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[76.8px] bg-gray-400 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
								<div className="w-[205px] bg-gray-400 box-border shrink-0 flex flex-col items-start justify-start z-[1] border-t-[1px] border-solid border-dimgray border-l-[1px]">
									<div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
										<div className="flex-1 relative leading-[16px]">n/a</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-[788px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
							<div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
								<button className="cursor-pointer pt-[10.5px] pb-[12.5px] pr-[52px] pl-[53px] bg-[transparent] rounded-mini flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
									<div className="w-[41px] relative text-lg leading-[20px] font-other-18-20-r text-white text-center inline-block min-w-[41px]">
										Back
									</div>
								</button>
								<button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[42px] w-[148px] relative">
									<img
										className="absolute top-[0px] left-[0px] rounded-mini w-[148px] h-[42px] z-[1]"
										alt=""
										src="/assets/rectangle-8.svg"
									/>
									<div className="absolute top-[7px] left-[50px] text-mid-9 font-medium font-poppins text-white text-left inline-block min-w-[47px] z-[2]">
										Done
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
