import { create } from 'zustand'

import track1 from '../assets/tracks/track2.mp3'
import track9 from '../assets/tracks/track8.mp3'

const useAudioStore = create((set, get) => ({
	player: {
		playerRef: null,
		isPlaying: false,
		loop: false,
		volume: 1,
		duration: 0,
		currentTime: 0,
		autoplay: false,
		getPlayerRef: (audioRef) => {
			set((state) => ({
				player: { ...state.player, playerRef: audioRef.current },
			}))
		},
		getDuration: (duration) => {
			set((state) => ({
				player: { ...state.player, duration },
			}))
		},
		getCurrentTime: (currentTime) => {
			set((state) => ({
				player: { ...state.player, currentTime },
			}))
		},
		setCurrentTime: (currentTime) => {
			set((state) => ({
				player: { ...state.player, currentTime },
			}))
		},
		togglePlay: () => {
			set((state) => ({
				player: { ...state.player, isPlaying: !state.player.isPlaying },
			}))
		},
		toggleLoop: () => {
			set((state) => ({
				player: { ...state.player, loop: !state.player.loop },
			}))
		},
		toggleMute: () => {
			set((state) => ({
				player: { ...state.player, volume: state.player.volume === 0 ? 1 : 0 },
			}))
		},
		toggleAutoplay: () => {
			set((state) => ({
				player: { ...state.player, autoplay: !state.player.autoplay },
			}))
		},
		setVolume: (volume) => {
			set((state) => ({
				player: { ...state.player, volume },
			}))
		},
	},
	playlist: {
		isOpen: false,
		activeTrack: { id: 1, name: 'test', src: track1 },
		tracks: [
			{
				id: 1,
				name: 'test',
				src: track1,
			},
			{
				id: 2,
				name: 'test2',
				src: track9,
			},
		],
		togglePlaylist: () => {
			set((state) => ({
				playlist: { ...state.playlist, isOpen: !state.playlist.isOpen },
			}))
		},
		setActiveTrack: (track) => {
			set((state) => ({
				playlist: { ...state.playlist, activeTrack: track },
			}))
		},
	},
	// tracks: {
	// 	list: [],
	// 	countTracks: () => {
	// 		return get().tracks.list.length
	// 	},
	// },
	// favorites: {
	// 	list: [],
	// 	addToFavorites: (track) => {
	// 		set((state) => ({
	// 			favorites: {
	// 				...state.favorites,
	// 				list: [...state.favorites.list, track],
	// 			},
	// 		}))
	// 	},
	// 	removeFromFavorites: (track) => {
	// 		set((state) => ({
	// 			favorites: {
	// 				...state.favorites,
	// 				list: state.favorites.list.filter((fav) => fav.id !== track.id),
	// 			},
	// 		}))
	// 	},
	// 	countFavorites() {
	// 		return get().favorites.list.length
	// 	},
	// },
	// actions: {},
}))

export default useAudioStore
