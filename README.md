
a simple counter made with React
it can run locally with npm start

what's going on here ?

************ LEVEL 1 ************ 

after create-react-app did its things we have something like

app-folder
  |-node_modules
  |-public
  |-src
  |packaje.json
  |package-lock.json


in public/index.html there is the following line

  <div id="root"></div>

which contains all the React interface.

this div is static and root picks info from src/index.js which contains
a React method that targets this index.html file

ReactDOM.render(<h1>hallo sword!</h1>, document.getElementById('root'));

--------------------------------
/src/index.js
     |
     |
     V
/public/index.html
--------------------------------

that means

--------------------------------
ReactDOM.render(<h1>hallo sword!</h1>, document.getElementById('root'));
	     |
	     |
     	     V
<div id="root"></div>
--------------------------------

but instead of a static element like <h1>hallo sword!</h1>

it is possible to create a generic dinamic element to render and then write


ReactDOM.render(<Component />, document.getElementById('root'));

(where Component is just a given name)


Component is a piece of code stored in another file.
React allows to create a complex interfaces made of multiple elements called Components.

for convention all components are stored in a folder called "/components" that is not standard created by create-react-app so it needs to be made up

app-folder
  |-node_modules
  |-public
  |-src
  |-components
  |packaje.json
  |package-lock.json

components contains .jsx files (there are different solution it seems
but for the moment let use .jsx)

jsx is a mix of js and html and looks like

-----------------------------------------
import React , {Component} from 'react';

class Counter extends React.Component {
  render () {
      //React.createElement();
      return  (<React.Fragment>

                <h1> stuff </h1>
		<p> other stuff </p>
 		<ul>
  		  <li>Coffee</li>
  		  <li>Tea</li>
  		  <li>Milk</li>
		</ul>
		<div>
		  <button>a button </button>
		  <button>another button </button>
		  <button>yet another button </button>
		</div>
		<p> whatever </p>
		<p> whatever else and so on and on and on... </p>

              </React.fragment>);
  }
}

export default Counter;
------------------------------------------
that means

return (<React.fragment>
	....whatever HTML code we need
        </React.fragment>);

------------------------------------------


************ LEVEL 2 ************ 

instead oh hardcoding stuff into


return (<React.fragment>
	  <p> hardcoded stuff </P>
        </React.fragment>);

it is obviously possible to dinamically handle stuff:

1st thing we need to add a "state" object which will contain all the
information that this component needs in order to work so:

import React , {Component} from 'react';

class Counter extends React.Component { //Counter is a given name

  state = { prop1: '1st property',
            prop2: '2nd property',
            prop3: '3rd property'
            };

  render () {
      //React.createElement();
      return (<React.Fragment>
                <span> {this.state.prop1}</span>
                <span> {this.state.prop2}</span>
                <span> {this.state.prop3}</span>
              </React.Fragment>);
  }
}

this way we can render the properties defined in the state for any purpose.

 
************ LEVEL 3 ************ 

---------------------------------------------------

class Counter extends React.Component { //Counter is a given name
  state = { count: <h1>10000</h1>       // you can use jsx in state
            };
---------------------------------------------------
---------------------------------------------------
  formatCount() {
    const { count } = this.state;
    return (count === 0 ? <h1>zero</h1> : count) 
//you can use jsx directly 
//if count = 0 return "zero" otherwise return count value
---------------------------------------------------




---------------------------------------------------
  formatCount() {
    const { count } = this.state;
    const x = <h1>zero</h1>; // you can use jsx 
    return (count === 0 ? x : count)
    //if count = 0 return "zero" otherwise return count value
---------------------------------------------------








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
