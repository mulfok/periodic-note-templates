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

const getDaysPages = () => {
	const startOfWeek = DateTime.now().startOf('week'); 
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