import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
    	<div>
	      <Header as='h2' textAlign='center'>
	        Page Not Found
	      </Header>
	      <Header as='h3' textAlign='left' marginLeft='20px'>
        	It looks like you may have mis-typed
        	the web address you were looking for!
        	To get back to the home page, see the
        	navigation bar above, or click <Link to='/'>here</Link>.
        </Header>
      </div>
    );
  }
}

export default NoMatch;
