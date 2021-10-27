import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState('2021');

	const filterSelectedHandler = (filteredYear) => {
		setFilteredYear(filteredYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter onSelectedFilter={filterSelectedHandler} selectedYear={filteredYear} />
				<ExpenseChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
