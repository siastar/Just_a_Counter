import React, {Component} from 'react';
import NavBar from './components/navbar';
import CounterList from './components/counterList';
import './App.css';
//import logo from './logo.svg';

class App extends Component {

  state = {
    counters: [
      {
        id: 1,
        value: 11,
        selected: true,
        available: 0,
        price: 16.00
      }, {
        id: 2,
        value: 22,
        selected: true,
        available: 6,
        price: 42.00
      }, {
        id: 3,
        value: 33,
        selected: true,
        available: 1,
        price: 78.00
      }, {
        id: 4,
        value: 44,
        selected: true,
        available: 8,
        price:61.00
      }, {
        id: 5,
        value: 55,
        selected: true,
        available: 2,
        price:11.00
      },
    ]
  };

  handleIncrementButton = (counter) => {

//     console.log('counter:', counter, '\
// arrow function **counter** parameter is an object which comes from event riser \
// onIncrement that passes it to the event handler \
// by picking it according to the pressed button. \
// This way the event handler ˝knows˝ on which counter we pressed the button and \
// by consequence on which object it needs to make changes (increase the value in this case)' );

    const counters = [...this.state.counters];
//     console.log('counters: ', counters, '\
// \
// **counters** is a new array clone of *this.state.counters* and it will be \
// actually modified instead of **this.state.counters** because React people \
// N-E-V-E-E-E-E-R directly modify the original **this.state.stuff** object, we need \
// to use the **setState** method to update the **this.state** ');
      // THIS APPROACH IS BECAUSE WE'RE HANDLING AN ARRAY WHICH IS A PROPERTY IN THE STATE
      // SO WE CLONE THE FULL ARRAY, WE HANDLE IT THE WAY WE NEED AND IN THE END WE REPLACE THE
      // FULL MODIFIED ARRAY IN THE STATE IN ORDER TO AVOID DELAYS AND PARTIAL MODIFICATION
      // TO CREATE UNWANTED SITUATIONS

      
    const index = counters.indexOf(counter);
//     console.log('index: ', index, '\
// **index** takes its value from the cloned array **counters** by searching the position of \
// **counter** object parameter, into the cloned array **counters** \
// (so it depends by the pressed button because it comes from \
// **counter** object passed as parameter to the the event handler. \
// \
// Remember that **index** starts by zero so if we pick the 1st object in \
// the array **index** will be zero, if we pick the 2nd object index will be 1 \
// and so on)');

    counters[index] = {...counter};
//     console.log('counters.index: ', counters[index], '\
// **counters[index]** is the object at the *index* position in the \
// cloned array **counters** and here it is set up as a clone of the **counter** \
// parameter object so at this point we reached the counter among all the ones\
// into the counters array, whosestate we need to modify (increase value)   ');

    counters[index].value++;
//     console.log('increased **counters[index]** : ', counters[index], '\
// once we identified the counter whose value we need to modify, we just increase \
// it by 1, this modifies the value yes, but won*t update the visible state in the \
// the browser');

    this.setState({ counters });
//     console.log('this.state.counters: ', this.state.counters);
//     console.log('\
// now the original state **this.state** has been altered \
// by using the **setState** method and passing it the full cloned array \
// with the modified object');

  };

  handleRemoveButton = (counter) => {

    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);

    counters[index] = {...counter};

    counters[index].value--;

    this.setState({ counters });

  };

  handleResetButton = () => {

    console.log('reset handled');
    const counterReset = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    console.log(counterReset);
    this.setState({counters: counterReset}
    );
  }
    /*it filters the "counters" array in the "this.state" object and returns a new
    array made of the same "counters" elements all with value attribute = 0.
    then replaces the whole array

    trick: if we use counters instead of counterReset the code can
    be simplified

    const counters = this.state.counters.filter(c => c.value = 0);
    this.setState({counters});
    */

  handleDelButton = (counterId) => {
    //see handleAddButton in counter.jsx for references on this syntax
    console.log('Delete button called for Counter number ', counterId);
    const remainingCounters = this.state.counters.filter(c => c.id !==counterId);
    this.setState({counters: remainingCounters});
  }
    /*it filters the "counters" array in the "state" object and returns a new
    array made of all "counters" elements excluded the elements identified by
    counterId. Once finished the new created array replaces the original one in
    memory.

    "c" is the temporary array used for calculation.

    trick: if we use counters instead of remainingCounters the code can
    be simplified

    const counters = this.state.counters.filter(c => c.id !==counterId);
    this.setState({counters});
    */

  render () {
    return(
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <CounterList
            counters={this.state.counters}
            onReset={this.handleResetButton}
            onIncrement={this.handleIncrementButton}
            onRemove={this.handleRemoveButton}
            onDelete={this.handleDelButton} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
