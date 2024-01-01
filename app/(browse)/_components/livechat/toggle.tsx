"use client";
import React, { useState } from "react";
import { useSidebarStore } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine, Users } from "lucide-react";
import Hint from "@/components/Hint";

 
import { useLivechatStore } from "@/store/use-livechat";
import LiveTextField from "./input";
import Header from "./Header";
import MessageSection from "./MessageSection";

const ToggleLiveChat = () => {
	const { liveChatCollapsed, onLiveChatExpand, onLiveChatCollapse } =
		useLivechatStore((state) => state);

	const label = liveChatCollapsed ? "Expand" : "Collapse";

	return (
		<>
			{!liveChatCollapsed && (
				<div className="w-full flex flex-col mt-4">
					{/* live chat header */}
					<Header />
					{/* message section */}
					<MessageSection />
					{/* live chat text field */}
					<LiveTextField />
				</div>
			)}
			{liveChatCollapsed && (
				<div className="hidden lg:flex flex-col items-center justfiy-center">
					<Hint label={label} side="left" asChild>
						<Button
							variant="ghost"
							className="hover:bg-transparent"
							onClick={onLiveChatExpand}
						>
							<ArrowLeftFromLine className="h-4 text-white" />
						</Button>
					</Hint>
				</div>
			)}
		</>
	);
};

export default ToggleLiveChat;
