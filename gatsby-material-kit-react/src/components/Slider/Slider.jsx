import React from "react"
import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from "../../assets/img/partnerships/child-care-links.png"
import img2 from "../../assets/img/partnerships/city-harvest.png"
import img3 from "../../assets/img/partnerships/first-five.png"
import img4 from "../../assets/img/partnerships/food-52.png"
import img5 from "../../assets/img/partnerships/moad.png"
import img6 from "../../assets/img/partnerships/roots-of-labor.png"
import img7 from "../../assets/img/partnerships/sfusd.png"
import img8 from "../../assets/img/partnerships/super-juiced-oakland.png"
import img9 from "../../assets/img/partnerships/umpqua-bank.png"
import img10 from "../../assets/img/partnerships/united-roots.png"
import img11 from "../../assets/img/partnerships/young-womens-freedom-center.png"

class PartnerSlider extends React.Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: "20px",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0.5rem",
          },
        },
      ],
    }
    return (
      <Slider {...settings}>
        <div>
          <a href="https://behively.org/" target="_blank" rel="noopener noreferrer">
            <img src={img1} width="175" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="https://www.cityharvest.org/" target="_blank" rel="noopener noreferrer">
            <img src={img2} width="175" alt="City Harvest" />
          </a>
        </div>
        <div>
          <a href="http://www.first5alameda.org" target="_blank" rel="noopener noreferrer">
            <img src={img3} width="175" alt="First 5" />
          </a>
        </div>
        <div>
          <a href="https://food52.com/" target="_blank" rel="noopener noreferrer">
            <img src={img4} width="175" alt="Food 52" />
          </a>
        </div>
        <div>
          <a href="https://www.moadsf.org/" target="_blank" rel="noopener noreferrer">
            <img src={img5} width="175" alt="Museum of the African Diaspora" />
          </a>
        </div>
        <div>
          <a href="http://www.rootsoflaborbc.com" target="_blank" rel="noopener noreferrer">
            <img src={img6} width="175" alt="Roots of Labor Birth Collective" />
          </a>
        </div>
        <div>
          <a href="http://www.sfusd.edu" target="_blank" rel="noopener noreferrer">
            <img src={img7} width="175" alt="San Francisco Unified School District" />
          </a>
        </div>
        <div>
          <a href="http://www.oaklandisjuiced.com" target="_blank" rel="noopener noreferrer">
            <img src={img8} width="175" alt="Super Juiced - Oakland" />
          </a>
        </div>
        <div>
          <a href="https://www.umpquabank.com/corporate-responsibility/partnerships/" target="_blank" rel="noopener noreferrer">
            <img src={img9} width="175" alt="Umpqua Bank - Community Spotlight" />
          </a>
        </div>
        <div>
          <a href="https://unitedrootsoakland.org/" target="_blank" rel="noopener noreferrer">
            <img src={img10} width="175" alt="United Roots" />
          </a>
        </div>
        <div>
          <a href="https://www.youngwomenfree.org/" target="_blank" rel="noopener noreferrer">
            <img src={img11} width="175" alt="Young Women's Freedom Center" />
          </a>
        </div>
      </Slider>
    )
  }
}

export default PartnerSlider

