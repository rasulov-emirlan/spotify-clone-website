/** @format */

import { useState, useEffect } from "react";
import { getSongs } from "./api/songs";
import "./App.css";

import Player from "./components/Player/Player";

function App() {
	const [songs, setSongs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		const { data } = await getSongs(0, 100);
		setSongs(data.data);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log(songs);
	}, [songs]);
	if (isLoading) {
		return (
			<>
				<h1>Loading songs</h1>
			</>
		);
	}
	return (
		<div className="App">
			<Player
				trackAuthor={songs[0].author.username}
				trackName={songs[0].name}
				audioLink={`https://docs.google.com/uc?export=download&id=${songs[0].url}`}
				audioType="audio/mpeg"
				coverLink={`https://docs.google.com/uc?export=download&id=${songs[0].cover_url}`}
			/>
		</div>
	);
}

export default App;
