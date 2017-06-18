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
                <input required className="form__input" type="text" placeholder="YYYY-MM-DD" pattern="[0-9-]{10,10}" name="from" onChange={this.dateInputFrom} />
              </div>
              <div>
                <label htmlFor="to">To:</label>
                <input required className="form__input" type="text" placeholder="YYYY-MM-DD" pattern="[0-9-]{10,10}" name="to" onChange={this.dateInputTo} />
              </div>
              <button type="submit" className="btn">filter!</button>
            </form>
          </div>
        </section>
    </div>)
  }
}