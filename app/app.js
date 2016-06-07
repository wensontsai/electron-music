import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// import Search from './components/search.component';
// import Details from './components/details.component';
// import Player from './components/player.component';
// import Progress from './components/progress.component';
// import Footer from './components/footer.component';
import AppContainer from './containers/app.container';

class App extends Component {
	render () {
		return (
      <div>
        <AppContainer />
      </div>
    );
	}
}

ReactDOM.render( 
	<App />,
	document.getElementById('content')
);