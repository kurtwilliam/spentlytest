import React from 'react';
import data from '../../../data.json';


export default class DataSet extends React.Component{
  constructor() {
    super();
    this.dataSort = this.dataSort.bind(this)
  }
  dataSort() {
    let dateOrder = data.date.sort((a,b) => {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    });
    // console.log(dateOrder)
    console.log(data.date);
  }
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

        return (
          <section className="data__section">
            <div className="container">
              <div className="data__left">
                  <p><strong key={rd.name}>{fName}, {lName}</strong></p>
                  <p key={email}>{email}</p>
                  <p key={code}>{code}</p>
              </div>
              <div className="data__right">
                  <div className="data__box__top">
                    <p key={data.roi}>$ {data.roi}</p>
                    <p>Return on Investment</p>
                  </div>
                  <div className="data__box__bottom">
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
            </div>
          </section>
        )
        })
      }
    </div>)
  }
  componentDidMount() {
    this.dataSort();
  }
}