import { getUserPlaylists, getTracksInPlaylist } from "./CRUD.js";
import { showModalDetails_track } from "./show_modal.js";

window.showModalDetails_track = showModalDetails_track;
window.loadPlaylists = loadPlaylists;
window.showPlaylistTracks = showPlaylistTracks;

document.addEventListener("DOMContentLoaded", async () => {
  await loadPlaylists();
});

async function loadPlaylists() {
  const container = document.querySelector(".song_wrapper");
  container.innerHTML = "";

  const playlists = await getUserPlaylists();
  if (playlists.length === 0) {
    container.innerHTML = `<p style="padding:20px;color:white;">Chưa có playlist nào. Hãy thêm bài hát để tạo playlist!</p>`;
    return;
  }
  
  playlists.forEach((pl) => {
    const div = document.createElement("div");
    div.className = "playlist_item";
    div.style.cssText = `
      padding:15px;
      margin-bottom:20px;
      background:#181818;
      border-radius:10px;
      cursor:pointer;
      color:white;
    `;
    div.innerHTML = `
      <h4>${pl}</h4>
      <p style="opacity:0.7;">Click để xem bài hát trong playlist này</p>
    `;
    div.addEventListener("click", () => showPlaylistTracks(pl));
    container.appendChild(div);
  });
}

async function showPlaylistTracks(playlistName) {
  const container = document.querySelector(".song_wrapper");
  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <h3 style="color:white;">🎵 ${playlistName}</h3>
      <button id="backBtn" style="background:none;border:none;color:white;font-size:18px;cursor:pointer;">
        <i class="fa-solid fa-arrow-left"></i> Quay lại
      </button>
    </div>
    <div class="track_grid" style="display:flex;flex-wrap:wrap;gap:20px;margin-top:20px;"></div>
  `;

  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", loadPlaylists);

  const grid = container.querySelector(".track_grid");
  const tracks = await getTracksInPlaylist(playlistName);

  if (tracks.length === 0) {
    grid.innerHTML = `<p style="padding:20px;color:white;">Playlist này chưa có bài hát nào.</p>`;
    return;
  }

  tracks.forEach((track) => {
    const { name, artist, image, trackId } = track;
    const div = document.createElement("div");
    div.className = "track_card";
    div.innerHTML = `
      <div onclick="showModalDetails_track('${trackId}')">
        <img src="${image}" alt="${name}" style="width:175px;height:175px;border-radius:10px;margin-bottom:10px;cursor:pointer;">
        <p class="ellipsis" style="color:white;">${name}</p>
        <p class="ellipsis" style="opacity:0.7;color:white;">${artist}</p>
      </div>
    `;
    grid.appendChild(div);
  });
}
