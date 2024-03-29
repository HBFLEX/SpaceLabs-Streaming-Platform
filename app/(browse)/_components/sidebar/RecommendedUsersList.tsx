"use client";
import { User } from "@prisma/client";
import { useSidebarStore } from "@/store/use-sidebar";

import React from "react";
import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedUsersListProps {
	data: (User & {
		stream: {isLive: boolean} | null,
	})[];
}

export const RecommendedUsersList = ({ data }: RecommendedUsersListProps) => {
	const { collapsed } = useSidebarStore((state) => state);
	const showRecommendedLbl = !collapsed && data.length > 0;

    return (
        <div>
            {
                showRecommendedLbl && (
                    <div className='ml-3 mt-3 mb-4'>
                        <p className='text-sm text-muted-foreground '>
                            Recommended
                        </p>
                    </div>
                )
            }

			{data.map((user) => (
				<UserItem
					username={user.username}
					imageUrl={user.imageUrl}
					isLive={user.stream?.isLive}
				/>
			))}
		</div>
	);
};

export const RecommendedUsersListSkeleton = () => {
	return (
		<ul className="px-2">
			{[...Array(5).map((_, i) => <UserItemSkeleton key={i} />)]}
		</ul>
	);
};
