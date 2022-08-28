import { Component } from "react";

class SumTransactions extends Component {
  render() {
    const transactions = this.props.transactions;
    let sumOfTransactions = {};
    let newTransactions = [];
    transactions.forEach((transaction) => {
      if (!sumOfTransactions[transaction.category]) {
        sumOfTransactions[transaction.category] = transaction.amount;
      } else sumOfTransactions[transaction.category] += transaction.amount;
    });

    for (let i in sumOfTransactions) {
      newTransactions.push(
        <div className="balance">
          <span>{i}</span>
          {sumOfTransactions[i] > 500 ? (
            <span className="goodbalance"> {sumOfTransactions[i]}</span>
          ) : (
            <span className="badbalance"> {sumOfTransactions[i]}</span>
          )}
        </div>
      );
    }
    return <div className="Total">
        
        {newTransactions.map(t=>t)}</div>;
  }
}

export default SumTransactions;
