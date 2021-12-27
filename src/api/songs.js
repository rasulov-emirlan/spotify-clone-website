/** @format */

import axios from "axios";
let url = "http://localhost:8080";

export const getSongs = (from, to) =>
	axios.get(`${url}/songs?from=${from}&to=${to}`);

export const getSongsFromPlaylist = (playlistID) =>
	axios.get(`${url}/playlists/${playlistID}`);
