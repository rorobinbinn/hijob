import React, { Component } from 'react';
import './css/Navbar.css';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
    this.dropdown_container = React.createRef();
  }

  componentDidMount() {
    this.scroll_listener();
  }

  scroll_listener = () => {
    document.body.onscroll = ev => {
      if (ev.target.scrollingElement.scrollTop < 10)
        return this.setState({ scrolled: false });

      this.setState({ scrolled: true });
    };
  };

  show_dropdown = () => {
    this.setState({ show_dropdown: true });
  };

  close_dropdown = () => {
    if (!this.dropdown_container.current) return;
    this.dropdown_container.current.className += ' slide-out-right';

    setTimeout(() => {
      this.setState({ show_dropdown: false });
    }, 300);
  };

  render() {
    const nav_link = [
      { id: 'Nav Link 1', text: 'How it works' },
      { id: 'Nav Link 2', text: 'Explore' },
      { id: 'Nav Link 3', text: 'Company' },
      { id: 'Nav Link 4', text: 'Plans' },
    ];

    const { scrolled, show_dropdown } = this.state;

    return (
      <>
        <div
          className='navbar'
          style={
            scrolled
              ? {
                  backgroundColor: 'white',
                  padding: '20px 73px',
                  position: 'fixed',
                  zIndex: 10,
                }
              : null
          }
        >
          <div className='link_container'>
            <Link
              className='logo'
              to='/'
              style={scrolled ? { fontSize: '38px' } : null}
            >
              hijob!
            </Link>

            {nav_link.map(item => (
              <Link
                className='nav_link'
                style={scrolled ? { fontSize: '16px' } : null}
                to='/a'
                key={item.id}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <Link
            className='btn btn-primary nav-btn'
            to='/'
            style={scrolled ? { fontSize: '18px' } : null}
          >
            Login
          </Link>
        </div>

        <div className='nav-mobile'>
          <Link className='logo' to='/'>
            hijob!
          </Link>

          <div className='menu-container'>
            <ion-icon
              name='menu-outline'
              onClick={this.show_dropdown}
            ></ion-icon>

            {show_dropdown ? (
              <div
                className='dropdown-container slide-in-right'
                ref={this.dropdown_container}
              >
                {nav_link.map(item => (
                  <div className='dropdown-item' key={item.id}>
                    {item.text}
                  </div>
                ))}
              </div>
            ) : null}

            <div
              className='trans'
              style={
                show_dropdown
                  ? {
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      visibility: 'visible',
                    }
                  : null
              }
              onClick={this.close_dropdown}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Navbar);
