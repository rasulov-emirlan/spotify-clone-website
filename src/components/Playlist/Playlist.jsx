/** @format */

import { PlayCircleOutline } from "@mui/icons-material";
import React from "react";
import classes from "./Playlist.module.css";
import Song from "./Song";

const Playlist = ({ songs, changeTheSong, playlist }) => {
	if (songs == null) {
		return (
			<>
				<h1>No data loaded</h1>
			</>
		);
	}
	return (
		<div className={classes.playlist}>
			<div className={classes.playlistHeader}>
				<img src={`https://docs.google.com/uc?export=download&id=${playlist.coverURL}`} alt="cover-picture" />
				<div className={classes.playlistHeaderNames}>
					<h2>{playlist.name}</h2>
					<button className={classes.playlistPlayButton} onClick={() => changeTheSong(songs[0])}>
						<PlayCircleOutline
						style={{width: "100px", height: "100%"}}/>
						<h2>Play</h2>
					</button>
				</div>
			</div>
			{songs.map((obj, i) => (
				<Song key={i} changeTheSong={changeTheSong} song={obj} />
			))}
		</div>
	);
};

export default Playlist;
