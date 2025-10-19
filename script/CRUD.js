import { getToken } from "./getToken.js";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export function addTrack(name, image, artist, trackId, release_date, duration, link) {
    const key = `playlist_${currentUser.email}`;
    const track = { name, image, artist, trackId, release_date, duration, link };

    let playlist = JSON.parse(localStorage.getItem(key)) || [];

    const isExist = playlist.some(t => t.trackId === trackId);
    if (isExist) {
        alert("The song is already in the playlist!");
        return;
    }
    playlist.push(track);
    localStorage.setItem(key, JSON.stringify(playlist));
    alert("Song added to playlist!");

    if (window.location.pathname.includes("playlist.html")) {
        location.reload();
    }
}

export function deleteTrack(trackId) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const key = `playlist_${currentUser.email}`;

    let playlist = JSON.parse(localStorage.getItem(key)) || [];

    playlist = playlist.filter(track => track.trackId !== trackId);

    localStorage.setItem(key, JSON.stringify(playlist));

    alert("Song removed from playlist!");

    location.reload();
}