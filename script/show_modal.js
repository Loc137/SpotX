import { getToken } from "./getToken.js";
import { addTrack } from "./CRUD.js";

window.showModalDetails_track = showModalDetails_track
window.showModalDetails_artist = showModalDetails_artist
window.showModalMore_track = showModalMore_track
window.closeModal = closeModal
window.addTtrack = addTrack

export function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

export async function showModalDetails_track(trackId) {
    const existingModal = document.querySelector(".modal_box");
    if (existingModal) {
        existingModal.remove();
    }

    const token = await getToken();

    const url = `https://api.spotify.com/v1/tracks/${trackId}`;

    const res = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data = await res.json();

    const name = data.name;
    const artist = data.artists.map((a) => a.name).join(", ");
    const image = data.album.images[0]?.url;
    const release_date = data.album.release_date;
    const duration = formatDuration(data.duration_ms);
    const link = data.external_urls.spotify;
    const artistId = data.artists[0].id
    const embed = `https://open.spotify.com/embed/track/${trackId}`;

    const modal_box = document.createElement("div")
    modal_box.className = "modal_box"

    modal_box.innerHTML = `
    <i class="fa-solid fa-arrow-left fa-2xl" style="color: #ffffff;" onclick="closeModal()" id="arrow_icon"></i>
    <div class="modal_content">
      <div class="iframe_embed">
        <iframe src="${embed}" width="80%" height="375" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    <div class="add" onclick="addTrack('${name}', '${image}', '${artist}', '${trackId}', '${release_date}', '${duration}', '${link}')">
      <i class="fa-solid fa-circle-plus fa-2xl" style="color: #ffffff;"></i>
      <p style="margin: 0 10px 0 10px; font-size: larger;">Add to your playlist</p>
    </div>

    <div class="container">
        <div class="ct">
            <p>Title</p>
            <p>Artist</p>
            <p>Release date</p>
            <p><i class="fa-regular fa-clock fa-lg" style="color: #ffffff;"></i></p>
        </div>
    </div>
        
    <div class="detail_wrapper">
      <div class="song_row">
        <strong class="ellipsis">${name}</strong>
        <strong class="ellipsis" onclick="showModalDetails_artist('${artistId}')">${artist}</strong>
        <strong>${release_date}</strong>
        <strong>${duration}</strong>
      </div>
    </div>

    <p class="modal_title">More by ${artist}</p>

    <div class="track_modal_wrapper"></div>

    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    <hr>
    <br> <br>
    <div class="container_logo">
        <a href="" class="footer_icon"><i class="fa-brands fa-facebook fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-instagram fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-twitter fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-google fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-youtube fa-xl"></i></a>
    </div>
    <br>
    <div class="container_word">
        <p>Home</p>
        <p>About</p>
        <p>Playlist</p>
        <p>copyright</p>
        <p>Contact</p>
    </div>
    <br>
    <p style="text-align: center;">Copyright ©2025. Design by Trương Phạm Lộc</p>
    <br> <br> <br>
   `

    document.body.appendChild(modal_box)

    //lay track tu artist
    const url_track = `https://api.spotify.com/v1/search?q=${encodeURIComponent(artist)}&type=track&limit=7`;

    const res_track = await fetch(url_track, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data_track = await res_track.json();

    const results_track = data_track.tracks.items;

    const track_modal_wrapper = document.querySelector(".track_modal_wrapper");

    results_track.forEach((tracks) => {
        const name = tracks.name;
        const artist = tracks.artists.map((a) => a.name).join(", ");
        const image = tracks.album.images[0]?.url;
        const trackId = tracks.id;

        track_modal_wrapper.innerHTML += `
          <div class="track_modal_row" onclick="showModalDetails_track('${trackId}')">
            <img src="${image}" alt="${name}" style="width: 175px; height: 175px; border-radius: 10px; margin-bottom: 20px">
            <p class="ellipsis">${name}</p>
            <p class="ellipsis" style="opacity: 0.7;">${artist}</p>
          </div>
    `;
    });
}

export async function showModalDetails_artist(artistId) {
    const existingModal = document.querySelector(".modal_box");
    if (existingModal) {
        existingModal.remove();
    }

    const token = await getToken();

    const url = `https://api.spotify.com/v1/artists/${artistId}`;

    const res = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data = await res.json();

    const name = data.name;
    // const artist = data.artists.map((a) => a.name).join(", ");
    // const image = data.album.images[0]?.url;
    // const release_date = data.album.release_date;
    // const duration = formatDuration(data.duration_ms);
    const embed = `https://open.spotify.com/embed/artist/${artistId}`;

    const modal_box = document.createElement("div")
    modal_box.className = "modal_box"

    modal_box.innerHTML = `
    <i class="fa-solid fa-arrow-left fa-2xl" style="color: #ffffff;" onclick="closeModal()" id="arrow_icon"></i>
    <div class="modal_content">
      <div class="iframe_embed">
        <iframe src="${embed}" width="80%" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    <p class="modal_title">Related Artists</p>

    <div class="artist_modal_wrapper"></div>

    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    <hr>
    <br> <br>
    <div class="container_logo">
        <a href="" class="footer_icon"><i class="fa-brands fa-facebook fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-instagram fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-twitter fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-google fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-youtube fa-xl"></i></a>
    </div>
    <br>
    <div class="container_word">
        <p>Home</p>
        <p>About</p>
        <p>Playlist</p>
        <p>copyright</p>
        <p>Contact</p>
    </div>
    <br>
    <p style="text-align: center;">Copyright ©2025. Design by Trương Phạm Lộc</p>
    <br> <br> <br>
   `

    document.body.appendChild(modal_box)

    //lay artist giong ten
    const url_track = `https://api.spotify.com/v1/search?q=${encodeURIComponent(name)}&type=artist&limit=7`;

    const res_artist = await fetch(url_track, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data_artist = await res_artist.json();

    const results_artist = data_artist.artists.items;

    const artist_modal_wrapper = document.querySelector(".artist_modal_wrapper");

    results_artist.forEach((artists) => {
        const name = artists.name;
        const image = artists.images[0]?.url
        const followers = artists.followers.total
        const artistId = artists.id;

        artist_modal_wrapper.innerHTML += `
          <div class="artist_modal_row" onclick="showModalDetails_artist('${artistId}')">
            <img src="${image}" alt="${name}" style="width: 175px; height: 175px; border-radius: 50%; margin-bottom: 20px">
            <p class="ellipsis">${name}</p>
            <p style="opacity: 0.7;">Artist</p>
            <p style="opacity: 0.7;">${followers} followers</p>
          </div>
    `;
    });
}

export async function closeModal() {
    const modal_box = document.querySelector(".modal_box")
    if (modal_box) {
        document.body.removeChild(modal_box)
    }
}

export async function showModalMore_track(query) {
    const existingModal = document.querySelector(".modal_box");
    if (existingModal) {
        existingModal.remove();
    }

    const token = await getToken();

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=50`;

    const res = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data = await res.json();

    const results = data.tracks.items;

    const modal_box = document.createElement("div");
    modal_box.className = "modal_box";

    modal_box.innerHTML = `
    <i class="fa-solid fa-arrow-left fa-2xl" style="color: #ffffff;" onclick="closeModal()" id="arrow_icon"></i>

    <br> <br> <br> <br> <br>

    <div class="track_modal_wrapper"></div>

    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    <hr>
    <br> <br>
    <div class="container_logo">
        <a href="" class="footer_icon"><i class="fa-brands fa-facebook fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-instagram fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-twitter fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-google fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-youtube fa-xl"></i></a>
    </div>
    <br>
    <div class="container_word">
        <p>Home</p>
        <p>About</p>
        <p>Playlist</p>
        <p>copyright</p>
        <p>Contact</p>
    </div>
    <br>
    <p style="text-align: center;">Copyright ©2025. Design by Trương Phạm Lộc</p>
    <br> <br> <br>
  `;

    document.body.appendChild(modal_box);

    const track_modal_wrapper = document.querySelector(".track_modal_wrapper");

    results.forEach((track) => {
        const name = track.name;
        const artist = track.artists.map((a) => a.name).join(", ");
        const image = track.album.images[0]?.url;
        const artistId = track.artists[0].id;
        const trackId = track.id;

        track_modal_wrapper.innerHTML += `
      <div class="track_modal_row" onclick="showModalDetails_track('${trackId}')">
        <img src="${image}" alt="${name}" style="width: 175px; height: 175px; border-radius: 10px; margin-bottom: 20px"; margin-top: 50px;>
        <p class="ellipsis">${name}</p>
        <p class="ellipsis" style="opacity: 0.7;" onclick="showModalDetails_artist('${artistId}')">${artist}</p>
      </div>
    `;
    });
}

export async function showModalMore_artist(query) {
    const existingModal = document.querySelector(".modal_box");
    if (existingModal) {
        existingModal.remove();
    }

    const token = await getToken();

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist&limit=50`;

    const res = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const data = await res.json();

    const results = data.artists.items; // ✅ Sửa từ 'data.artist.items'

    const modal_box = document.createElement("div");
    modal_box.className = "modal_box";

    modal_box.innerHTML = `
    <i class="fa-solid fa-arrow-left fa-2xl" style="color: #ffffff;" onclick="closeModal()" id="arrow_icon"></i>

    <br> <br> <br> <br> <br>

    <div class="track_modal_wrapper"></div>

    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    <hr>
    <br> <br>
    <div class="container_logo">
        <a href="" class="footer_icon"><i class="fa-brands fa-facebook fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-instagram fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-twitter fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-google fa-xl"></i></a>
        <a href="" class="footer_icon"><i class="fa-brands fa-youtube fa-xl"></i></a>
    </div>
    <br>
    <div class="container_word">
        <p>Home</p>
        <p>About</p>
        <p>Playlist</p>
        <p>copyright</p>
        <p>Contact</p>
    </div>
    <br>
    <p style="text-align: center;">Copyright ©2025. Design by Trương Phạm Lộc</p>
    <br> <br> <br>
  `;

    document.body.appendChild(modal_box);

    const track_modal_wrapper = document.querySelector(".track_modal_wrapper");

    results.forEach((artist) => {
        const name = artist.name;
        const image = artist.images[0]?.url;
        const followers = artist.followers.total;
        const artistId = artist.id;

        track_modal_wrapper.innerHTML += `
      <div class="track_modal_row" onclick="showModalDetails_artist('${artistId}')">
        <img src="${image}" alt="${name}" style="width: 175px; height: 175px; border-radius: 50%; margin-bottom: 20px">
        <p class="ellipsis">${name}</p>
        <p style="opacity: 0.7;">Artist</p>
        <p style="opacity: 0.7;">${followers} followers</p>
      </div>
    `;
    });
}


