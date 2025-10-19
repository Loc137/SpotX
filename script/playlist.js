import { getToken } from "./getToken.js";
import { formatDuration, showModalDetails_track, showModalDetails_artist, closeModal } from "./show_modal.js";
import { auth, db } from "./firebase-config.js";
import { doc, setDoc, getDocs, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


window.showModalDetails_track = showModalDetails_track
window.showModalDetails_artist = showModalDetails_artist
window.closeModal = closeModal
window.addTrack = addTrack
window.deleteTrack = deleteTrack

//show username

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const nameUserElement = document.querySelector(".name_user");

if (!currentUser) {
  location.href = "login.html";
} else {
  nameUserElement.textContent = currentUser.username;
}

export function showPlaylist() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return;

  const key = `playlist_${currentUser.email}`;
  const playlist = JSON.parse(localStorage.getItem(key)) || [];

  const song_wrapper = document.querySelector(".song_wrapper");
  const container = document.querySelector(".container"); 

  song_wrapper.innerHTML = "";

  if (playlist.length === 0) {
    container.innerHTML = "<p style='padding: 20px;'>Playlist is empty.</p>";
    return;
  }

  playlist.forEach((track) => {
    const { trackId, name, artist, image, release_date, duration, link } = track;

    song_wrapper.innerHTML += `
      <div class="song_row" onclick="showModalDetails_track('${trackId}')">
        <div class="song_title" style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
          <img src="${image}" alt="${name}" style="width: 60px; height: 60px; border-radius: 10px;">
          <div>
            <strong class="ellipsis">${name}</strong><br>
            <a href="${link}" target="_blank" style="text-decoration: none; color: #1DB954 !important;">Nghe trên Spotify</a>
          </div>
        </div>
        <strong class="ellipsis">${artist}</strong>
        <strong>${release_date}</strong>
        <strong>${duration}</strong>
        <p onclick="deleteTrack('${trackId}')"><i class="fa-solid fa-trash fa-lg" style="color: #ffffff;"></i></p>
      </div>
    `;
  });
}

showPlaylist()



