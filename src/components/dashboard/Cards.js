import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div className="container_cards my-3">
       <header className="text-md-left text-xs-center">
          <h4>Cards Component</h4>
        </header>

    <div className="row my-4">
    <div className="col-md-3">
      <div className="card-counter primary">
        <i className="fa fa-code-fork"></i>
        <span className="count-numbers">12</span>
        <span className="count-name">Flowz</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter danger">
        <i className="fa fa-ticket"></i>
        <span className="count-numbers">99</span>
        <span className="count-name">Instances</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter success">
        <i className="fa fa-database"></i>
        <span className="count-numbers">75</span>
        <span className="count-name">Data</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter info">
        <i className="fa fa-users"></i>
        <span className="count-numbers">35</span>
        <span className="count-name">Users</span>
      </div>
    </div>

  </div>

</div>


    );
  }
}

export default Cards;
