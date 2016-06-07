import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';


class App extends Component {
	render () {
		return (
      <div>
        <Search />
        <Details title={'Track title'} />
        <Player />
      </div>
    );
	}
}

ReactDOM.render( 
	<App />,
	document.getElementById('content')
);