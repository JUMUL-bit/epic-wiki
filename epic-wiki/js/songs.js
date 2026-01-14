// Toggle sagas open/close
document.querySelectorAll(".saga-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("open");
  });
});

// Load song into sidebar
document.querySelectorAll(".song").forEach(song => {
  song.addEventListener("click", () => {
    const title = song.dataset.title;
    const characters = song.dataset.characters;
    const lyrics = song.dataset.lyrics;

    document.getElementById("songTitle").textContent = title;
    document.getElementById("songCharacters").textContent =
      characters ? "Sung by: " + characters : "";
    document.getElementById("songLyrics").textContent = lyrics;
  });
});
