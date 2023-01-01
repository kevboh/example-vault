---
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
updated: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
---
[[<% tp.date.now("YYYY-MM-DD", -1) %>|←Yesterday]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>|Tomorrow→]]

You have been alive for <%*
const  { DailyNoteUtils } = customJS;
tR += DailyNoteUtils.memento_mori("1969-01-01");
%> days.

### <% tp.date.now("dddd, MMM D, Y") %>

<% tp.file.cursor(1) %>

### On This Day

<%
[-7, "P-1M", "P-2M", "P-3M", ...[...Array(11).keys()].slice(1).map(o => `P-${o}Y`)].map(offset => {
  const fileName = tp.date.now("YYYY-MM-DD", offset);
  const headerName = tp.date.now("dddd, MMM D, Y", offset);
  const link = fileName + "#" + headerName;
  const makeLink = (title) => `#### ${title}\n\n![[${link}|${title}]]`
  if (tp.file.exists("[[" + fileName + "]]")) {
    if (offset === -7) {
      return makeLink("One Week Ago");
    }
    else {
      const monthMatch = offset.match(/P-(\d+)M/);
      if (monthMatch) {
        [_match, month] = monthMatch;
        return makeLink(`${month} Month${month === "1" ? "" : "s"} Ago`)
      }
      const yearMatch = offset.match(/P-(\d+)Y/);
      if (yearMatch) {
        [_match, year] = yearMatch;
        return makeLink(`${year} Year${year === "1" ? "" : "s"} Ago`)
      }
    }
  }
  return "";
}).filter(function(s) { return s.length > 0 }).join("\n")
%>

### Random Note

![[<%*
tR += DailyNoteUtils.random_note_path(["meta/templates/", "work/", "journal/"]);
%>]]

### Edited Today

```dataview
list from ""
where striptime(date(created)) = date(<% tp.date.now("YYYY-MM-DD") %>) or striptime(date(updated)) = date(<% tp.date.now("YYYY-MM-DD") %>)
```

([[journal]] entry on [[<% tp.date.now("MMMM") %>]] [[<% tp.date.now("Do") %>]] [[<% tp.date.now("Y") %>]])
