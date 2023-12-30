import './Diagram.css'
import DiagramBar from './DiagramBar'

const Diagram = (props) => {

  const dataSetsValues = props.dataSets.map(el=>
  el.value)

  const maxMonthCost = Math.max(...dataSetsValues)

  return (
		<div className='diagram'>
			{props.dataSets.map(dataset => (
				<DiagramBar
          key={dataset.label}
					value={dataset.value}
					maxValue={maxMonthCost}
					label={dataset.label}
				/>
			))}
		</div>
	);

}

export default Diagram