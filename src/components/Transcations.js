
import { Component } from 'react';
import Transcation from './Transcation';

class Transcations extends Component  {

  render()
  {
    return (
      <div className="transactions">
       {this.props.transcations.map(t=><Transcation transcation={t} deleteTransaction={this.props.deleteTransaction}/>)}
      </div>
    );
  }
}

export default Transcations;
