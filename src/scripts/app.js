import React from 'react';
import ReactDOM from 'react-dom';
import DataSet from './components/DataSet.js';
import data from '../../data.json';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
		  totalROI: 0,
		  avgROI: 0,
		  avgEmailsSent: 0,
		  avgOpenRate: 0,
		  avgClickRate: 0,
		  // date
		}
  		this.summaryStats = this.summaryStats.bind(this);
	}
	summaryStats(){
		// Calculate total ROI and avg ROI

		// set var ROI equal to empty array
		let ROI = []

		// push all of the ROI data from JSON file to empty roi array
		data.map((data) => {
			ROI.push(data.roi);
		})

		// turn array items from strings to numbers
		let newROI = ROI.map((x) => { 
		   return Number(x); 
		})

		// add together each number to get a total
		let reduceROI = newROI.reduce((num1, num2) => num1 + num2, 0)

		// Round the total to two decimals - new totalROI
		let totalROI = Math.floor(reduceROI * 100) / 100;

		// get average return by dividing the total amount of return by the number of items in the newROI array
		let avgROI = totalROI / newROI.length

		// Round the total to two decimals - new avgROI
		avgROI = Math.floor(avgROI * 100) / 100;

		// Calculate avgEmailsSent, avgOpenRate and avgClickRate

		// set empty arrays for each
		let emailsSent = []
		let openRate = []
		let clickRate = []

		// push all of the data from JSON file to empty arrays
		data.map((data) => {
			// push sent data to empty array
		 	emailsSent.push(data.sent);

		 	// calculate openRate for each and round
		 	let dataOpenRate = Math.round(((data.opens / data.sent * 100) + 0.00001) * 100) / 100;
		 	// push openRate data to empty array
		 	openRate.push(dataOpenRate);

		 	// calculate clickRate for each and round
		 	let dataClickRate = Math.round(((data.clicks / data.sent * 100) + 0.00001) * 100 ) / 100;
		 	// push clickRate data to empty array
		 	clickRate.push(dataClickRate);
		});

		// turn array items from strings to numbers
		let newEmailsSent = emailsSent.map((x) => { 
		   return Number(x); 
		})
		let newOpenRate = openRate.map((x) => { 
		   return Number(x); 
		})
		let newClickRate = clickRate.map((x) => { 
		   return Number(x); 
		})

		// add together each number to get a total
		let reduceEmails = newEmailsSent.reduce((num1, num2) => num1 + num2, 0);
		let reduceOpen = newOpenRate.reduce((num1, num2) => num1 + num2, 0);
		let reduceClick = newClickRate.reduce((num1, num2) => num1 + num2, 0);

		// Round the total to two decimals - new totalROI
		let totalEmails = Math.floor(reduceEmails * 100) / 100;
		let totalOpen = Math.floor(reduceOpen * 100) / 100;
		let totalClick = Math.floor(reduceClick * 100) / 100;

		// get average by dividing the total amount by the number of items in the array
		let avgEmailsSent = totalEmails / newEmailsSent.length;
		let avgOpenRate = totalOpen / newClickRate.length
		let avgClickRate = totalClick / newOpenRate.length

		// Round the total to two decimals - new states!
		avgEmailsSent = Math.floor(avgEmailsSent * 100) / 100;
		avgOpenRate = Math.floor(avgOpenRate * 100) / 100;
		avgClickRate = Math.floor(avgClickRate * 100) / 100;

		console.log(avgEmailsSent)
		console.log(avgOpenRate)
		console.log(avgClickRate)

		this.setState({
			totalROI,
			avgROI,
			avgEmailsSent,
			avgOpenRate,
			avgClickRate
		})
	}
	render(){
		return (
			<div>
				<header className="site-header">
					<div className="container">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.58 126.36">
							<title>logo</title>
							<path d="M107.66,40.36c-8.2,0-13.5,3.57-18.26,8.46V41.42H69.69V51.2h8.87v63.64H69.69v9.52h30.44v-9.52H89.93V93.41a26,26,0,0,0,16.67,6.08c16.14,0,27.65-13.49,27.65-29.9C134.25,52.27,122.61,40.36,107.66,40.36Zm-2.38,49.22a24,24,0,0,1-15.35-5.42V57.55c4.23-4.23,9.12-7.27,15.61-7.27,9.66,0,16.93,7.54,16.93,19.44S114.94,89.57,105.28,89.57Z" style={{fill: 'white'}}></path>
							<path d="M252.79,59.54a23.29,23.29,0,0,0-2.91-11.91c-2.9-4.49-7.79-7.27-14.95-7.27-8.21,0-15.34,5.16-20.77,11V41.42H194.44V51.2h8.87V88.92h-8.87v9.52H223V88.92h-8.46V59.41c4.9-4.9,10.85-8.6,17.06-8.6,4.11,0,6.88,1.46,8.47,4.5a14.26,14.26,0,0,1,1.32,6.75V88.92h-8.46v9.52h28.71V88.92h-8.87V59.54Z" style={{fill: 'white'}}></path>
							<path d="M165.74,40.36c-17.34,0-28.32,13.76-28.32,29.77,0,17.46,12.44,29.37,30.83,29.37,7.8,0,15.08-1.71,21-5.42l0.92-10.46c-6.74,3.84-13,6.09-20.24,6.09-11.11,0-19.05-5.29-20.64-16.14h42.73a41.35,41.35,0,0,0,.53-6.09C192.6,52.93,183.33,40.36,165.74,40.36ZM149.33,65.1c1.45-10.32,8.47-15.35,16.14-15.35,9.66,0,15.21,6.22,15.74,15.35H149.33Z" style={{fill: 'white'}}></path>
							<path d="M357.06,41.42v9.39h9.13L351.11,84.68c0.13,0-14.82-33.87-14.82-33.87H345V41.42H317.24V51.2h7.41l21,44.19-3.84,7.94c-1.32,2.65-2.51,4.77-3.57,6.49-2.12,3-4,4.5-5.83,5.16a6.61,6.61,0,0,0-6.22-4.76c-3.43,0-6.22,2.38-6.22,6.49,0,4.5,4.51,8.07,10.85,8.07,5.82,0,10.72-3,14.95-8.6a57.73,57.73,0,0,0,4.5-7.67L377.18,51.2h7.4V41.42H357.06Z" style={{fill: 'white'}}></path>
							<path d="M321.58,98.44V88.92h-9.13V1.59H291.81v9.79h9.26V88.92H284.65a5.5,5.5,0,0,1-4.94-2.52,10.25,10.25,0,0,1-.8-4.36V51.2h17.34V41.42H278.9V23.69l-11.38,4.63v13.1H256.81V51.2h10.72V84a20,20,0,0,0,1.71,8.33c2.52,4.9,7.41,6.09,13.77,6.09,0.65,0,1.29,0,1.91,0h6.89v0h29.77Z" style={{fill: 'white'}}></path>
							<path d="M29.4,55.69l4.95-11.15c-5.31-2.82-8.83-6.27-8.83-11.86,0-7.28,5.82-12.44,15.47-12.44a28.35,28.35,0,0,1,4,.29l4.39-9.89a40,40,0,0,0-8.26-.85C24.33,9.8,13.48,20,13.48,33.61,13.48,45.16,19.74,51,29.4,55.69Z" style={{fill: 'white'}}></path>
							<path d="M60.58,36.25c4.23,0,7.67-3.18,7.67-8.59,0-5.19-3.45-9.94-9-13.25L52.59,29.47A7.68,7.68,0,0,0,60.58,36.25Z" style={{fill: 'white'}}></path>
							<path d="M44.06,48.73l-4.89,11,1.17,0.44c9.27,3.44,17.2,7.28,17.2,15.48,0,8.6-6.75,13.76-17.33,13.76a29.31,29.31,0,0,1-13-2.74l-4.3,9.72a40.38,40.38,0,0,0,17,3.6c17.07,0,29.5-9.39,29.5-25.27C69.44,59.69,58.6,54.19,44.06,48.73Z" style={{fill: 'white'}}></path>
							<path d="M21.85,72.72a8.39,8.39,0,0,0-3.74-.87c-4.63,0-7.94,3.58-7.94,9.13a14,14,0,0,0,4,9.13Z" style={{fill: 'white'}}></path><path d="M0,122L54.11,0l9.66,4.24L9.66,126.36Z" style={{fill: '#3c9'}}></path>
						</svg>
						<a href="http://www.kurtwilliam.com">Made by Kurt</a>
					</div>
				</header>
				<section className="report">
					<div className="container">
						<h1>Reports</h1>
						<form action="" className="form">
							<div>
								<label htmlFor="from">From:</label>
								<input className="form__input" type="text" placeholder="YYYY-MM-DD" name="from" />
							</div>
							<div>
								<label htmlFor="to">To:</label>
								<input className="form__input" type="text" placeholder="YYYY-MM-DD" name="to" />
							</div>
						</form>
					</div>
				</section>
				<section className="summary">
					<div className="container">
						<div className="summary__top">
							<div className="summary__box">
								<p>$ {this.state.totalROI}</p>
								<p>Total ROI</p>
							</div>
							<div className="summary__box">
								<p>$ {this.state.avgROI}</p>
								<p>Avg. ROI/customer</p>
							</div>
						</div>
						<div className="summary__bottom">
							<div className="summary__box">
								<p>{this.state.avgEmailsSent}</p>
								<p>Avg. Emails Sent</p>
							</div>
							<div className="summary__box">
								<p>{this.state.avgOpenRate} %</p>
								<p>Avg. Open Rate</p>
							</div>
							<div className="summary__box">
								<p>{this.state.avgClickRate} %</p>
								<p>Avg. Click Rate</p>
							</div>
						</div>
					</div>
				</section>
				<DataSet />
			</div>
		)
	}
	componentDidMount(){
		this.summaryStats();
	}
}

ReactDOM.render(<App />, document.getElementById('app'));