import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

const INITIAL_COSTS = [
	{
		date: new Date(2021, 2, 12),
		description: 'Холодильник',
		amount: 999.99,
		id:'c1'
	}, 
	{
		date: new Date(2022, 11, 25),
		description: 'MackBook',
		amount: 1254.72,
		id:'c2'
	},
	{
		date: new Date(2021, 3, 12),
		description: 'Джинсы',
		amount: 49.99,
		id:'c3'
	},
];

function App() {

	const [costs, setCosts] = useState(INITIAL_COSTS)
	
		const addCostHandler = cost => {
			setCosts(prevCosts=>{
				return [cost, ...prevCosts]

			})
		};

	return (
		<div>
			<NewCost onAddCost={addCostHandler}/>
			<Costs costs={costs} />
		</div>
	);
}

export default App;

 //TODO: some
  // FIXME: some
