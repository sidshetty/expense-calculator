import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
	const selectedValueHandler = (event) => {
		props.onSelectedFilter(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter By Year</label>
				<select value={props.selectedYear} onChange={selectedValueHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
