import { ChannelState } from "./storeTypes"

// Channel
export interface Channel {
	id: string
	name: string
}

export interface ChannelListProps {
	channels: ChannelState
	fetchChannels: () => void
}

// Room
export interface Room {
	id: string
	name: string
	channel_id: string
}

// Message
export interface SeenByUser {
	avatar: string
	username: string
}

export interface Message {
	id: string
	room_id: string
	sender_id: string
	sender_name: string
	sender_avatar: string
	seen_by: SeenByUser[]
	content: string
	timestamp: string
}

// Modal
export interface ModalProps {
	title: string
	handleClose: () => void
	show: boolean
	children: React.ReactNode
}

// ErrorBoundary
export interface ErrorBoundaryProps {
	children: React.ReactNode
}

export interface ErrorBoundaryState {
	hasError: boolean
}

// Carousel
export interface CarouselProps {
	imgSrc: string
}
