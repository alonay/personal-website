import React from "react"
import $ from "jquery"

class Contact extends React.Component{
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    }, () => {
      if (this.state.clicked === true) {
        const contact = document.getElementById('contact')
        contact && contact.scrollIntoView({
          behavior: 'smooth'
        })
        $("#hero").addClass("extended-hero")
      } else {
        $("#hero").removeClass("extended-hero")
      }
    })
  }


  appear = (event) => {
    $("#hero").addClass("banner-image-hover")
  }

  disappear = (event) => {
    $("#hero").removeClass("banner-image-hover")
  }

  render(){
    let linkedInandGitHubShow = <div className="contact-buttons">
      <a href="https://www.linkedin.com/in/alonayeheskel/" target="_blank">
        <button className="contact-button linkedin" >
          LinkedIn
        </button>
      </a>
      <a href="mailto:alona.yeheskel@gmail.com" >
        <button className="contact-button email">
          Email
        </button>
      </a>
    </div>

    return (
      <div className="contact">
        <button
          className="learn-button"
          id="contact"
          onClick={this.handleClick}
          onMouseEnter={this.appear}
          onMouseLeave={this.disappear}
        >Connect with Me</button>
        {this.state.clicked && linkedInandGitHubShow}
      </div>
    )
  }
}

export default Contact;
