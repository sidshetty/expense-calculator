import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
	{
		/* taking props in chart so that this component can be reused and it'll output any kind of data recieved as chart instead of statically just adding months */
	}
	const valueArray = props.dataPoints.map((datapoint) => datapoint.value);
	//return datapoint.value for each datapoint in new array
	const maxValue = Math.max(...valueArray);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} />
			))}
		</div>
	);
};

export default Chart;
