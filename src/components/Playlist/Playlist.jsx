/** @format */

import React from "react";
import classes from "./Playlist.module.css";
import Song from "./Song";

const Playlist = ({ songs, changeTheSong }) => {
	if (songs == null) {
		return (
			<>
				<h1>No data loaded</h1>
			</>
		);
	}
	return (
		<div className={classes.playlist}>
			{songs.map((obj, i) => (
				<Song key={i} changeTheSong={changeTheSong} song={obj} />
			))}
		</div>
	);
};

export default Playlist;
