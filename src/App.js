import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

  //TODO: some
  // FIXME: some

//"#449eff"  "#51abff"  "#4ba2ff"
function App() {
	const costs = [
		{
			date: new Date(2021, 2, 12),
			description: 'Холодильник',
			amount: 999.99,
		}, 
		{
			date: new Date(2021, 11, 25),
			description: 'MackBook',
			amount: 1254.72,
		},
		{
			date: new Date(2021, 3, 12),
			description: 'Джинсы',
			amount: 49.99,
		},
	];

	return (
		<div>
			<NewCost/>
			<Costs costs={costs} />
		</div>
	);
}

export default App;
