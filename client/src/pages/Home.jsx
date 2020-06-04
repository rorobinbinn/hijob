import React, { Component } from 'react';
import './css/Home.css';
import moment from 'moment';
import Kota from './Kota.json';

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
          url: 'diamond.svg',
          alt: 'Diamond',
          title: 'VIP Customer Support',
          description:
            'Quick response time and upgraded support solutions will help you to get what you need, when you need it.',
        },

        {
          id: 'f2',
          url: 'icons8-bill-100.png',
          alt: 'Bill',
          title: 'Improved Billing Options',
          description:
            'One team - one payment method. You can now add a card on file that every team member can use.',
        },

        {
          id: 'f3',
          url: 'icons8-lock.svg',
          alt: 'Lock',
          title: 'Secure and Easy Process',
          description:
            'Every step taken by the company is well-prepared and has a complete security measurement.',
        },
      ],

      job_category: [
        { id: 'j1', url: 'design.svg', title: 'UI/UX Design' },
        { id: 'j2', url: 'mobile.svg', title: 'Mobile Development' },
        { id: 'j3', url: 'web.svg', title: 'Web Development' },
        { id: 'j4', url: 'support.svg', title: 'Customer Support' },
        { id: 'j5', url: 'business.svg', title: 'Business & Marketing' },
        { id: 'j6', url: 'finance.svg', title: 'Finance & Accounting' },
        { id: 'j7', url: 'human.svg', title: 'Human Resources' },
      ],

      kota: [],
      kota_display: [],
      show_dropdown: false,
      city_value: '',
    };
  }

  componentDidMount = () => {
    this.listen_drag_feature();
    this.listen_drag_job();
    this.restructure_kota();
  };

  listen_drag_feature() {
    const feature_card_container = document.getElementsByClassName(
      'feature_card_container'
    )[0];

    let dragging_feature = false,
      screenX = 0;

    feature_card_container.addEventListener('mousedown', (e) => {
      dragging_feature = true;
      screenX = e.screenX;
      feature_card_container.style = 'cursor: grabbing';
    });

    feature_card_container.addEventListener('mousemove', (e) => {
      if (dragging_feature) {
        feature_card_container.scrollLeft += (screenX - e.screenX) / 10;
      }
    });

    feature_card_container.addEventListener('mouseup', (e) => {
      dragging_feature = false;
      feature_card_container.style = '';
    });
  }

  listen_drag_job() {
    const feature_card_container = document.getElementsByClassName(
      'job_list'
    )[0];

    let dragging_feature = false,
      screenX = 0;

    feature_card_container.addEventListener('mousedown', (e) => {
      dragging_feature = true;
      screenX = e.screenX;
    });

    feature_card_container.addEventListener('mousemove', (e) => {
      if (dragging_feature) {
        feature_card_container.scrollLeft += (screenX - e.screenX) / 10;
      }
    });

    feature_card_container.addEventListener('mouseup', (e) => {
      dragging_feature = false;
    });
  }

  restructure_kota() {
    let { kota } = this.state;

    for (let key1 in Kota) {
      for (let key2 in Kota[key1]) {
        for (let key3 in Kota[key1][key2]) {
          if (
            Kota[key1][key2][key3] instanceof Object &&
            !(Kota[key1][key2][key3] instanceof Array)
          ) {
            for (let key4 in Kota[key1][key2][key3]) {
              Kota[key1][key2][key3][key4].forEach((city) => {
                kota.push(city);
              });
            }
          } else {
            kota.push(Kota[key1][key2][key3]);
          }
        }
      }
    }

    this.setState({ kota });
  }

  handle_text_change(e) {
    this.filter_kota(e.target.value);
    this.setState({ [e.target.name]: e.target.value, show_dropdown: true });
  }

  filter_kota(str) {
    if (!str) return this.setState({ kota_display: this.state.kota });

    const kota_display = this.state.kota.filter((kota) => {
      return kota.toString().toLowerCase().includes(str.toLowerCase());
    });

    this.setState({ kota_display });
  }

  render() {
    return (
      <div
        className='Home'
        onClick={() => {
          this.setState({ show_dropdown: false });
        }}
      >
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
            {this.state.job_category.length
              ? this.state.job_category.map((item) => (
                  <div className='job_category_hover' key={item.id}>
                    <div className='job_category'>
                      <div className='icon_container'>
                        <img
                          src={require('../assets/' + item.url)}
                          alt={item.title}
                        />
                      </div>

                      <div className='category_title'>{item.title}</div>
                    </div>
                  </div>
                ))
              : null}

            <div className='job_category_hover'>
              <div className='job_category'>
                <div className='icon_container'>
                  <img src={require('../assets/plus.svg')} alt='Explore More' />
                </div>

                <div className='category_title'>Explore More</div>
              </div>
            </div>
          </div>
        </div>

        <div className='find_yours'>
          <div className='find_yours_title'>
            Find your freelance job,
            <br />
            Convert your ideas into reality.
          </div>

          <div className='second_search'>
            <div className='search_keyword'>
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

              <input type='text' placeholder='Keyword' />
            </div>

            <div
              className='search_location'
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className='location_input'>
                <img
                  src={require('../assets/location.svg')}
                  alt='Location Pin'
                  className='search_icon'
                />

                <input
                  type='text'
                  placeholder={
                    this.state.kota[
                      Math.round(Math.random() * this.state.kota.length)
                    ]
                  }
                  onChange={this.handle_text_change.bind(this)}
                  name='city_value'
                  value={this.state.city_value}
                />

                <img
                  src={require('../assets/triangle.svg')}
                  alt='Triangle'
                  className='search_icon triangle'
                  onClick={() => {
                    this.setState({ show_dropdown: !this.state.show_dropdown });
                  }}
                />
              </div>

              <div
                className='dropdown'
                style={this.state.show_dropdown ? {} : { display: 'none' }}
              >
                {this.state.kota_display.length
                  ? this.state.kota_display.map((item) => (
                      <div
                        className='dropdown_item'
                        key={item}
                        onClick={() => {
                          this.setState({
                            show_dropdown: false,
                            city_value: item,
                          });
                        }}
                      >
                        {item}
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div className='btn btn-primary'>Search</div>
          </div>
        </div>

        <div className='footer'>
          <div className='left_foot'>
            <div className='brand'>hijob!</div>
            <div className='copyright'>© hijob! International Ltd. 2020</div>
          </div>

          <div className='right_foot'>
            <div className='item'>About</div>
            <div className='item'>Privacy & Legal</div>
            <div className='item'>Partners</div>
            <div className='item'>Contact</div>
          </div>
        </div>
      </div>
    );
  }
}
