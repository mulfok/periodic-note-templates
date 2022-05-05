# MK's Periodic Note Templates
A set of periodic note templates for Obsidian.md.

![image](https://user-images.githubusercontent.com/50339059/166981554-4ccf8b94-6f33-4b78-9a4d-3252d54502a0.png)
*Theme: [Viridian](https://github.com/mulfok/obsidian/viridian)*
___

## Before You Start...
This collection of templates suit my **current** workflow. I supply them here and try to keep them to-date so that you lovely people are also able to use them. ❤️ _By all means,_ you are encouraged to change the templates when you download them (you'll have to regardless, it's part of setup 😛) you may use a date format that I don't (these templates use YYYY-MM-DD by the way) or you may want to change what these notes track and whatnot. In short, these could/should be considered as a **base** to **your** perfect periodic note template.

These templates also assume you know how to use the plugins required. If you don't, please refer to the instructions on their repos--I unfortunately don't have the time to write a full-blown tutorial on how to install each and every single plugin.

## Required Plugins
- [CustomJS](https://github.com/samlewis0602/obsidian-custom-js)
- [Dynamic Table of Contents](https://github.com/Aidurber/obsidian-plugin-dynamic-toc)
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview) (_ensure JS queries are enabled_)
- [Obsidian Banners](https://github.com/noatpad/obsidian-banners)
- [Obsidian Charts](https://github.com/phibr0/obsidian-charts)
- [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)
- [Tasks](https://github.com/schemar/obsidian-tasks)
- [Templater](https://github.com/SilentVoid13/Templater)

## Setup
These notes require a little TLC to get them off of the ground. Other than installing the plugins listed above, we additionally need to configure...

1. The code required for the graph
  1. The actual graph codeblock
1. The banners used throughout the notes

### CustomJS Graph Code

### Banner Images
You may notice that in the examples in this repo, there are banners that compliment the notes. By default, they are set as `![[<% tp.date.now("YYYY MMMM") %> Weekly Banner.jpg]]` in the template's frontmatter. When generating a new daily note, it will be translated to `![[2022 March Weekly Banner.jpg]]`. I personally like to have different banners for each month of the year, so I have a small backlog of chronologically named banners.

If you have a different file format for your images, no need to fret! Just change the `.jpg` to your desired format: `.png`, `.svg`, etc...
___
## Template Overview
Let's briefly look at each periodic note type, and what their intended functions are.

### Daily Notes
I use **Daily Notes** to fill out short dataview fields when as I feel like it, and to take memos and work logs of my day.

I track habits, the weather, tasks, and various statistics about my day. The fields found within these notes are then pulled into the **Weekly Note** that it is linked to, which is used for the automatic review.

![image](https://user-images.githubusercontent.com/50339059/166984582-5e20e94c-0cef-402c-8225-817fb6283294.png)

#### Learnt Words
You may notice that there's a field for **learnt words.** It's a useful thing to keep track of (especially in language learning) but there is a special format required in order for the field to work.

```
- Learnt Words:: "word one", "meaning", "word two", "meaning"
```

You can have any number of words in the field, but it must **always** be formatted as `"word", "meaning"`. If it is formatted incorrectly, the table on the weekly note will separate each character as it's own field, which doesn't look right.

Additionally, make sure that the quotation marks surrounding your fields are **not curled.** That means use these: `""` and not these: `“”`.

### Weekly Notes
Weekly notes are used as a bigger picture of a period of your life. They link automatically to all days of the week, and has a fully automated _Overview_ section where you can see a graph and dataview table of the trackers you choose. The memos in your daily notes get pulled into the _Daily Memos_ section so that you can see everything at a glance.

![image](https://user-images.githubusercontent.com/50339059/156692722-07407996-9c68-41a8-a801-e84402461ff9.png)

Concerning the weekly note's graph, the JS code rendering it has the path to daily notes as `dv.current().file.folder`. This assumes that your weekly notes are in the same folder as your daily notes. If you're like me, and sort your daily notes into folders chronologically, you could change the path to `"02 Personal/02.01 Periodic Notes/2022/Daily/03 March"` or similar.

___
### Attribution
Huge thanks to the following people for...
- [Olivier Carizzoni](https://github.com/oliviercarizzoni): Improved graph code
- Braden1996#5496 (Discord): Learnt words table concept

### Support me!
Check out my other stuff:
- [Absolve](https://github.com/mulfok/obsidian-absolve)
- [mulfok's garden](https://publish.obsidian.md/mulfok-vault)
- [Viridian](https://github.com/mulfok/obsidian-viridian)

### Contact
- Discord: @mulfok#6931
- Twitter: @mulfok
