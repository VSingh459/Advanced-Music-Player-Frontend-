const songJSON = [
    {
        id: 1,
        name: "Shape of You",
        artist: "Ed Sheeran",
        image: "Images/Shape.jpg",
        genre: "Pop",
        source: "google",
    },

    {
        id: 2,
        name: "All of Me",
        artist: "Adele",
        image: "Images/AllMe.jpg",
        genre: "Pop",
        source: "google",
    },

    {
        id: 3,
        name: "Somelike Like You",
        artist: "Adele",
        image: "Images/some.jpg",
        genre: "Pop",
        source: "google",
    },


    {
        id: 4,
        name: "Wonderwall",
        artist: "Oasis",
        image: "Images/wonder.jpg",
        genre: "Rock",
        source: "google",
    },

    {
        id: 5,
        name: "Sugar",
        artist: "Maroon",
        image: "Images/sugar.jpg",
        genre: "Hip Hop",
        source: "google",
    },

    {
        id: 6,
        name: "Locked Away",
        artist: "R. City",
        image: "Images/sugar.jpg",
        genre: "Hip Hop",
        source: "google",
    },

    {
        id: 7,
        name: "The Show Must Go On",
        artist: "Queen",
        image: "Images/show.jpg",
        genre: "Rock",
        source: "google",
    },

    {
        id: 8,
        name: "Hypnotize",
        artist: "The Notorious B.I.G",
        image: "Images/hypno.jpg",
        genre: "Hip Hop",
        source: "google",
    },

    {
        id: 9,
        name: "Paper Planes",
        artist: "M.I.A",
        image: "Images/paper.jpg",
        genre: "Hip Hop",
        source: "google",
    },
]

const tt = document.getElementsByClassName('lister')[0]; 
let globaler = 1; // Current song ID

function print(JJ) {
    for (let i = 0; i < JJ.length; i++) {
        const n = document.createElement('div');
        n.className = 'el';
        const n1 = document.createElement('p');
        n1.className = 'en';
        n1.textContent = JJ[i].name + ' - ' + JJ[i].artist;
        n.appendChild(n1);
        tt.appendChild(n);

        n.addEventListener('click', function () {
            x.textContent = JJ[i].name;
            x1.textContent = JJ[i].artist;
            imer.src = JJ[i].image;
            imer.alt = "Song Photo";
            globaler = JJ[i].id;
        });
    }
}

// Filter Songs by Genre
function filter(gg) {
    const tempJSON = [];
    for (let i = 0; i < songJSON.length; i++) {
        if (gg == songJSON[i].genre) {
            tempJSON.push(songJSON[i]);
        }
    }
    return tempJSON;
}

// Show Songs
function showSongs() {
    print(songJSON);
    let z = document.getElementById('sDDN');
    z.addEventListener('change', function (event) {
        const g2 = event.target.value;
        tt.innerHTML = ''; // Clear the song list
        if (g2 == 'Rock') {
            const j1 = filter('Rock');
            print(j1);
        } else if (g2 == 'Pop') {
            const j1 = filter('Pop');
            print(j1);
        } else if (g2 == 'Hip Hop') {
            const j1 = filter('Hip Hop');
            print(j1);
        } else {
            print(songJSON);
        }
    });
}

showSongs();

// Part 2: Song Display and Navigation
const dider = document.getElementsByClassName('songPhoto')[0];
const imer = document.createElement('img');
imer.src = "Images/Shape.jpg";
imer.id = 'SP';
dider.appendChild(imer);

const x = document.createElement('h3');
const x1 = document.createElement('p');
x.id = 'sn';
x1.id = "an";
dider.appendChild(x);
dider.appendChild(x1);

const arL = document.getElementsByClassName('ab-L')[0];
const arR = document.getElementsByClassName('ab-R')[0];

arL.addEventListener('click', function () {
    if (globaler - 1 >= 1) { 
        globaler--; // Move to the previous song
        updateSongDisplay();
    }
});

arR.addEventListener('click', function () {
    if (globaler + 1 <= songJSON.length) { 
        globaler++; // Move to the next song
        updateSongDisplay();
    }
});

