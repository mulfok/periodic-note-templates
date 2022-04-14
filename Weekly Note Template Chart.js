const DAILY_NOTES_PATH = dv.current().file.folder;
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

const datasets = (() => {
	const startOfWeek = dv.date("<% tp.date.now('YYYY-MM-DD') %>").startOf('week'); 
	const getDayPage = dayNum => dv.page(
			`${DAILY_NOTES_PATH}/${startOfWeek.plus({days: dayNum}).toISODate()}`
		);
	const daysPages = Array.from({length : 7}, (c,i) => getDayPage(i) || 0);
	const newMap = new Map([...DAY_ATTRIBUTES.entries()]);
	
	for (let [key, props] of newMap.entries()) {
		newMap.set(key, Object.assign(
			{}, DATASET_TEMPLATE, props, {data: daysPages.map(p => p[key])}
			));
	}
	
	return [...newMap.values()];
})();

const chartData = {
	type: 'line',
	data: {
		labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		datasets,
	}
}

window.renderChart(chartData, this.container);