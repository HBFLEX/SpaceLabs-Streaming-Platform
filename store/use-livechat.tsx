import { create } from "zustand";

interface LiveChatStore {
	liveChatCollapsed: boolean;
	onLiveChatExpand: () => void;
	onLiveChatCollapse: () => void;
}

export const useLivechatStore = create<LiveChatStore>()((set) => ({
	liveChatCollapsed: false,
	onLiveChatExpand: () => set(() => ({ liveChatCollapsed: false })),
	onLiveChatCollapse: () => set(() => ({ liveChatCollapsed: true })),
}));
