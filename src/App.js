import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input1: '',
      input2: '',
      input3: '',

    };

    this.cancelButton = this.cancelButton.bind(this);
    this.addButton = this.addButton.bind(this);
  };

  updateInput1(value) {
    this.setState({input1: value});
  }

  updateInput2(value) {
    this.setState({input2: value});
  }

  updateInput3(value) {
    this.setState({input3: value});
  }

  addButton() {

  }

  cancelButton = () => {
    this.setState({input1: ''});
    this.setState({input2: ''});
    this.setState({input3: ''});
  }


  render() {
    return (
      <div className="App">
        <Form />
        <Header />
        <Dashboard />
        <input placeholder='name' onChange={ ( e ) => this.updateInput1( e.target.value ) } value={ this.state.input1 }  />
        <input placeholder='price' onChange={ ( e ) => this.updateInput2( e.target.value ) } value={ this.state.input2 } />
        <input placeholder='imageurl' onChange={ ( e ) => this.updateInput3( e.target.value ) } value={ this.state.input3 } />
        {/* <input type="button" name="cancelButton" value="Cancel" onClick={this.cancelButton} /> */}
        <button>{this.addButton} Add</button> 
        <input type="button" name="cancelButton" value="Cancel" onClick={this.cancelButton} />
      </div>
    );
  }
}

export default App;
