import React, { Component } from 'react';
import './css/Navbar.css';
import classNames from 'classnames';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    document.body.onscroll = (ev) => {
      if (ev.target.scrollingElement.scrollTop < 45)
        return this.setState({ scrolled: false });

      return this.setState({ scrolled: true });
    };
  }

  render() {
    return (
      <div
        className='navbar'
        style={
          this.state.scrolled
            ? {
                backgroundColor: 'white',
                padding: '15px 100px',
                position: 'fixed',
              }
            : {}
        }
      >
        <div className='link_container'>
          <div href='#'>
            <img
              src={require('../assets/logo.png')}
              alt='Logo'
              className='logo'
              style={this.state.scrolled ? { width: '100px', marginTop: '5px' } : {}}
            />
          </div>

          <div
            className='nav_link'
            href='#'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
          >
            How it works
          </div>

          <div
            className='nav_link'
            href='#'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
          >
            Explore
          </div>

          <div
            className='nav_link'
            href='#'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
          >
            Company
          </div>

          <div
            className='nav_link'
            href='#'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
          >
            Plans
          </div>
        </div>

        <div
          className='btn btn-primary nav-btn'
          style={
            this.state.scrolled ? { padding: '15px 25px', fontSize: '16px' } : {}
          }
        >
          Login
        </div>
      </div>
    );
  }
}

export default Navbar;
