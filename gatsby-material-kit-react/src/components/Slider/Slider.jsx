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
      centerPadding: "1rem",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      speed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: false,
            centerPadding: "0.5rem",
          },
        },
      ],
    }
    return (
      <Slider {...settings}>
        <div>
          <a href="#" target="_blank">
            <img src={img1} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img2} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img3} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img4} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img5} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img6} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img7} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img8} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img9} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img10} width="175px" alt="Child Care Links" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <img src={img11} width="175px" alt="Child Care Links" />
          </a>
        </div>
      </Slider>
    )
  }
}

export default PartnerSlider

{
  /* <div className="main-slider">
       
                <a
                  href="assets/img/partnerships/city-harvest.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/city-harvest.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/first-five.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/first-five.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/food-52.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/food-52.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/child-care-links.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/child-care-links.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/moad.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img src="assets/img/partnerships/moad.png" width="175px" />
                </a>
                <a
                  href="assets/img/partnerships/roots-of-labor.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/roots-of-labor.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/sfusd.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/sfusd.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/super-juiced-oakland.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/super-juiced-oakland.png"
                    width="175px"
                  />
                </a>
                <a
                  href="assets/img/partnerships/umpqua-bank.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/umpqua-bank.png"
                    width="175px"
                  />
                </a>
                <a
                  id="ywfc"
                  href="assets/img/partnerships/young-womens-freedom-center.png"
                  target="_blank"
                  data-fancybox="images"
                >
                  <img
                    src="assets/img/partnerships/young-womens-freedom-center.png"
                    width="175px"
                  />
                </a>
              </div> */
}
