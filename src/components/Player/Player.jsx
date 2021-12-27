/** @format */

import React from "react";
import classes from "./Player.module.css";

function Player({
	trackAuthor,
	trackName,
	audioLink,
	audioType,
	coverLink,
	audioRef,
}) {
	return (
		<div className={classes.player}>
			<img
				className={classes.songcover}
				src={coverLink}
				alt="song-cover"
			/>
			<div className={classes.playerContainer}>
				<h1>{trackAuthor + ": " + trackName}</h1>
				<audio controls ref={audioRef} className={classes.audioplayer}>
					<source src={audioLink} type={audioType} />
				</audio>
			</div>
		</div>
	);
}

export default Player;
