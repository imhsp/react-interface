import React, {Component} from 'react';
import '../css/App.css';

import AddFacts from './AddFacts';
import SearchFacts from './EditFacts';
import ListFacts from './ListFacts';

import {without} from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myFacts: [],
      formDisplay: false,
      lastIndex: 0
    }

    this.deleteFacts = this.deleteFacts.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addFacts = this.addFacts.bind(this);
  }

  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  addFacts(apt){
let tempApts = this.state.myFacts;
apt.aptId = this.state.lastIndex;
tempApts.unshift(apt);
this.setState({
  myFacts: tempApts,
  lastIndex: this.state.lastIndex + 1
});

  }

  deleteFacts(apt){
    let tempApts = this.state.myFacts;
    tempApts = without(tempApts, apt);

    this.setState({
      myFacts: tempApts
    });
  }

  componentDidMount(){
   //fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10', { mode: 'opaque'})
    fetch('./cats.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex + 1})
      return item;
    });

    this.setState({
      myFacts: apts
    });

    });

    
  }

  render(){ 
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            < AddFacts 
            formDisplay = {this.state.formDisplay}
            toggleForm = {this.toggleForm}
            addFacts = {this.addFacts}
            />
            < ListFacts facts={this.state.myFacts}
            deleteFacts = {this.deleteFacts}/>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
  }
}

export default App;
