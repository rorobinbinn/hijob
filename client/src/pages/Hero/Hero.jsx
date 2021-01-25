import React from 'react';
import { isChrome } from '../Helper';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero_section'>
      <div className='hero_wrap'>
        <div className='container-left fade-in-left'>
          <h1>Find a job that suits your passion</h1>

          <div className='search'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='search_icon'>
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

          <div className='author-section'>
            Designed by{' '}
            <a href='https://dribbble.com/uiwithvin' className='author_name' target='_blank' rel='noopener noreferrer'>
              Kevin Al-Rizal
            </a>{' '}
            and Built by{' '}
            <a
              href='https://linkedin.com/in/robinson-ody'
              className='author_name'
              target='_blank'
              rel='noopener noreferrer'
            >
              Robinson Ody
            </a>
          </div>
        </div>

        <div className='container-right fade-in-right'>
          <img src={require(`../../assets/man-model.${isChrome ? 'webp' : 'png'}`).default} alt='Man Model' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
