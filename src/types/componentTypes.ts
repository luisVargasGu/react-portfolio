export interface Channel {
	id: string
	name: string
}

export interface ChannelListProps {
	channels: Channel[]
	fetchChannels: () => void
}

export interface ButtonProps {
	label: string
	onClick: () => void
}

export interface SidebarProps {
	isOpen: boolean
	onClose: () => void
}
