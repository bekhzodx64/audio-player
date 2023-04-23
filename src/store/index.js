import { create } from 'zustand'

const useAudioStore = create((set, get) => ({
	player: {
		playerRef: null,
		isPlaying: false,
		loop: false,
		volume: 1,
		duration: 0,
		currentTime: 0,
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
		setVolume: (volume) => {
			set((state) => ({
				player: { ...state.player, volume },
			}))
		},
	},
	playlist: {
		isOpen: false,
		togglePlaylist: () => {
			set((state) => ({
				playlist: { ...state.playlist, isOpen: !state.playlist.isOpen },
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
