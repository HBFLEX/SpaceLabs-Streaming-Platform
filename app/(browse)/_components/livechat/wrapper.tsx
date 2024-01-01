"use client";
import React from "react";
import { useLivechatStore } from "@/store/use-livechat";
import { cn } from "@/lib/utils";

interface wrapperProps {
	children: React.ReactNode;
}

export const Wrapper = ({ children }: wrapperProps) => {
	const { liveChatCollapsed } = useLivechatStore((state) => state);
	return (
		<aside
			className={cn(
				"fixed right-0 flex flex-col w-[400px] h-full bg-gray-800 border-r border-[#333] z-40",
				liveChatCollapsed && "w-[20px] bg-transparent right-0"
			)}
		>
			{children}
		</aside>
	);
};

export default Wrapper;
