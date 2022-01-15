This is an example Obsidian vault with a subset of my own personal vault's configuration. I keep telling people about random configs I have, and this is a way to share them. I may add future setups over time.

### Features

- Daily note template: cmd-d to trigger. Includes yesterday/tomorrow links, section for today's entry, entries on this day 1 week, 1/2/3 months, and 1-10 years ago, and a random note transclusion. Also a dataview query that lists all the files I've edited that day, which stops being accurate after that day ends until [this issue](https://github.com/blacksmithgu/obsidian-dataview/issues/42) is fixed.
- Checkin template: opt-cmd-p to trigger. Lets you choose from a list of reports generated from notes in the postlight/reports folder. ([Postlight](https://postlight.com) is my employer, and `postlight/` is thus my work folder). Once you choose a person from that list, it creates a checkin note with today's date, a small intro, and a list of any open tasks/reminders you might have with that person:
 ![screenshot](https://raw.githubusercontent.com/kevboh/example-vault/main/res/Pasted%20image%2020220114215030.png)

- Writing-specific appearance: via [this CSS snippet](https://github.com/kevboh/example-vault/blob/main/.obsidian/snippets/writing.css) and [Longform](https://github.com/kevboh/longform), any scene within a Longform project is styled as black Baskerville text on a white background instead of the default dark theme I use. This helps tell my brain that I'm writing prose and not notes.
- Also includes a `Book` template that is incomplete but I use privately to track my reading.