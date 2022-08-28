import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Transcations from "./components/Transcations";
import Operations from "./components/Operations";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SumTransactions from "./components/SumTransactions";

class App extends Component {
  transactions = (amount, vendor, category) => {
    axios
      .post("http://localhost:4200/transaction", {
        amount: amount,
        category: category,
        vendor: vendor,
      })
      .then((response) => {
        
        this.getTransactions();
      });
  };
  async getTransactions() {
    let response = await axios.get("http://localhost:4200/transactions");
    this.setState({ transcations: response.data });
  }

  async componentDidMount() {
    await this.getTransactions();
  }
  deleteTransaction = async (transcation) => {
    console.log(transcation);
    await axios.delete(`http://localhost:4200/transaction/${transcation.id}`);
    await this.getTransactions();
  
  };
  constructor() {
    super();
    this.state = {
      transcations: [],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <Router>
          <nav>
            <a href="/">Home</a> | <a href="/transaction">Add transaction</a> | <a href="/sum">Total</a>
          </nav>
          </Router>
        </div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Transcations
                  transcations={this.state.transcations}
                  deleteTransaction={this.deleteTransaction}
                />
              }
            />
            <Route
              path="/transaction"
              element={<Operations transactions={this.transactions} />}
            />
             <Route 
              path="/sum"
              element={<SumTransactions transactions={this.state.transcations} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
