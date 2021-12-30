/** @format */

import React from "react";
import classes from "./Playlist.module.css";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Song = ({ song, changeTheSong }) => {
	return (
		<div className={classes.song} onClick={() => changeTheSong(song)}>
			<button className={classes.playButton}>
				<PlayCircleIcon />
			</button>
			<img
				src={`https://docs.google.com/uc?export=download&id=${song?.cover_url}`}
				alt="cover-url"
			/>
			{song?.author?.username + " - " + song?.name}
		</div>
	);
};

export default Song;
