import React, { Component } from 'react';
import './css/Home.css';

export default class componentName extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='hero_section'>
          <div className='container hero_container'>
            <h1>Find a job that suits your passion</h1>

            <div className='search'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='search_icon'
              >
                <title>ionicons-v5-f</title>
                <path
                  d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z'
                  style={{
                    fill: 'none',
                    stroke: '#d0d1d5',
                    strokeMiterlimit: 10,
                    strokeWidth: '48px',
                  }}
                />
                <line
                  x1='338.29'
                  y1='338.29'
                  x2='448'
                  y2='448'
                  style={{
                    fill: 'none',
                    stroke: '#d0d1d5',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: '48px',
                  }}
                />
              </svg>

              <input type='text' placeholder='Job Title' />
              <div className='btn btn-primary'>Search</div>
            </div>

            <div>
              Designed by{' '}
              <a href='https://dribbble.com/uiwithvin' className='author_name'>
                Steve Gunawan
              </a>{' '}
              and Built by{' '}
              <a href='linkedin.com/in/robinson-ody' className='author_name'>
                Robinson Ody
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
