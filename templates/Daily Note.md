[[<% tp.date.now("YYYY-MM-DD", -1) %>|< Yesterday]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>|Tomorrow >]]

### <% tp.date.now("dddd, MMM D, Y") %>

<% tp.file.cursor(0) %>

### On This Day

![[<% tp.date.now("YYYY-MM-DD", -7) %>#<% tp.date.now("dddd, MMM D, Y", -7) %>|One Week Ago]]
![[<% tp.date.now("YYYY-MM-DD", "P-1M") %>#<% tp.date.now("dddd, MMM D, Y", "P-1M") %>|One Month Ago]]
![[<% tp.date.now("YYYY-MM-DD", "P-2M") %>#<% tp.date.now("dddd, MMM D, Y", "P-2M") %>|Two Months Ago]]
![[<% tp.date.now("YYYY-MM-DD", "P-3M") %>#<% tp.date.now("dddd, MMM D, Y", "P-3M") %>|Three Months Ago]]
<%
[...Array(10).keys()].slice(1).map(function(yearOffset) {
    const fileName = tp.date.now("YYYY-MM-DD", "P-" + yearOffset + "Y");
    const headerName = tp.date.now("dddd, MMM D, Y", "P-" + yearOffset + "Y");
    if (tp.file.exists("[[" + fileName + "]]")) {
        return "![[" + fileName + "#" + headerName + "|" + yearOffset + " Year" + (yearOffset == 1 ? "" : "s") + " Ago]]";
    }
    return "";
 }).filter(function(s) { return s.length > 0 }).join("\n")
%>

### Random Note

![[<% tp.user.random_note(["templates/", "postlight/", "journal/"]) %>]]

### Edited Today

```dataview
list from ""
where file.mtime.day = date({{date:YYYY-MM-DD}}).day and file.mtime.month = date({{date:YYYY-MM-DD}}).month and file.mtime.year = date({{date:YYYY-MM-DD}}).year 
```

[[journal]]