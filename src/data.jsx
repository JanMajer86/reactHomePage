import {
	FaLinkedin,
	FaBluesky,
	FaFacebook,
	FaSquareInstagram,
	FaSquareGithub,
} from "react-icons/fa6";

export const navbarLinks = [
	{
		href: "/",
		text: "home",
	},
	{
		href: "/About",
		text: "about",
	},
	{
		href: "/Projects",
		text: "projects",
	},
	{ href: "#", text: "contact", special: true },
];

export const socialLinks = [
	{ href: "#", icon: <FaLinkedin /> },
	{ href: "#", icon: <FaSquareGithub /> },
	{ href: "#", icon: <FaBluesky /> },
	{ href: "#", icon: <FaFacebook /> },
	{ href: "#", icon: <FaSquareInstagram /> },
];
