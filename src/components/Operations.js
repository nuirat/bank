import { Component } from "react";

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0 ,
      vendor: "",
      category: "",
    };
  }
  transactions = (event) => {
    if (event.target.id == "despoit") {
      this.props.transactions(
        this.state.amount,
        this.state.vendor,
        this.state.category,
  
      );
    } else {
      this.props.transactions(
        - this.state.amount,
        this.state.vendor,
        this.state.category,
        
      );
    }
  };
  changeTransctionValues = (event) => {
    if (event.target.id == "Amount") {
      this.setState({ amount: event.target.value });
    } else if (event.target.id == "Vendor") {
      this.setState({ vendor: event.target.value });
    } else {
      this.setState({ category: event.target.value });
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <input
            id="Amount"
            value={this.state.amount>0?this.state.amount:''}
            onChange={this.changeTransctionValues}
            placeholder='amount of money'
          ></input>
          <input
            id="Vendor"
            value={this.state.vendor}
            onChange={this.changeTransctionValues}
            placeholder='the vendor'
          ></input>
          <input
            id="Category"
            value={this.state.category}
            onChange={this.changeTransctionValues}
            placeholder='Category'
          ></input>
        </div>
        <div>
          <button id="despoit" onClick={this.transactions}>
            Deposit
          </button>
          <button onClick={this.transactions}>Withdraw</button>
        </div>
      </div>
    );
  }
}

export default Operations;
