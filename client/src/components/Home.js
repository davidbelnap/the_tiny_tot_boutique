import React, { Component } from 'react';
import { Header, Button, Icon } from 'react-materialize';

class Home extends Component {
  render() {
    return (
    	<div>
	      <h1>The Tiny Tot Boutique</h1>
    		<Button style={styles.button} waves='#E281E8'>Click here to start shopping!</Button>
    	</div>
    );
  }
}

const styles = {
	button: {
		backgroundColor: '#D252DB'
	}
}

export default Home;
