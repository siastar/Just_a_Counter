import React, {Component} from 'react';
import Counter from './counter';
//import PropTypes from 'prop-types';

class CounterList extends Component {

  render() {
    return (
      <div>
        <button
          className='btn btn-primary btn-sm m-2'
          onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          /*the Counter (intended as component) properties are
            the properties ot the props objects
            (this.props)
            map creates a Counter element for any object */
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onRemove={this.props.onRemove}
            counter={counter}
            >
          </Counter>
          ))
        }
        <button
          className='btn btn-primary btn-sm m-2'
          onClick={this.handleResetButton}>
          Add Counter
        </button>
      </div>
    );
  }
}

export default CounterList;
