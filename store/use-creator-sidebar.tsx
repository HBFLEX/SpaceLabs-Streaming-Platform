import { create } from 'zustand'


interface CreatorSidebarStore{
    collapsed: boolean
    onExpand: () => void
    onCollapse: () => void
}


export const useCreatorSidebarStore = create<CreatorSidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: true })),
    onCollapse: () => set(() => ({ collapsed: true }))
}))