import React, { Suspense } from "react";
import Navbar from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import Container from "./_components/container";
import LiveChat from "./_components/livechat";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col h-full">
				<Suspense fallback={<SidebarSkeleton />}>
					<Sidebar />
				</Suspense>
				<Suspense fallback={<SidebarSkeleton />}>
					<LiveChat />
				</Suspense>
				<Container>{children}</Container>
			</div>
		</>
	);
};

export default BrowseLayout;
