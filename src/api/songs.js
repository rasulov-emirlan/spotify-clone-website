/** @format */

import axios from "axios";
let url = "http://localhost:8080";

import { playlist1 } from "./mocks";

export const getSongs = (from, to) => {
	// axios.get(`${url}/songs?from=${from}&to=${to}`)
	return playlist1;
};

export const getSongsFromPlaylist = (playlistID) => {
	// axios.get(`${url}/playlists/${playlistID}`)
	console.log(playlistID);
	return playlist1;
};
