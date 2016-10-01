import React from 'react';
import CalcOutput from './CalcOutput';
import CalcNum from './CalcNum';
import CalcOps from './CalcOps';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';

class Calculator extends React.Component {
	render() {
		return (
			<div>

				<Card shadow={0} style={{ width: '262px', margin: '0 auto' }} className="calculator"> 

					<CardTitle>
						<CalcOutput />
					</CardTitle>
					<CardActions className="functions">
						<CalcOps />					
					</CardActions>
					<CardText className="numbers">
						<CalcNum />
					</CardText>

				</Card>

			</div>
		)
	}
}

export default Calculator;