import { useState } from 'react';
import Card from '../UI/Card';
import './Costs.css';
import CostsFilter from './CostsFilter';
import CostsList from './CostsList';
import CostsDiagram from './CostsDiagram'


function Costs(props) {
	const [selectedYear, setSelectedYear] = useState('2021');

	const yearChangeHandler = year => {
		setSelectedYear(year);
	};

	const filteredCosts = props.costs.filter(
		el => el.date.getFullYear() === +selectedYear
	);

	return (
		<Card className='costs'>
			<CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
			<CostsDiagram costs={filteredCosts}/>
			<CostsList selectedYear={selectedYear} costs={filteredCosts} />
		</Card>
	);
}

export default Costs;
