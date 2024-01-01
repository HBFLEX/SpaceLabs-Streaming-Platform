import React from "react";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine, Users } from "lucide-react";

import Link from "next/link";
import { useLivechatStore } from "@/store/use-livechat";

export const Header = () => {
	const { liveChatCollapsed, onLiveChatExpand, onLiveChatCollapse } =
		useLivechatStore((state) => state);

	const label = liveChatCollapsed ? "Expand" : "Collapse";
	return (
		<div className="flex items-center justify-between">
			{/* collapse / expand icon */}
			<Hint label={label} side="left" asChild>
				<Button
					variant="ghost"
					className="h-auto ml-auto hover:bg-transparent ml-1"
					onClick={onLiveChatCollapse}
				>
					<ArrowRightFromLine className="h-4 text-white" />
				</Button>
			</Hint>
			{/* chat box title */}
			<p className="font-semibold text-white mr-2">Stream Chat </p>

			{/* community icon */}
			<Hint label="community" side="left" asChild>
				<Link href="/">
					<Users color="#ffffff" strokeWidth={1.5} size={25} className="mr-3" />
				</Link>
			</Hint>
		</div>
	);
};

export default Header;
