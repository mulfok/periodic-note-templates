---
banner: "![[<% tp.date.now("YYYY MMMM") %> Weekly Banner.jpg]]"
banner_icon: 📆
---

# <% tp.date.now("YYYY-MM [Week] WW") %>

[[<% tp.date.now("YYYY-MM", -7) %> Week <% tp.date.now("WW", -7) %>|↶ Previous Week]] | [[<% tp.date.now("YYYY-MM", 7) %> Week <% tp.date.now("WW", 7) %>|Following Week ↷]]

**Metadata:**
- Created:: <% tp.date.now("YYYY-MM-DD @ HH:mm") %>
- Tags:: #calendar/weekly/<% tp.date.now("YYYY") %>

**Table of Contents:**
```toc
style: number
```

___

### Summary
- [[<% tp.date.weekday("YYYY-MM-DD", 0) %>|Monday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 0) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 1) %>|Tuesday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 1) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 2) %>|Wednesday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 2) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 3) %>|Thursday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 3) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 4) %>|Friday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 4) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 5) %>|Saturday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 5) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 6) %>|Sunday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 6) %>#^memo-link]]

### Overview
```dataviewjs
var one = undefined;
one = dv.page("<% tp.date.weekday("YYYY-MM-DD", 0) %>");
if (one==undefined) { one = 0; }

var two = undefined;
two = dv.page("<% tp.date.weekday("YYYY-MM-DD", 1) %>");
if (two==undefined) { two = 0; }

var thr = undefined;
thr = dv.page("<% tp.date.weekday("YYYY-MM-DD", 2) %>");
if (thr==undefined) { thr = 0; }

var fou = undefined;
fou = dv.page("<% tp.date.weekday("YYYY-MM-DD", 3) %>");
if (fou==undefined) { fou = 0; }

var fiv = undefined;
fiv = dv.page("<% tp.date.weekday("YYYY-MM-DD", 4) %>");
if (fiv==undefined) { fiv = 0; }

var six = undefined;
six = dv.page("<% tp.date.weekday("YYYY-MM-DD", 5) %>");
if (six==undefined) { six = 0; }

var sev = undefined;
sev = dv.page("<% tp.date.weekday("YYYY-MM-DD", 6) %>");
if (sev==undefined) { sev = 0; }

const chartData = {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "Panic",
            data: [one.panic, two.panic, thr.panic, fou.panic, fiv.panic, six.panic, sev.panic],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
			fill: true,
			tension: 0.2
        },	{
			label: "Money Spent (£)",
			data: [one["money-spent"], two["money-spent"], thr["money-spent"], fou["money-spent"], fiv["money-spent"], six["money-spent"], sev["money-spent"]],
			backgroundColor: 'rgba(85, 174, 229, 0.2)',
            borderColor: 'rgba(85, 174, 229, 1)',
            borderWidth: 1,
			fill: true,
			tension: 0.2
		}, {
			label: "Prayer",
			data: [one.prayer, two.prayer, thr.prayer, fou.prayer, fiv.prayer, six.prayer, sev.prayer],
			backgroundColor: 'rgba(255, 211, 101, 0.2)',
            borderColor: 'rgba(255, 211, 101, 1)',
            borderWidth: 1,
			fill: true,
			tension: 0.2
		}, {
			label: "Weather (°C)",
			data: [one.weather, two.weather, thr.weather, fou.weather, fiv.weather, six.weather, sev.weather],
			backgroundColor: 'rgba(92, 197, 193, 0.2)',
            borderColor: 'rgba(92, 197, 193, 1)',
            borderWidth: 1,
			fill: true,
			tension: 0.2
		}],
    }
}

window.renderChart(chartData, this.container);
```

```dataview
TABLE WITHOUT ID
	link(file.name) as "Day",
	feeling AS "💭",
	panic AS "🌪️",
	working-on AS "✏️",
	money-spent AS "💸",
	martial-arts AS "🥊",
	weather AS "☀️",
	prayer AS "🕋"
FROM "01 Personal/01.01 Periodic Notes"
WHERE week = "<% tp.date.now("YYYY [Week] WW") %>"
SORT file.name ASC
```

### Journal