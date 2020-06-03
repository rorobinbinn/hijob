import React, { Component } from 'react';
import './css/Home.css';
import moment from 'moment';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: [
        {
          id: 'p1',
          img: 'nadya_bella.jpg',
          name: 'Nadya Bella',
          post_time: '2020-05-28T05:26:12.889Z',
          post_title: 'UI/UX Designer Mentor',
          job_location: 'Anywhere',
          job_type: 'Freelance',
          tag_name: 'Interface Design',
          tag_color: '#31cb9f',
        },
        {
          id: 'p2',
          img: 'nicky_amanda.jpg',
          name: 'Nicky Amanda',
          post_time: '2020-05-21T05:26:12.889Z',
          post_title: 'Front End Website Designer',
          job_location: 'Sydney',
          job_type: 'Contract',
          tag_name: 'Website Development',
          tag_color: '#f27a13',
        },
        {
          id: 'p3',
          img: 'natalia_polyska.jpg',
          name: 'Natalia Polyska',
          post_time: '2020-05-01T05:26:12.889Z',
          post_title: 'Senior Graphic Designer',
          job_location: 'California',
          job_type: 'Full Time',
          tag_name: 'Graphic Design',
          tag_color: '#0076ff',
        },
        {
          id: 'p4',
          img: 'ptolemy_dunkley.jpg',
          name: 'Ptolemy Dunkley',
          post_time: '2020-04-01T05:26:12.889Z',
          post_title: 'Mobile - App Senior Programmer',
          job_location: 'Singapore',
          job_type: 'Full Time',
          tag_name: 'Mobile Development',
          tag_color: '#25283d',
        },
        {
          id: 'p5',
          img: 'rico_mayer.jpg',
          name: 'Rico Mayer',
          post_time: '2020-03-20T05:26:12.889Z',
          post_title: 'Finance & Accounting Staff',
          job_location: 'Depok',
          job_type: 'Contract',
          tag_name: 'Finance',
          tag_color: '#8f3985',
        },
        {
          id: 'p6',
          img: 'suzannah_baker.jpg',
          name: 'Suzannah Baker',
          post_time: '2020-03-01T05:26:12.889Z',
          post_title: 'HR Operations Manager',
          job_location: 'Jakarta',
          job_type: 'Full Time',
          tag_name: 'Human Resources',
          tag_color: '#8f3985',
        },
      ],

      feature: [
        {
          id: 'f1',
          url: 'icons8-diamond-64.png',
          alt: 'Diamond',
          title: 'VIP Customer Support',
          description:
            'Quick response time and upgraded support solutions will help you to get what you need, when you need it.',
        },

        {
          id: 'f2',
          url: 'bill.png',
          alt: 'Bill',
          title: 'Improved Billing Options',
          description:
            'One team - one payment method. You can now add a card on file that every team member can use.',
        },

        {
          id: 'f3',
          url: 'icons8-lock-64.png',
          alt: 'Lock',
          title: 'Secure and Easy Process',
          description:
            'Every step taken by the company is well-prepared and has a complete security measurement.',
        },
      ],
    };
  }

  render() {
    return (
      <div className='Home'>
        <div className='hero_section'>
          <div className='hero_wrap'>
            <div className='container-left fade-in-left'>
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
                <a
                  href='https://dribbble.com/uiwithvin'
                  className='author_name'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Steve Gunawan
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
              <img src={require('../assets/man-model.png')} alt='Man Model' />
            </div>
          </div>
        </div>

        <div className='as_used_by'>
          <div className='as_used_by_wrapper'>
            <div className='as_used_by_text'>As used by</div>

            <div className='img_row'>
              <img
                src={require('../assets/microsoft.png')}
                alt='Microsoft Logo'
              />

              <img src={require('../assets/intel.png')} alt='Intel Logo' />
              <img src={require('../assets/google.png')} alt='Google Logo' />
              <img
                src={require('../assets/facebook.png')}
                alt='Facebook Logo'
              />
            </div>
          </div>
        </div>

        <div className='job_posted'>
          <div className='number'>
            500.000<span className='super'>+</span>
          </div>

          <div className='text'>Total Job Posted</div>
        </div>

        <div className='job_list'>
          {this.state.poster.length
            ? this.state.poster.map((item) => (
                <div className='hover_controller' key={item.id}>
                  <div className='one_card'>
                    <div className='poster_info'>
                      <div className='left'>
                        <img
                          src={require('../assets/' + item.img)}
                          alt='Nadya Bella'
                          className='poster_photo'
                        />

                        <div className='poster_name'>{item.name}</div>
                      </div>

                      <div className='post_time'>
                        {moment(item.post_time).fromNow()}
                      </div>
                    </div>

                    <div>
                      <div className='post_title'>{item.post_title}</div>

                      <div className='job_type_loc'>
                        {item.job_location} - {item.job_type}
                      </div>
                    </div>

                    <div className='tag'>
                      <div
                        style={{
                          width: '15px',
                          height: '15px',
                          borderRadius: '7.5px',
                          backgroundColor: item.tag_color,
                          marginRight: '10px',
                        }}
                      ></div>
                      {item.tag_name}
                    </div>
                  </div>
                </div>
              ))
            : null}
          <div className='spacer'></div>
        </div>

        <div className='feature_list'>
          <div className='feature_left'>
            <img
              src={require('../assets/feature.png')}
              alt='Feature Section Background'
            />
          </div>

          <div className='feature_right'>
            <div className='feature_title'>Get a Job More Fast</div>

            <div className='feature_subtitle'>
              This is a chance for you to earn big income.
            </div>

            <div className='feature_card_container'>
              {this.state.feature.length
                ? this.state.feature.map((item) => (
                    <div className='feature_hover' key={item.id}>
                      <div className='feature_card'>
                        <div className='icon'>
                          <img
                            src={require('../assets/' + item.url)}
                            alt={item.alt}
                          />
                        </div>

                        <div className='card_title'>{item.title}</div>
                        <div className='card_description'>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))
                : null}

              <div className='spacer'></div>
            </div>
          </div>
        </div>

        <div className='explore'>
          <div className='explore_title'>Explore The Job</div>
          <div className='explore_subtitle'>Choose your favourite job</div>

          <div className='job_category_board'>
            <div className='job_category'></div>
          </div>
        </div>
      </div>
    );
  }
}
