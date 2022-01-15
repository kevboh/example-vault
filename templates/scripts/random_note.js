function random_note_path(excluding) {
  const eligibleFiles = app.vault.getAllLoadedFiles()
    .filter(e => e.extension == "md" && !e.deleted && !excluding.some(p => e.path.startsWith(p)));

  const randomIndex = Math.floor(Math.random() * eligibleFiles.length);
  const file = eligibleFiles[randomIndex];
  return file.path;
}
module.exports = random_note_path;
