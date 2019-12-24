
import React, {Component} from 'react';

class Counter extends React.Component { //Counter is a given name
/*
  state = {
    value: this.props.counter.value,
    items: []
    //items: ['coffee', 'milk', 'tea', 'juice', 'wine', 'beer', 'whiskey', 'jinseng']
  };

//EVENT HANDLERS
  handleAddButton = () => { //read notes
    console.log('button clicked', this);
    this.setState({value: this.state.value + 1}); //read notes about setState
  };
*/
  render() {
  //console.log('this: ',this);
  //console.log('this.props ', this.props);

    return (
      <div>

        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button className='btn btn-sm btn-secondary m-2'
                onClick={() => this.props.onIncrement(this.props.counter)}>
          +
        </button>

        <button className='btn btn-sm btn-secondary m-2'
                onClick={() => this.props.onRemove(this.props.counter)}
                >
          -
        </button>

        <button className='btn btn-sm btn-danger m-2'
                onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>

      </div>);
    }

    getBadgeClasses() {
    let btstrpClasses = 'badge m-2 badge-';
    btstrpClasses += this.props.counter.value === 0 ? 'warning' : 'primary';
    console.log(btstrpClasses);
    return btstrpClasses;
  }

  formatCount() {
    const {value} = this.props.counter;
    const x = <h6>zero</h6>;
    return (
      value === 0
      ? x
      : value)
    //if value = 0 then return 'x', otherwise return value value
  }
}//END OF class

export default Counter; //Counter is a give nname
