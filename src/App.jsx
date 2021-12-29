/** @format */

import { useState, useEffect, useRef } from "react";
import { getSongs, getSongsFromPlaylist } from "./api/songs";
import "./App.css";

import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";

function App() {
	const [currentSong, setCurrentSong] = useState(null);
	const [songs, setSongs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentPlaylist, setCurrentPlaylist] = useState(null);
	const [currentTime, setCurrentTime] = useState(0);

	let audioRef = useRef();

	const playlist = {
		name: "Chillls",
		coverURL: "18DbcQwjL4i7ZbV7Wj2rVVeufsT_KIrBE",
	};
	useEffect(async () => {
		const { data } = await getSongsFromPlaylist(1);
		setSongs(data.data);
		setCurrentSong(data.data[0]);
		setIsLoading(false);
	}, []);

	const changeTheSong = (song) => {
		console.log(song);
		setIsLoading(true);
		setCurrentSong(song);
		setIsLoading(false);
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.load();
			audioRef.current.play();
			setIsPlaying(true);
			setCurrentTime(0);
		}
	}, [currentSong]);

	if (isLoading) {
		return (
			<>
				<h1>Loading songs</h1>
			</>
		);
	}
	return (
		<div className="App">
			<Playlist
				songs={songs}
				playlist={playlist}
				changeTheSong={changeTheSong}
			/>
			<Player
				trackAuthor={currentSong.author.username}
				trackName={currentSong.name}
				audioType="audio/mpeg"
				audioRef={audioRef}
				audioLink={`https://docs.google.com/uc?export=download&id=${currentSong?.url}`}
				coverLink={`https://docs.google.com/uc?export=download&id=${currentSong?.cover_url}`}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentPlayingTime={currentTime}
				setCurrentPlayingTime={setCurrentTime}
			/>
		</div>
	);
}

export default App;
