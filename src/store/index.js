import { create } from 'zustand'

const useAudioStore = create(
	(set, get) => ({
		player: {
			isPlaying: false,
			volume: 1,
			togglePlay: () => {
				set((state) => ({
					player: { ...state.player, isPlaying: !state.player.isPlaying },
				}))
			},
		},
		tracks: {
			list: [],
			countTracks: () => {
				return get().tracks.list.length
			},
		},
		favorites: {
			list: [],
			addToFavorites: (track) => {
				set((state) => ({
					favorites: {
						...state.favorites,
						list: [...state.favorites.list, track],
					},
				}))
			},
			removeFromFavorites: (track) => {
				set((state) => ({
					favorites: {
						...state.favorites,
						list: state.favorites.list.filter((fav) => fav.id !== track.id),
					},
				}))
			},
			countFavorites() {
				return get().favorites.list.length
			},
		},
		actions: {},
	})

	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 }),
)

export default useAudioStore
