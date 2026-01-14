// 🌙 DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// 🎵 SONG DATA (NO TXT FILES)
const songs = {
  horse: {
    title: "The Horse and the Infant",
    characters: "Odysseus, Zeus",
    lyrics: "Lyrics go here"
  },
  justMan: {
    title: "Just a Man",
    characters: "Odysseus",
    lyrics: "Lyrics go here"
  },
  polyphemus: {
    title: "Polyphemus",
    characters: "Polyphemus, Odysseus",
    lyrics: "Lyrics go here"
  },
  survive: {
    title: "Survive",
    characters: "Odysseus, Crew",
    lyrics: "Lyrics go here"
  },
  storm: {
    title: "Storm",
    characters: "Crew",
    lyrics: "Lyrics go here"
  },
  luck: {
    title: "Luck Runs Out",
    characters: "Odysseus, Eurylochus",
    lyrics: "Lyrics go here"
  },
  puppet: {
    title: "Puppeteer",
    characters: "Circe",
    lyrics: "Lyrics go here"
  },
  doneFor: {
    title: "Done For",
    characters: "Circe, Odysseus",
    lyrics: "Lyrics go here"
  },
  underworld: {
    title: "The Underworld",
    characters: "Odysseus",
    lyrics: "Lyrics go here"
  },
  noLongerYou: {
    title: "No Longer You",
    characters: "Tiresias",
    lyrics: "Lyrics go here"
  },
  thunder: {
    title: "Thunder Bringer",
    characters: "Zeus",
    lyrics: "Lyrics go here"
  },
  warrior: {
    title: "Warrior of the Mind",
    characters: "Athena",
    lyrics: "Lyrics go here"
  },
  monster: {
    title: "Monster",
    characters: "Odysseus",
    lyrics: "Lyrics go here"
  },
  king: {
    title: "King",
    characters: "Odysseus",
    lyrics: "Lyrics go here"
  }
};

// 📜 SHOW SONG
function showSong(id) {
  const song = songs[id];
  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songChars").textContent =
    "Characters: " + song.characters;
  document.getElementById("songLyrics").textContent = song.lyrics;
}
