import React, { Component } from 'react';
// import { Menu } from 'semantic-ui-react';
import { Navbar, NavItem } from 'react-materialize';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {

  render() {
    return(
      <Navbar style={styles.navbar} brand='The Tiny Tot Boutique' right>
        <div>
          <NavItem href='/'>HOME</NavItem>
          <NavItem href='/shop'>SHOP</NavItem>
          <NavItem href='/contact'>CONTACT US</NavItem>
        </div>
      </Navbar>
    )
  }
};

const styles = {
  navbar: {
    backgroundColor: '#50D0D6',
    borderBottomWidth: '4px',
    borderBottomColor: '#F486BC',
    borderBottomStyle: 'solid', 
  }
}

export default (NavBar);






//   rightNavs = () => {
//     const { user, dispatch, history } = this.props;

//     if (user.id) {
//       return (
//         <Menu.Menu position='right'>
//           <Menu.Item
//             name='Logout'
//             onClick={() => dispatch(handleLogout(history))}
//           />
//         </Menu.Menu>
//       );
//     }
//     return (
//       <Menu.Menu position='right'>
//         <Link to='/register'>
//           <Menu.Item name='Register' />
//         </Link>
//         <Link to='/login'>
//           <Menu.Item name='Login' />
//         </Link>
//       </Menu.Menu>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <Menu pointing secondary>
//           <Link to='/'>
//             <Menu.Item name='home'>The Tiny Tot Boutique</Menu.Item>
//           </Link>
//           { this.rightNavs() }
//         </Menu>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { user: state.user };
// };
