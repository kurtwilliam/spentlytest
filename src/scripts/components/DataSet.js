import React from 'react';
import data from '../../../data.json';


export default class DataSet extends React.Component{
  constructor() {
    super();
    this.state = {
      // dates: []
    }
    // this.dateFilter = this.dateFilter.bind(this)
  }
  // dateFilter() {
  //   let newDate = function getDate(date) {
  //     let year = data.date.getFullYear();

  //     let month = (1 + data.date.getMonth()).toString();
  //     month = month.length > 1 ? month : '0' + month;

  //     let day = data.date.getDate().toString();
  //     day = day.length > 1 ? day : '0' + day;
      
  //     let newDateData = `${year}-${month}-${day}`
  //     console.log(newDate)
  //   }
  // }
  render() {
    return (<div>
      { data.map((d) => {
        // Calculation of the open rate and click rate
        let openRate = Math.round(((d.opens / d.sent * 100) + 0.00001) * 100) / 100;
        let clickRate = Math.round(((d.clicks / d.sent * 100) + 0.00001) * 100 ) / 100;

        // Set Variables so easier to call upon in component
        let rd = d.redeemed_discounts;
        let fName = rd.name.first;
        let lName = rd.name.last;
        let email = rd.email;
        let code = rd.discount_code;

        let date = new Date(`${d.date}`);

        let year = date.getFullYear();

        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        let newDate = `${year}-${month}-${day}`

        return (
          <div className="data__container" data-newDate={newDate}>
            <div className="container">
              <div className="data__left" key={d.data__left}>
                  <p><strong key={d.name}>{fName}, {lName}</strong></p>
                  <p key={d.email}>{email}</p>
                  <p key={d.code}>{code}</p>
              </div>
              <div className="data__right">
                <div className="data__box__top">
                  <p key={d.roi}>$ {d.roi}</p>
                  <p>Return on Investment</p>
                </div>
                <div className="data__box__bottom">
                  <div className="data__box">
                    <p key={d.openRate}>{openRate}%</p>
                    <p>Open Rate</p>
                  </div>
                  <div className="data__box">
                    <p key={d.clickRate}>{clickRate}%</p>
                    <p>Click Rate</p>
                  </div>
                  <div className="data__box">
                    <p key={d.sent}>{d.sent}</p>
                    <p>Emails Sent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        })
      }
    </div>)
  }
}