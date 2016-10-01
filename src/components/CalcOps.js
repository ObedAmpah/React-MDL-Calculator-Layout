import React from 'react';
import { FABButton } from 'react-mdl';
 
class CalcOps extends React.Component {
	render() {
		return (
			<div>
				<div>

				<FABButton mini colored ripple className="operator">c</FABButton>
				<FABButton mini colored ripple className="operator">del</FABButton>
				<FABButton mini colored ripple className="operator">&divide;</FABButton>
				<FABButton mini colored ripple className="operator">&times;</FABButton>
				<FABButton mini colored ripple className="operator">-</FABButton>
				<FABButton mini colored ripple className="operator">+</FABButton>
				<FABButton mini colored ripple className="operator">=</FABButton>

				</div>
			</div>
		)
	}
}

export default CalcOps;