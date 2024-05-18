import React from 'react'

import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
import Head from '../../components/Head/Head'
import OurServices from '../../components/OurServices/OurServices'
import { Link } from 'react-router-dom'

import './HomePage.css'
import Tests from '../../components/Tests/Tests'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'



const HomePage = () => {
  return (
    <>
      <section className="cara container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={b1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={b2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={b3} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="all-sec">
        <div className="container">
          <div className="grid-2">
            <div className="sin-sec">
              <div className="secImg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="61.342" height="84.873" viewBox="0 0 61.342 84.873">
                      <g id="Group_75050" data-name="Group 75050" transform="translate(10211.838 -3132.622)">
                        <rect id="Rectangle_12163" data-name="Rectangle 12163" width="22.096" height="5.458" rx="1" transform="translate(-10176.387 3190.474)" fill="#2dbcb6"></rect>
                        <path id="Path_54258" data-name="Path 54258" d="M-8719.1,4107.7s16.246-.007,16.271,0c0,0,.745.006.771-.685s0-10.164,0-10.164l-5.58-.018s.1,4.408,0,4.854a.781.781,0,0,1-.555.554l-10.922.056Z" transform="translate(-1460.441 -901.052)" fill="#1b538f"></path>
                        <path id="Path_54260" data-name="Path 54260" d="M-9195.759,3524.107s-17.708,2.472-15.953,20.633c1.02,10.551,11.751,14.012,11.645,13.906,2.337.559.957.452.957.452l-.584,7.976s-17.337-2.9-19.889-21.749,14.783-27.147,19.3-28.317S-9195.759,3524.107-9195.759,3524.107Z" transform="translate(-992 -359.663)" fill="#1b538f"></path>
                        <path id="Rectangle_12164" data-name="Rectangle 12164" d="M8.319,0h0a8.319,8.319,0,0,1,8.319,8.319V19.833a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V8.319A8.319,8.319,0,0,1,8.319,0Z" transform="translate(-10194.288 3195.666)" fill="#003873"></path>
                        <rect id="Rectangle_12167" data-name="Rectangle 12167" width="5.584" height="8.08" rx="1" transform="translate(-10192.882 3139.869) rotate(-30)" fill="#1b538f"></rect>
                        <path id="Path_54259" data-name="Path 54259" d="M-9004.777,3140.345l3.755,2.6,10.191-5.885-.155-4.516a1.086,1.086,0,0,0-1.7-.709c-1.33.753-10.948,6.323-12.011,7.01A.87.87,0,0,0-9004.777,3140.345Z" transform="translate(-1193.175 1)" fill="#2dbcb6"></path>
                        <rect id="Rectangle_12168" data-name="Rectangle 12168" width="16.66" height="35.269" rx="2" transform="translate(-10193.397 3148.561) rotate(-30)" fill="#003873"></rect>
                        <circle id="Ellipse_1360" data-name="Ellipse 1360" cx="8.319" cy="8.319" r="8.319" transform="translate(-10194.322 3153.405)" fill="#2dbcb6"></circle>
                        <circle id="Ellipse_1361" data-name="Ellipse 1361" cx="2.662" cy="2.662" r="2.662" transform="translate(-10188.6 3159.128)" fill="#fff"></circle>
                        <circle id="Ellipse_1362" data-name="Ellipse 1362" cx="2.662" cy="2.662" r="2.662" transform="translate(-10188.299 3200.324)" fill="#fff"></circle>
                        <path id="Rectangle_12162" data-name="Rectangle 12162" d="M2,0H57.9a2,2,0,0,1,2,2V5.591a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z" transform="translate(-10210.396 3211.905)" fill="#2dbcb6"></path>
                        <rect id="Rectangle_12166" data-name="Rectangle 12166" width="5.584" height="8.08" rx="1" transform="translate(-10171.81 3176.373) rotate(-30)" fill="#1b538f"></rect>
                        <rect id="Rectangle_12165" data-name="Rectangle 12165" width="22.002" height="5.584" rx="1" transform="translate(-10179.554 3178.07) rotate(-30)" fill="#2dbcb6"></rect>
                      </g>
                  </svg>
              </div>
              <Link to="/book-your-test" className="content">
                <div className="text">
                  <h4>Book Your Lab Test</h4>
                  <p>Home Sample Collection</p>
                </div>
                <div className="arrow">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </Link>
            </div>

            <div className="sin-sec">
              <div className="secImg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="83.11" height="91.762" viewBox="0 0 83.11 91.762">
                      <g id="Group_75048" data-name="Group 75048" transform="translate(9781.857 -4093.39)">
                        <path id="Path_54251" data-name="Path 54251" d="M19.634,0,45.992.109a1.7,1.7,0,0,1,1.7,1.7V75.14a1.7,1.7,0,0,1-1.7,1.7l-44.218,7.8c-.938,0-1.774.5-1.774-.435L18.568,1.779C18.568.842,18.7,0,19.634,0Z" transform="translate(-9745.713 4093.39) rotate(10)" fill="#2dbcb6"></path>
                        <rect id="Rectangle_12141" data-name="Rectangle 12141" width="61.513" height="83.259" rx="3" transform="translate(-9781.857 4094.083)" fill="#1ca09a"></rect>
                        <rect id="Rectangle_12142" data-name="Rectangle 12142" width="9.111" height="2.603" transform="translate(-9777.071 4098.923)" fill="#fff"></rect>
                        <rect id="Rectangle_12146" data-name="Rectangle 12146" width="21.475" height="2.603" transform="translate(-9753.644 4134.716)" fill="#fff"></rect>
                        <rect id="Rectangle_12151" data-name="Rectangle 12151" width="21.475" height="2.603" transform="translate(-9753.644 4156.191)" fill="#fff"></rect>
                        <rect id="Rectangle_12147" data-name="Rectangle 12147" width="11.714" height="2.603" transform="translate(-9743.882 4141.874)" fill="#fff"></rect>
                        <rect id="Rectangle_12153" data-name="Rectangle 12153" width="11.714" height="2.603" transform="translate(-9743.882 4163.349)" fill="#fff"></rect>
                        <rect id="Rectangle_12148" data-name="Rectangle 12148" width="7.158" height="2.603" transform="translate(-9753.644 4141.874)" fill="#fff"></rect>
                        <rect id="Rectangle_12152" data-name="Rectangle 12152" width="7.158" height="2.603" transform="translate(-9753.644 4163.349)" fill="#fff"></rect>
                        <rect id="Rectangle_12149" data-name="Rectangle 12149" width="14.317" height="14.317" rx="2" transform="translate(-9775.119 4136.017)" fill="#fff"></rect>
                        <rect id="Rectangle_12150" data-name="Rectangle 12150" width="14.317" height="14.317" rx="2" transform="translate(-9775.119 4157.493)" fill="#fff"></rect>
                        <rect id="Rectangle_12143" data-name="Rectangle 12143" width="6.508" height="2.603" transform="translate(-9777.071 4104.78)" fill="#fff"></rect>
                        <rect id="Rectangle_12144" data-name="Rectangle 12144" width="3.254" height="2.603" transform="translate(-9734.12 4098.923)" fill="#fff"></rect>
                        <rect id="Rectangle_12145" data-name="Rectangle 12145" width="3.254" height="2.603" transform="translate(-9728.264 4098.923)" fill="#fff"></rect>
                        <path id="Path_54252" data-name="Path 54252" d="M-9621,3734.984c0,.1,2.09-2.142,2.09-2.142l3.187,3.239,7.471-8.88,2.3,1.985s-7.47,10.082-9.456,10.4S-9621,3734.879-9621,3734.984Z" transform="translate(-150.941 407.774)" fill="#2dbcb6"></path>
                        <path id="Path_54253" data-name="Path 54253" d="M-9621,3734.984c0,.1,2.09-2.142,2.09-2.142l3.187,3.239,7.471-8.88,2.3,1.985s-7.47,10.082-9.456,10.4S-9621,3734.879-9621,3734.984Z" transform="translate(-150.941 429.258)" fill="#2dbcb6"></path>
                        <path id="Path_54254" data-name="Path 54254" d="M-9496.2,2872.933l12.8-5.734,12.852,5.734s.209,15.946-12.852,22.894c-.1.056-.208.109-.3.155C-9496.412,2888.3-9496.2,2872.933-9496.2,2872.933Z" transform="translate(-267.654 1233.1)" fill="#003873"></path>
                        <path id="Path_54255" data-name="Path 54255" d="M0,6.963c0,.093,1.869-1.916,1.869-1.916l2.851,2.9L11.4,0l2.056,1.776S6.776,10.795,5,11.075,0,6.869,0,6.963Z" transform="matrix(0.996, 0.087, -0.087, 0.996, -9756.599, 4107.179)" fill="#fff"></path>
                      </g>
                  </svg>
              </div>
              <Link className="content">
                <div className="text">
                  <h4>Download Reports</h4>
                  <p>Check E-Reports Status</p>
                </div>
                <div className="arrow">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
      </section>
      
      <About/>

      <Head title="Our Services" />
      <OurServices/>

      <Head title="Lab Mantra Popular Tests" />
      <Tests/>
      
      <Contact/>
      
    </>
  )
}

export default HomePage