function updateSongDisplay() {
    let currentSong = songJSON.find(song => song.id === globaler);
    if (currentSong) {
        x.textContent = currentSong.name;
        x1.textContent = currentSong.artist;
        imer.src = currentSong.image;
        imer.alt = "Song Photo";
    }
}

// Part 3: Playlist Creation and Adding Songs
const c1 = document.getElementById('search');
const c2 = document.getElementById('CP');
const f = document.getElementsByClassName('fup')[0];
const bcc = document.getElementsByClassName('remain')[0];

let flag = false;
let playJSON = [];
let currentPlaylistIndex = -1;

c2.addEventListener('click', function () {
    if (c1.value.trim() !== "") { 
        const po = document.createElement('div');
        po.className = 'epe';
        const po1 = document.createElement('p');
        po1.className = 'epo';
        po.appendChild(po1);

        po1.textContent = c1.value;
        f.appendChild(po);

        // Create a new playlist object and add it to playJSON
        playJSON.push({
            name: c1.value,
            songs: []
        });

        // Add click event to the new playlist element
        po.addEventListener('click', function () {
            // Set the current playlist index based on the clicked playlist
            currentPlaylistIndex = playJSON.findIndex(p => p.name === po1.textContent);

            // Clear the "Current Playlist" section
            bcc.innerHTML = '';

            // Display the songs from the selected playlist
            playJSON[currentPlaylistIndex].songs.forEach(song => {
                const pf = document.createElement('div');
                pf.className = 'epe';
                const pf1 = document.createElement('p');
                pf1.className = 'epo';
                pf1.textContent = song.name + ' - ' + song.artist;
                pf.appendChild(pf1);
                bcc.appendChild(pf);
            });
        });

        // Clear the input field
        c1.value = ''; 
        flag = true; // Allow songs to be added
    }
});

// Add Song to Current Playlist
const bb = document.getElementsByClassName('aaa')[0];

bb.addEventListener('click', function () {
    if (flag === true && currentPlaylistIndex >= 0) {
        let currentSong = songJSON.find(song => song.id === globaler);

        if (currentSong) {
            // Check if the song is already in the current playlist
            let isSongInPlaylist = playJSON[currentPlaylistIndex].songs.some(song => song.id === currentSong.id);

            if (!isSongInPlaylist) {
                // Add the song to the playlist only if it's not already present
                const pf = document.createElement('div');
                pf.className = 'epe';
                const pf1 = document.createElement('p');
                pf1.className = 'epo';
                pf.appendChild(pf1);

                pf1.textContent = currentSong.name + ' - ' + currentSong.artist;
                bcc.appendChild(pf);

                // Add the current song to the selected playlist
                playJSON[currentPlaylistIndex].songs.push(currentSong);
            } else {
                alert("This song is already in the playlist!");
            }
        }
    } else {
        alert("Please create or select a playlist first!");
    }
});

// Toggle Button Toggle Button Stuff

const toggleBtn = document.getElementById('toggleBtn');
        const body = document.body;
        const aper = document.getElementById('All-Songs');
        const aper1 = document.getElementById('middle');
        const aper2 = document.getElementById('part3');
        const aper3 = document.getElementsByClassName('sea')[0];

        toggleBtn.addEventListener('click', function () {
            toggleBtn.classList.toggle('active');

            if (toggleBtn.classList.contains('active')) {
                body.style.backgroundColor = '#666666';
                body.style.color = 'white';
                aper.style.backgroundColor = '#333333';
                aper1.style.backgroundColor = '#333333';
                aper2.style.backgroundColor = '#333333';
                aper3.style.backgroundColor = '#b3b3b3';
            } else {
                body.style.backgroundColor = 'white';
                body.style.color = 'black';
                aper.style.backgroundColor = '#6bb8de';
                aper1.style.backgroundColor = '#6bb8de';
                aper2.style.backgroundColor = '#6bb8de';
                 aper3.style.backgroundColor = '#6bb8de';
            }
        });