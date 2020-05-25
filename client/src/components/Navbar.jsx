import React, { Component } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    document.body.onscroll = (ev) => {
      if (ev.target.scrollingElement.scrollTop < 10)
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
                padding: '20px 73px',
                position: 'fixed',
              }
            : {}
        }
      >
        <div className='link_container'>
          <Link
            className='logo'
            to='/'
            style={this.state.scrolled ? { fontSize: '38px' } : {}}
          >
            hijob!
          </Link>

          <Link
            className='nav_link'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
            to='/'
          >
            How it works
          </Link>

          <Link
            className='nav_link'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
            to='/'
          >
            Explore
          </Link>

          <Link
            className='nav_link'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
            to='/'
          >
            Company
          </Link>

          <Link
            className='nav_link'
            style={this.state.scrolled ? { fontSize: '16px' } : {}}
            to='/'
          >
            Plans
          </Link>
        </div>

        <Link
          className='btn btn-primary nav-btn'
          to='/'
          style={this.state.scrolled ? { fontSize: '18px' } : {}}
        >
          Login
        </Link>
      </div>
    );
  }
}

export default Navbar;
