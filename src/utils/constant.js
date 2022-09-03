import React from "react";
import { BiCodeBlock, BiMusic, BiPodcast, BiMoviePlay, BiHome, BiVideo, BiNews, BiTrendingUp } from "react-icons/bi";
import {
	MdOutlineSchool,
	MdOutlineLiveTv,
	MdOutlineSportsSoccer,
	MdCheckroom,
	MdFaceRetouchingNatural,
	MdOutlineTheaterComedy,
	MdDeveloperMode,
	MdHotelClass,
	MdComputer,
} from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { IoIosFitness } from "react-icons/io";
import { FaDog } from "react-icons/fa";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
	{ name: "Mới nhất", icon: <BiHome /> },
	{ name: "Nổi bật", icon: <BiTrendingUp /> },
	{ name: "Tin tức", icon: <BiNews /> },
	{ name: "Music", icon: <BiMusic /> },
	{ name: "Kpop", icon: <MdHotelClass /> },
	{ name: "Learning", icon: <MdOutlineSchool /> },
	{ name: "Máy tính", icon: <MdComputer /> },
	{ name: "Phim", icon: <BiMoviePlay /> },
	{ name: "4K video", icon: <BiVideo /> },
	{ name: "Trò chơi", icon: <TbDeviceGamepad2 /> },
	{ name: "Trực tiếp", icon: <MdOutlineLiveTv /> },
	{ name: "Bóng đá", icon: <MdOutlineSportsSoccer /> },
	{ name: "Thời trang", icon: <MdCheckroom /> },
	{ name: "Làm đẹp", icon: <MdFaceRetouchingNatural /> },
	{ name: "Thú cưng", icon: <FaDog /> },
	{ name: "Hài", icon: <MdOutlineTheaterComedy /> },
	{ name: "Gym", icon: <IoIosFitness /> },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle = "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture = "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
