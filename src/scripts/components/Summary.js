import React from 'react';
import data from '../../../data.json';

export default class Report extends React.Component{
  constructor() {
    super();
    this.state = {
      totalROI: 0,
      avgROI: 0,
      avgEmailsSent: 0,
      avgOpenRate: 0,
      avgClickRate: 0
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

    // Set the states for everything
    this.setState({
      totalROI,
      avgROI,
      avgEmailsSent,
      avgOpenRate,
      avgClickRate
    })
  }
  render() 
    {
      return (
        <div>
          <section className="summary">
            <div className="container">
              <div className="summary__top">
                <div className="summary__box">
                  <p key={totalROI}>$ {this.state.totalROI}</p>
                  <p>Total ROI</p>
                </div>
                <div className="summary__box">
                  <p key={avgROI}>$ {this.state.avgROI}</p>
                  <p>Avg. ROI/customer</p>
                </div>
              </div>
              <div className="summary__bottom">
                <div className="summary__box">
                  <p key={avgEmailsSent}>{this.state.avgEmailsSent}</p>
                  <p>Avg. Emails Sent</p>
                </div>
                <div className="summary__box">
                  <p key={avgOpenRate}>{this.state.avgOpenRate} %</p>
                  <p>Avg. Open Rate</p>
                </div>
                <div className="summary__box">
                  <p key={avgClickRate}>{this.state.avgClickRate} %</p>
                  <p>Avg. Click Rate</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
  componentDidMount() {
    this.summaryStats();
  }
}