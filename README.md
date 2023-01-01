This is an example Obsidian vault with a subset of my own personal vault's configuration. I keep telling people about random configs I have, and this is a way to share them. I may add future setups over time.

### Features

- Daily note template: cmd-d to trigger. Features include:
	- Yesterday/tomorrow links for navigation.
	- A section for today's entry. This will be transcluded in future entries.
	- Entries on this day 1 week, 1/2/3 months, and 1-10 years ago.
	- A random note transclusion.
	- A dataview query that lists all the files edited on this day, and which stops being accurate after that day ends until [this issue](https://github.com/blacksmithgu/obsidian-dataview/issues/42) is fixed.
	- Finally, a summary line that tags a catch-all `journal` note, plus dedicated notes for the month, day, and year: useful for slicing up your journal across time.
- Writing-specific appearance: via [this CSS snippet](https://github.com/kevboh/example-vault/blob/main/.obsidian/snippets/writing.css) and [Longform](https://github.com/kevboh/longform), any scene within a Longform project is styled as black Baskerville text on a white background instead of the default dark theme I use. This helps tell my brain that I'm writing prose and not notes.
- Also includes a `Book` template that is incomplete but I use privately to track my reading.