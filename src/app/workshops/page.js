"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './workshops.css';

export default function Workshops() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [isLineBlue, setIsLineBlue] = useState(false);
  const [showMobileInput, setShowMobileInput] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadBootstrap = async () => {
      if (typeof window !== 'undefined') {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      }
    };

    loadBootstrap();
  }, []);

  const handleContinue = () => {
    if (isClient) {
      setShowContent(true);
      setIsLineBlue(true);
      setShowMobileInput(false);
    }
  };

  const workshops = [
    {
      title: "Ultimate Health Challenge",
      videoSrc: "/images/video1.mp4",
      reviews: 3034,
      description: "If you want to reach your ultimate peak health, then this workshop is for you. Learn 7 revolutionary habits over a span of 21 days!",
      price: "990/-",
      dateImage: "/images/date.png",
      daysImage: "/images/Days.png",
      langImage: "/images/lang.png",
      thumbnail: "/images/video_1_thumbnail.png"
    },
    {
      title: "Heal Yourself Challenge",
      videoSrc: "/videos/mindfulness_workshop.mp4",
      reviews: 2100,
      description: "7 days program to help you learn 9 steps to heal your chronic lifestyle diseases following the Satvic Healing Plan.",
      price: "750/-",
      dateImage: "/images/date.png",
      daysImage: "/images/Days.png",
      langImage: "/images/lang.png",
      thumbnail: "/images/video_2_thumbnail.png"
    },
    {
      title: "Yoga Challenge",
      videoSrc: "/videos/nutrition_masterclass.mp4",
      reviews: 1500,
      description: "Learn how to manage stress, anxiety, emotional imbalance and fear. Learn yoga philosophy.",
      price: "1200/-",
      dateImage: "/images/date.png",
      daysImage: "/images/Days.png",
      langImage: "/images/lang.png",
      thumbnail: "/images/video_3_thumbnail.png"
    },
    {
      title: "7-Day Satvic Food Challenge",
      videoSrc: "/videos/fitness_bootcamp.mp4",
      reviews: 4500,
      description: "Cook-along all three meals with us, and experience the magic of Satvic eating!",
      price: "1500/-",
      dateImage: "/images/date.png",
      daysImage: "/images/Days.png",
      langImage: "/images/lang.png",
      thumbnail: "/images/video_4_thumbnail.png"
    }
  ];

  return (
    <div>
      <Head>
        <title>Upcoming Workshops</title>
        <meta name="description" content="Join our upcoming workshops and challenges" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Image 
            src='/images/logo.png'
            alt="Logo" 
            width={140} 
            height={12} 
            className="mx-auto d-block" 
          />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">WORKSHOPS</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  FOOD BOOKS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">BOOK 1</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">BOOK 2</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">BOOK 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">PRODUCT 1</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">PRODUCT 2</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">PRODUCT 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">VIDEOS</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HEALING STORIES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">STORY 1</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">STORY 2</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">STORY 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">WORKSHOP LOGIN</a>
              </li>
            </ul>
            <form className="d-flex me-2">
              <Image 
                src='/images/search.png'
                alt="Logo" 
                width={15} 
                height={16} 
                className="mx-1 d-block" 
              />
              <Image 
                src='/images/globe.png'
                alt="Logo" 
                width={15} 
                height={16} 
                className="mx-1 d-block" 
              />
              <Image 
                src='/images/profile.png'
                alt="Logo" 
                width={15} 
                height={16} 
                className="mx-1 d-block" 
              />
              <Image 
                src='/images/cart.png'
                alt="Logo" 
                width={15} 
                height={16} 
                className="mx-1 d-block" 
              />
            </form>
          </div>
        </div>
      </nav>

      <div className="image_container">
        <div className="page_tear">
          <Image 
              src='/images/page_tear.png'
              alt="Logo" 
              width={2915} 
              height={200}     
              className="w-100 mx-0 object_contain" 
            />
        </div>
        <div className="page_tear_border">
          <Image 
              src='/images/page_tear_border.png'
              alt="Logo" 
              width={1915} 
              height={240}    
              className="w-100 mx-0 object_contain" 
            />
        </div>
      </div>
      <div className="workshops-list">
        {workshops.map((workshop, index) => (
          <div key={index} className="workshop-card card mb-3">
            <div className="row g-0 ms-3 mt-3">
            <div className="col-md-5 mt-4 g-0 d-flex justify-content-center align-items-center abc" style={{ position: 'relative', height: '320px', boxSizing: 'border-box' }}>
              <Image 
                src={workshop.thumbnail}
                alt={`${workshop.title} Thumbnail`} 
                fill 
                className="object_contain" 
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, borderRadius: '10px', cursor: 'pointer' }} 
                onClick={() => setActiveVideo(workshop.videoSrc)} 
              />
              {activeVideo === workshop.videoSrc && (
                <video 
                  src={workshop.videoSrc} 
                  controls 
                  autoPlay 
                  style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '10px', zIndex: 10 }}
                  onEnded={() => setActiveVideo(null)}
                />
              )}
            </div>
              <div className="col-md-1 g-0"></div>
              <div className="col-md-6 g-0">  
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-9">
                      <div>
                        <h5 className="card-title">{workshop.title}</h5>
                      </div>
                    </div>
                    <div className="col-3">
                      <Image src="/images/heartt.png" width={80} height={20} alt='Heart' />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <Image src="/images/rating.png" width={40} height={20} alt='Rating' />
                    </div>
                    <div className="col-3">
                      <div>
                        <p className="text-muted">{workshop.reviews} reviews</p>
                      </div>
                    </div>
                  </div>
                  <p className="card-text">{workshop.description}</p>
                  <div className="row g-0">
                    <div className="col-3">
                      <Image src={workshop.dateImage} width={140} height={80} alt='Date' />
                    </div>
                    <div className="col-3 booking">
                      <Image src={workshop.daysImage} width={140} height={80} alt='Days' />
                    </div>
                    <div className="col-3 booking">
                      <Image src={workshop.langImage} width={140} height={80} alt='Language' />
                    </div>
                  </div>
                  <p className="text-muted price">{workshop.price}</p>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Join The Challenge</button>
                    </div>
                    <div className="col-6">
                      <button type="button" className="btn btn-primary details_button">View Details</button>
                    </div>
                  </div>
                  <Image src="/images/user.png" className="mt-2 user_image" width={180} height={20} alt='User' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
            <div className="line-container">
              <hr className="custom-hr"/>
              <hr className="custom-hr-1" style={{ backgroundColor: isLineBlue ? '#007bff' : 'gray' }} />
            </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="challenge-title">Heal Yourself Challenge</div>
              <div className="image-row">
                  <div className="image-item">
                      <Image src="/images/modal-cal.png" width={20} height={20} alt="Image 1" />
                      <span className="muted">6th may</span>
                  </div>
                  <div className="image-item">
                      <Image src="/images/modal-time.png" width={20} height={20} alt="Image 2" />
                      <span className="muted">7 Days</span>
                  </div>
                  <div className="image-item">
                      <Image src="/images/modal-globe.png" width={20} height={20} alt="Image 3" />
                      <span className="muted">English</span>
                  </div>
              </div>
              <div className="border-box mt-3">
                <div className="session-timings mx-2">
                    Session Timings: 8 - 8:45 am (IST)
                </div>
                <hr className="horizontal_line" />
                <div className="timing-details mx-2">
                    <div className="image-text-row">
                        <Image src="/images/meet.png" width={14} height={14} alt="Schedule Icon" />
                        <span className="blue-text">Recording available in 24 hours</span>
                    </div>
                </div>
            </div>
            {showMobileInput && (
              <>
                  <h5 className="mt-3">Your Mobile Number</h5>
                  <div className="input-card">
                      <div className="input-row">
                          <img src="/images/flag.png" width={14} height={14} alt="Country Flag" className="country-image" />
                          <div className="country-code">
                              <span className="code">+91</span>
                              <img src="/images/down-arrow.png" width={14} height={8} alt="Down Arrow" className="down-arrow" />
                          </div>
                          <div className="vertical-line"></div>
                          <input type="text" className="number-input" placeholder="Enter number" />
                      </div>
                  </div>
                  <div className="image-item mt-2">
                      <img src="/images/info.png" width={20} height={20} alt="information" />
                      <span className="muted info">You can access the workshop using this number</span>
                  </div>
              </>
            )}

            {showContent && (
              <div>
                <div className="name-card">
                  <div className="muted info">Name</div>
                  <h6>Ravi Kumar</h6>
                </div>
              
                <div className="name-card">
                  <div className="muted info">Email ID</div>
                  <h6>ravi@gmail.com</h6>
                </div>

                <div className="name-card">
                  <input type="text" className="city" placeholder="Enter Your City" />
                </div>
                
                <h6 className="mt-3">This workshop can help you heal the following:</h6>
                <div className="options-box">
                  <div className="option-item">Thyroid Imbalance</div>
                  <div className="option-item">Excess Weight</div>
                  <div className="option-item">High BP</div>
                  <div className="option-item">Diabetes Type2</div>
                  <div className="option-item">PCOD</div>
                  <div className="option-item">Asthma</div>
                </div>

                <h6>However, it will not be sufficient for the following conditions:</h6>
                <div className="options-box">
                  <div className="option-item">Thyroid Imbalance</div>
                  <div className="option-item">Excess Weight</div>
                  <div className="option-item">High BP</div>
                  <div className="option-item">Diabetes Type2</div>
                  <div className="option-item">PCOD</div>
                  <div className="option-item">Asthma</div>
                </div>

              </div>
            )}


            </div>
            <div className="modal-footer continue">
            <button 
              type="button" 
              className="btn btn-primary continue_button" 
              style={{ marginTop: showContent ? '0' : '50%' }}
              onClick={handleContinue}
            >
              {showContent ? 'Submit' : 'Continue'}
            </button>
            </div>
          </div>
        </div>
      </div>


  </div>
  );
}
