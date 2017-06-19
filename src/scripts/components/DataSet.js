import React from 'react';
import data from '../../../data.json';


export default class DataSet extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (<div>
      { data.map((d, i) => {
        // Calculation of the open rate and click rate
        let openRate = Math.round(((d.opens / d.sent * 100) + 0.00001) * 100) / 100;
        let clickRate = Math.round(((d.clicks / d.sent * 100) + 0.00001) * 100 ) / 100;

        // Set variables so easier to call upon in return
        let rd = d.redeemed_discounts;
        let fName = rd.name.first;
        let lName = rd.name.last;
        let email = rd.email;
        let code = rd.discount_code;

        // Make a new date to set as the data-newDate for each element
        let date = new Date(`${d.date}`);

        // Set the year
        let year = date.getFullYear();

        // Set the month
        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        // Set the day
        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        // Add together the new date to get a string that JS will recognize.
        let newDate = `${year}-${month}-${day}`

        return (
          <div className="data__container" data-newDate={newDate} key={i.newDate}>
            <div className="container" key={i.container}>
              <div className="data__left" key={i.data__left}>
                  <p key={i.p}><strong key={i.name}>{fName}, {lName}</strong></p>
                  <p key={i.email}>{email}</p>
                  <p key={i.code}>{code}</p>
              </div>
              <div className="data__right" key={i.data__right}>
                <div className="data__box__top" key={i.data__box__top}>
                  <p key={i.roi}>$ {d.roi}</p>
                  <p>Return on Investment</p>
                </div>
                <div className="data__box__bottom" key={i.data__box__bottom}>
                  <div className="data__box" key={i.data__box__one}>
                    <p key={i.openRate}>{openRate}%</p>
                    <p>Open Rate</p>
                  </div>
                  <div className="data__box" key={i.data__box__two}>
                    <p key={i.clickRate}>{clickRate}%</p>
                    <p>Click Rate</p>
                  </div>
                  <div className="data__box" key={i.data__box__three}>
                    <p key={i.sent}>{d.sent}</p>
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