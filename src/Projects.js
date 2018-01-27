import React from "react";

class Projects extends React.Component{
  render(){
    return(
      <div className= "projects">
        <h1> ~ Featured Work ~ </h1>
        <table width="900px" height="80%" >
          <tbody>
            <tr>
              <td>
                <img className= "tableimg" src="http://images.all-free-download.com/images/graphicthumb/hands_with_hearts_202589.jpg" width="300" height="200"alt="description here" />
              </td>
              <td>
              Fixed Up
              </td>
            </tr>
            <tr>
              <td data-aos="fade-right">
                <img className= "tableimg" src="http://images.all-free-download.com/images/graphicthumb/hands_with_hearts_202589.jpg" width="300" height="200"alt="description here" />
              </td>
              <td>
              DateABase
              </td>
            </tr>
            <tr>
              <td>
                <img className= "tableimg"src="http://images.all-free-download.com/images/graphicthumb/hands_with_hearts_202589.jpg" width="300" height="200"alt="description here" />
              </td>
              <td>
              This text is in the table data cell on the right.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Projects;
