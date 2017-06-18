import React from 'react';
import data from '../../../data.json';

export default class DataSet extends React.Component{
  constructor() {
    super();
    this.state = {
      // totalROI: [],
      // avgEmailsSent: [],
      // avgOpenRate: [],
      // avgClickRate: []
      // date
    }
  }
    // Send each stat to the relevant array
    // Update state at the end of each info push
    // Once all pushes are completed add together/average

    // let ROI = this.state.totalROI;

    // console.log(ROI);

    // this.setState({
      // totalROI: this.state.totalROI + data.roi,
      // avgEmailsSent: this.state.avgEmailsSent + data.sent,
      // avgOpenRate: this.state.avgOpenRate + openRate,
      // avgClickRate: this.state.avgClickRate + clickRate
    // })  

    // console.log(this.state.totalROI);
  render() {
    return (<div>
      { data.map((data) => {
        let openRate = Math.round(((data.opens / data.sent * 100) + 0.00001) * 100) / 100;
        let clickRate = Math.round(((data.clicks / data.sent * 100) + 0.00001) * 100 ) / 100;
        let rd = data.redeemed_discounts;
        let fName = rd.name.first;
        let lName = rd.name.last;
        let email = rd.email;
        let code = rd.discount_code;

        // this.summaryStats();

        // this.setState({totalROI:[...this.state.totalROI, data.roi]});

        // this.setState({
          // totalROI: this.state.totalROI + data.roi,
          // avgEmailsSent: this.state.avgEmailsSent + data.sent,
          // avgOpenRate: this.state.avgOpenRate + openRate,
          // avgClickRate: this.state.avgClickRate + clickRate
        // })  

        // console.log(this.state.totalROI);

        return (
          <section id="data__section">
            <div className="data__top">
              <div className="container">
                <div className="nameEmail">
                  <p><strong key={rd.name}>{fName}, {lName}</strong></p>
                  <p key={email}>{email}</p>
                </div>
                <p key={code}>{code}</p>
              </div>
            </div>
            <div className="data__bottom">
              <div className="container">
                <div className="data__box">
                  <p key={data.roi}>$ {data.roi}</p>
                  <p>Return on Investment</p>
                </div>
                <div className="data__box">
                  <p key={openRate}>{openRate}%</p>
                  <p>Open Rate</p>
                </div>
                <div className="data__box">
                  <p key={clickRate}>{clickRate}%</p>
                  <p>Click Rate</p>
                </div>
                <div className="data__box">
                  <p key={data.sent}>{data.sent}</p>
                  <p>Emails Sent</p>
                </div>
              </div>
            </div>
          </section>
        )
        })
      }
    </div>)
  }
  componentDidMount() {
    
  }
}