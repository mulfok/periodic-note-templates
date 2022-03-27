---
banner: "![[<% tp.date.now("YYYY MMMM") %> Weekly Banner.jpg]]"
banner_icon: 📆
---

# <% tp.date.now("YYYY-MM [Week] WW") %>

[[<% tp.date.now("YYYY [Week] WW", -7) %>|↶ Previous Week]] | [[<% tp.date.now("YYYY [Week] WW", 7) %>|Following Week ↷]]

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
const DAILY_NOTES_PATH = "02 Personal/02.01 Periodic Notes/<% tp.date.now("YYYY") %>/Daily/<%tp.date.now("MM MMMM")%>";
const DATASET_TEMPLATE = {
	label: "Default",
	backgroundColor: 'rgba(255, 99, 132, 0.2)',
	borderColor: 'rgba(255, 99, 132, 1)',
	borderWidth: 1,
	fill: true,
	tension: 0.2
}
const DAY_ATTRIBUTES = new Map([
	['panic', {
		label: 'Panic',
	}],
	['money-spent', {
		label : 'Money Spent (£)',
		backgroundColor: 'rgba(85, 174, 229, 0.2)',
		borderColor: 'rgba(85, 174, 229, 1)',
	}],
	['prayer', {
		label : 'Prayer',
		backgroundColor: 'rgba(255, 211, 101, 0.2)',
		borderColor: 'rgba(255, 211, 101, 1)',
	}],
	['weather', {
		label : 'Weather (°C)',
		backgroundColor: 'rgba(92, 197, 193, 0.2)',
		borderColor: 'rgba(92, 197, 193, 1)',
	}],
]);

const getDaysPages = () => {
	const startOfWeek = dv.date("<% tp.date.now('YYYY-MM-DD') %>").startOf('week'); 
	const getDayPage = dayNum => dv.page(`${DAILY_NOTES_PATH}/${startOfWeek.plus({ days : dayNum }).toISODate()}`);
	return Array.from({length : 7}, (c,i) => getDayPage(i) || 0)
};

const generateDatasets = (map, template) => {
	const newMap = new Map([...map.entries()]);
	const daysPages = getDaysPages();
	const applyDefault = (def, obj) => Object.assign({}, def, obj);
	const addDataChart = (key, obj) => ({...obj, data : daysPages.map(p => p[key])});
	for (let [key, props] of newMap.entries()) {
		newMap.set(key, applyDefault(template, addDataChart(key, props)));
	}
	return [...newMap.values()];
}

const chartData = {
	type: 'line',
	data: {
		labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		datasets: generateDatasets(DAY_ATTRIBUTES, DATASET_TEMPLATE),
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
	martial-arts AS "🥋",
	weather AS "☀️",
	prayer AS "🕋"
FROM "02 Personal/02.01 Periodic Notes"
WHERE week = [[<% tp.date.now("YYYY [Week] WW") %>]]
SORT file.name ASC
```

### Journal
