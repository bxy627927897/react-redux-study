import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button, List } from 'antd';
import store from './store'
import { deleteItem, changeInput, addItem } from './action'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  
  deleteItem(index) {
    store.dispatch(deleteItem(index));
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    store.dispatch(changeInput(e.target.value));
  }

  buttonClick() {
    store.dispatch(addItem());
  }
  
  render() {
    return (
      <div className="App" style={{marginTop: '20px'}}>
        <Input 
          placeholder="todo info" 
          style={{width: '300px', margin: '0 20px'}}
          onChange={this.handleInputChange}/>
        <Button type="primary" onClick={this.buttonClick}>Primary</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
          style={{margin: '10px 20px', width: '500px'}}
        />
        {this.state.inputValue}
      </div>
    );
  }
}

export default App;
