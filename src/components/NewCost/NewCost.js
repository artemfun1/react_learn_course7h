import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'

function NewCost(props) {

	const[isFormVisible, setIsFormVisible] = useState(false)

	const saveCostDataHandler = inputCostData => {
		const costData = {
			...inputCostData,
			id: Math.random().toString(),

		};
		 props.onAddCost(costData);
		 setIsFormVisible(false)
	};

const inputCostDataHendler = () =>{
	setIsFormVisible(true)
}

const cancelCostHandler = () => {
	setIsFormVisible(false)
}

	return (
		<div className='new-cost'>
			{!isFormVisible && <button onClick={inputCostDataHendler}>Добавить новый расход</button>}
			{isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
			
		</div>
	);
}

export default NewCost;
