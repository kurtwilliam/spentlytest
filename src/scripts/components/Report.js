import React from 'react';
import data from '../../../data.json';

export default class Report extends React.Component{
  constructor() {
    super();
    this.state = {
      fromDate: 0,
      toDate: 0
    }
    this.dateInputFrom = this.dateInputFrom.bind(this);
    this.dateInputTo = this.dateInputTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  dateInputFrom(e){
    this.setState({fromDate: e.target.value});
  }
  dateInputTo(e){
    this.setState({toDate: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();

    let dataDiv = document.querySelectorAll(".data__container");
    let fromDate = this.state.fromDate;
    let toDate = this.state.toDate;


    dataDiv.forEach(function(el) {
      let data = el.getAttribute('data-newDate')
      
      if ( data > fromDate && data < toDate ) {
        el.classList.remove('hidden')
      } else {
        el.classList.add('hidden')
      }
    })

    function showTip() {
      let hiddenElements = document.querySelectorAll(".hidden");
      let tip = document.getElementById("tip"); 

      if ( hiddenElements.length >= 100 ) {
        tip.classList.remove('hidden')
        console.log('heck yes')
      } else {
        tip.classList.add('hidden')
      }
    }
    showTip();
  }
  render() {
    return (
      <div>
        <section className="report">
          <div className="container">
            <h1>Reports</h1>
            <form action="" className="form" onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="from">From:</label>
                <input required className="form__input" type="date" placeholder="YYYY-MM-DD" pattern="[0-9-]{10,10}" name="from" onChange={this.dateInputFrom} min="2017-01-01" max="2017-07-01" />
              </div>
              <div>
                <label htmlFor="to">To:</label>
                <input required className="form__input" type="date" placeholder="YYYY-MM-DD" pattern="[0-9-]{10,10}" name="to" onChange={this.dateInputTo} min="2017-01-01" max="2017-07-01" />
              </div>
              <button type="submit" className="btn">filter!</button>
            </form>
          </div>
          <div id="tip" className="hidden">
            <div className="container">
              <p>Sorry, no data between the date range {this.state.fromDate} - {this.state.toDate}. Try selecting dates between 2017-01-01 - 2017-06-12!</p>
            </div>
          </div>
        </section>
    </div>)
  }
}