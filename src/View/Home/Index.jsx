import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../../Images/pic1.jpeg";
import pic2 from "../../Images/pic2.jpeg";
import pic3 from "../../Images/pic3.jpeg";
import pic4 from "../../Images/pic4.jpeg";
import pic5 from "../../Images/pic5.jpeg";
import Marquee from "react-fast-marquee";
import "./Home.css"
import { Link } from 'react-router-dom';
const Index = () => {
  const blinkStyle = {
    animation: 'blinking 1s infinite', // 1s duration, infinite iterations
  };
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    fade: true,
    autoplay: true,
    speed: 3000,
    // cssEase: "linear",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          fade: true,
          autoplay: true,
          speed: 3000,
          cssEase: "ease-in",
          autoplaySpeed: 2000,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          fade: true,
          autoplay: true,
          speed: 3000,
          cssEase: "ease-in",
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          autoplay: true,
          speed: 3000,
          cssEase: "ease-in",
          autoplaySpeed: 2000,
        }
      }
    ]
  };
  const slideimg = [
    {
      img: pic1,
    },
    {
      img: pic2,
    },
    {
      img: pic3,
    },
    {
      img: pic4,
    },
    {
      img: pic5,
    },
  ]
  return (
    <>
      <section className=''>
        <Slider {...settings}>
          {slideimg.map((item, index) => {
            return (
              <div>
                <div className='bannerslideimg' key={index}>
                  <img src={item.img} alt="..." />
                  <div className='gcetbtabslt'>
                    <p className='gctbtxtpp'>
                      <Marquee pauseOnHover={true} direction="right" speed="50">
                        GCETTB ALUMNI ASSOCIATION PORTAL
                      </Marquee>
                    </p>
                    <div className='rentxtmain'>
                      <p className='rentpp'>Pre Centenary Reunion - 2024 ( REMINISCENCE-2024 )</p>
                      <Link to="" className='clckbtn' style={blinkStyle}>
                        CLICK ME
                      </Link>
                    </div>
                    <Link className='regbtn'>
                      <i className="fa-solid fa-user-plus"></i>
                      NEW ALUMUNI REGISTRATION
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </section>

      <section className='alumunireg'>
        <div className='cust_container'>
          <div className='allbtnmainreg'>
            <Link className='regnewbtnal'>Go To Alumuni Registration</Link>
            <Link className='regnewbtnal'>New Alumuni Registration</Link>
            <Link className='regnewbtnal'>Complete Alumuni Registration</Link>
            <Link className='regnewbtnal'>Login and Fill Reunion Details</Link>
            <Link className='regnewbtnal'>Download Pdf</Link>

          </div>

        </div>
      </section>
    </>
  )
}

export default Index
