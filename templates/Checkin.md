<%*

// Get a list of my reports
const { files } = await this.app.vault.adapter.list("/postlight/reports");
const reports = files.filter(f => !f.endsWith("Reports.md")).map(f => f.split("/").pop().slice(0, -3))

const name = await tp.system.suggester(reports, reports);
if (!name) {
    return
}

const pathComponent = name.toLowerCase().replace(" ", "_");
const noteName = `postlight/reports/checkins/${pathComponent}/${name} ${tp.date.now("Y-MM-DD")}.md`;

const noteContents = `Checkin with [[${name}]] on ${tp.date.now("MMMM D, Y")}.\

\`\`\`dataview
task from "postlight/reports/${name}"
group by "Tasks" as abc
\`\`\`

**Notes**

- 
`

let file = this.app.vault.getAbstractFileByPath(noteName);
if (!file) {
    file = await this.app.vault.create(noteName, '');
}

if (file) {
    await this.app.vault.modify(file, noteContents);
    this.app.workspace.activeLeaf.openFile(file);
}

%>