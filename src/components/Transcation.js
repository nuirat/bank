import { Component } from "react";

class Transcation extends Component {
  deleteTransaction=()=>{
    this.props.deleteTransaction({amount:this.props.transcation.amount,vendor:this.props.transcation.vendor,category:this.props.transcation.category,id:this.props.transcation._id})
  }
  render() {
    return <div className="transaction">

        <div>Vendor: {this.props.transcation.vendor}</div>
        {this.props.transcation.amount>0?<div className="goodbalance">{this.props.transcation.amount}$</div>:<div className="badbalance">{this.props.transcation.amount}$</div>}
        <div> Category: {this.props.transcation.category}</div>
        <button onClick={this.deleteTransaction}>Delete</button>
    </div>;
  }
}

export default Transcation;
