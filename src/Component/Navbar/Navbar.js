import React from "react";
import logo from "../../icons/logo.svg";
import home from "../../icons/home.svg";
import explore from "../../icons/explore.svg";
import notification from "../../icons/notification.svg";
import messages from "../../icons/messages.svg";
import bookmarks from "../../icons/bookmarks.svg";
import lists from "../../icons/lists.svg";
import profile from "../../icons/profile.svg";
import more from "../../icons/more.svg";
import Avatar from "../../icons/avatar.png";
import AvatarMenu from "../../icons/avatarMenu.svg";
import tweet from "../../icons/tweet.png";

const Navbar = () => {
	const navList = [
		{
			img: home,
			title: "Home",
		},
		{
			img: explore,
			title: "Explore",
		},
		{
			img: notification,
			title: "Notification",
		},
		{
			img: messages,
			title: "Messages",
		},
		{
			img: bookmarks,
			title: "Bookmarks",
		},
		{
			img: lists,
			title: "Lists",
		},
		{
			img: profile,
			title: "Profile",
		},
		{
			img: more,
			title: "More",
		},
	];
	return (
		<div className="md:w-1/12 lg:w-72 flex flex-col justify-between">
			<section className="hidden md:flex flex-col justify-between items-start w-full h-screen pt-10">
				<div>
					<a href="#" className="lg:w-14 lg:pl-4 grid place-content-center">
						<img src={logo} alt="" />
					</a>
					{navList.map(({ img, title }) => (
						<a
							href="#"
							className="w-14 h-14 pl-4 flex items-center justify-start gap-3 text-xl "
						>
							<img src={img} alt="" />
							<p className="md:hidden lg:block">{title}</p>
						</a>
					))}
					<button className="bg-dark-2 w-16 h-16 lg:w-56 lg:h-14 grid place-content-center rounded-full mt-10 font-bold text-lg">
						<p className="hidden lg:block">Tweet</p>
						<img src={tweet} className="lg:hidden" />
					</button>
				</div>
				<section className="flex justify-center lg:justify-between items-center lg:w-64">
					<div className="flex gap-2">
						<img src={Avatar} className="w-14 h-14 rounded-full" />
						<div className="hidden lg:block">
							<p className="font-bold text-lg">M Showkat</p>
							<p className="text-gray-500">@justshowkat</p>
						</div>
					</div>
					<div className="hidden lg:block">
						<img src={AvatarMenu} alt="" srcset="" />
					</div>
				</section>
			</section>
			<section className="absolute bottom-0 bg-dark-3 w-full">
				<div className="flex justify-around md:hidden h-14 m-2">
					{navList.slice(0, 4).map(({ img }) => (
						<a
							href="#"
							className="hover:bg-dark-4 h-14 w-14 grid place-content-center rounded-full"
						>
							<img src={img} alt="" />
						</a>
					))}
				</div>
			</section>
		</div>
	);
};

export default Navbar;
