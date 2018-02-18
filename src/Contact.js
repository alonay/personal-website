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
    $("#hero").addClass("bannerimageHover")
  }

  disappear = (event) => {
    $("#hero").removeClass("bannerimageHover")
  }

  render(){
    let linkedInandGitHubShow = <div className="contact-buttons">
      <a href="https://www.linkedin.com/in/alonayeheskel/" target="_blank"><button className="contact1" >LinkedIn</button></a>
      <a href="mailto:alona.yeheskel@gmail.com" ><button className="contact2">Email</button></a>
    </div>

    return (
      <div>
        {this.state.clicked && linkedInandGitHubShow}
        <button
          className="learnButton"
          id="contact"
          onClick={this.handleClick}
          onMouseEnter={this.appear}
          onMouseLeave={this.disappear}
        >Connect With Me</button>

      </div>
    )
  }
}

export default Contact;
