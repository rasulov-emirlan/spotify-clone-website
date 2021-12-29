/** @format */

import {
	ArrowBack,
	ArrowBackIos,
	ArrowBackIosOutlined,
	ArrowBackOutlined,
	ArrowCircleLeftOutlined,
	ArrowCircleRightOutlined,
	ArrowForwardIos,
	ArrowForwardIosOutlined,
	PlayCircleOutline,
	PlayCircleOutlineRounded,
} from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import classes from "./Player.module.css";

function Player({
	trackAuthor,
	trackName,
	audioLink,
	audioType,
	coverLink,
	audioRef,
	isPlaying,
	setIsPlaying,
	currentPlayingTime,
	setCurrentPlayingTime,
}) {
	const timelineRef = useRef();
	const buttonPlay = (element) => {
		if (isPlaying) {
			element.current.pause();
			setIsPlaying(!isPlaying);
			return;
		}
		element.current.play();
		setIsPlaying(!isPlaying);
	};

	const changeCurrentTime = (audio, e) => {
		// 1600 is the width of our App component
		// you can change it in App.css
		if (!audioRef.current) {
			return;
		}
		let newtime =
			((e.clientX - Math.ceil((window.innerWidth - 1600) / 2)) / 1600) *
			audio.current.duration;
		console.log(newtime);
		console.log(audio.current.duration);
		if (newtime <= audio.current.duration && newtime > 0) {
			audio.current.pause();
			audio.current.currentTime = newtime;
			audio.current.play();
		}
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.addEventListener("timeupdate", (e) => {
				setCurrentPlayingTime(e.target.currentTime);
			});
		}
	}, []);

	return (
		<>
			<div
				ref={timelineRef}
				className={classes.timeline}
				onClick={(e) => changeCurrentTime(audioRef, e)}>
				<div
					className={classes.yellowLine}
					style={{
						width: `${
							audioRef.current
								? 100 *
								  (currentPlayingTime /
										audioRef.current.duration)
								: 0
						}%`,
					}}></div>
			</div>
			<div className={classes.player}>
				<img
					className={classes.songcover}
					src={coverLink}
					alt="song-cover"
				/>
				<div className={classes.playerContainer}>
					<h1>{trackAuthor + ": " + trackName}</h1>
					<div className={classes.controls}>
						<button className={classes.playButton}>
							<ArrowBackIosOutlined
								style={{
									height: "100%",
									width: "100%",
								}}
							/>
						</button>
						<button
							className={classes.playButton}
							onClick={() => buttonPlay(audioRef)}>
							<PlayCircleOutlineRounded
								style={{
									height: "100%",
									width: "100%",
								}}
							/>
						</button>
						<button className={classes.playButton}>
							<ArrowForwardIosOutlined
								style={{
									height: "100%",
									width: "100%",
								}}
							/>
						</button>
						<audio ref={audioRef}>
							<source src={audioLink} />
						</audio>
					</div>
				</div>
			</div>
		</>
	);
}

export default Player;
