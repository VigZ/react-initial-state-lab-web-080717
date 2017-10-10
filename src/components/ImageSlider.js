import React from "react"
import PropTypes from "prop-types"

class ImageSlider extends React.Component{
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    return(
      <div>
      <h1>I am on slide {this.state.currentSlideIndex}</h1>

      </div>
    )
  }
}

export default ImageSlider
// Bomb Component Code Goes Here
