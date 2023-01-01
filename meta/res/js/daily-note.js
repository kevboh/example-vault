class DailyNoteUtils {
  memento_mori(since) {
    return moment().endOf("day").diff(moment(since).startOf("day"), "days");
  }

  async weather() {
    const weather = await fetch(
      'https://wttr.in/?A&m&format="%l:+%C+%t+(%m+%M)"'
    );
    const res = await weather.text();
    return res.slice(1, -1);
  }

  random_note_path(excluding) {
    const eligibleFiles = app.vault
      .getAllLoadedFiles()
      .filter(
        (e) =>
          e.extension == "md" &&
          !e.deleted &&
          !excluding.some((p) => e.path.startsWith(p))
      );

    const randomIndex = Math.floor(Math.random() * eligibleFiles.length);
    const file = eligibleFiles[randomIndex];
    return file.path;
  }

  random_image_path(inPath, extensions = ["jpg", "jpeg", "png"]) {
    const extensionSet = new Set(extensions);
    const eligibleFiles = app.vault
      .getAllLoadedFiles()
      .filter(
        (e) =>
          extensionSet.has(e.extension) &&
          !e.deleted &&
          e.path.startsWith(inPath)
      );

    const randomIndex = Math.floor(Math.random() * eligibleFiles.length);
    const file = eligibleFiles[randomIndex];
    return file.path;
  }
}
