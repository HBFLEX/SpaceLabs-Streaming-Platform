import React from "react";

export const MessageSection = () => {
	// just for testing purpose
	const chatMessages = [
		{
			time: "9:26",
			user: "shadow",
			content:
				"guys has anyone unlocked the gold camo yet? dang they are so hard tp get",
		},
		{
			time: "9:30",
			user: "hbflex",
			content:
				"yeh bro, i have unlocked it. it took me 2 days to get it. it was so hard",
		},
		{
			time: "9:26",
			user: "shadow",
			content:
				"guys has anyone unlocked the gold camo yet? dang they are so hard tp get",
		},
		{
			time: "9:30",
			user: "hbflex",
			content:
				"yeh bro, i have unlocked it. it took me 2 days to get it. it was so hard",
		},
		{
			time: "9:26",
			user: "shadow",
			content:
				"guys has anyone unlocked the gold camo yet? dang they are so hard tp get",
		},
		{
			time: "9:30",
			user: "hbflex",
			content:
				"yeh bro, i have unlocked it. it took me 2 days to get it. it was so hard",
		},
		{
			time: "9:26",
			user: "shadow",
			content:
				"guys has anyone unlocked the gold camo yet? dang they are so hard tp get",
		},
		{
			time: "9:30",
			user: "hbflex",
			content:
				"yeh bro, i have unlocked it. it took me 2 days to get it. it was so hard",
		},
		{
			time: "9:26",
			user: "shadow",
			content:
				"guys has anyone unlocked the gold camo yet? dang they are so hard tp get",
		},
		{
			time: "9:30",
			user: "hbflex",
			content:
				"yeh bro, i have unlocked it. it took me 2 days to get it. it was so hard",
		},
		{
			time: "9:26",
			user: "shadow",
			content:
				"guys has anyone unlocked the gold camo yet? dang they are so hard tp get",
		},
		{
			time: "9:30",
			user: "hbflex",
			content:
				"yeh bro, i have unlocked it. it took me 2 days to get it. it was so hard",
		},
	];

	// color pallette for the user names
	const colors = [
		"text-indigo-600",
		"text-indigo-400",
		"text-green-700",
		"text-yellow-700",
		"text-blue-700",
		"text-purple-700",
		"text-pink-700",
	];
	return (
		<div
			data-te-perfect-scrollbar-init
			data-te-suppress-scroll-x="true"
			className="flex-1 overflow-y-auto px-4 max-h-[64%] scrollbar  scrollbar-thin"
		>
			{chatMessages.map((message, index) => (
				<div key={index} className="mb-2 hover:bg-gray-700 p-2 rounded-md">
					{/* time stamp */}
					<span className="text-gray-300 mr-2">{message.time}</span>

					{/* username */}
					<span className={`font-semibold ${colors[index]}`}>
						{message.user}:
					</span>

					{/* message */}
					<span className="ml-2 text-indigo-200 font-light">
						{message.content}
					</span>
				</div>
			))}
		</div>
	);
};

export default MessageSection;
