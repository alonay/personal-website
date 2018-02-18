import React from "react";

class Projects extends React.Component{
  render(){
    return(
      <div className="projects">
        <h1> ~ Featured Work ~ </h1>
        <table className="project-table" width="1000px" height="80%" >
          <tbody>
            <tr>
              <td>
                <img className="tableimg-static" src="image.png" width="300" height="200"alt="description here" />
                <img className="tableimg-active" src="https://media.giphy.com/media/26wktko7ZEGKg5vsA/giphy.gif"width="299" height="200"alt="description here"/>
              </td>
              <td>
                <label>StarSim</label>
                <br/>
                <ul id="language-points">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Postgres</li>
                  <li>Object-Oriented Design</li>
                  <li>RESTful Conventions</li>
                </ul>
                <div className="BioWords">

                The world of eSports is blowing up, filling arenas around the world
                with fans coming to watch professional video gamers. Among the most popular eSports
                is StarCraft, in which keyboard speed is essential. We focus on this one skill to help
                gamers master it and improve even faster. The scientific theory behind StarSim is
                called deliberate practice. Who doesn’t love great keyboard skills? 

                </div>
              </td>
            </tr>
            <tr>
              <td data-aos="fade-right">
                <img className= "tableimg-static"src="image (2).png" width="300" height="200"alt="description here" />
                <img className="tableimg-active" src="https://media.giphy.com/media/xT1R9FoR1VIKNtFYSk/giphy.gif"width="300" height="200"alt="description here"/>
              </td>
              <td>
                <label>Pixed Up</label>
                <br/>
                <ul id="language-points">
                  <li>Bootstrap</li>
                  <li>Clarafai API</li>
                  <li>Ruby</li>
                  <li>Rails</li>
                  <li>SQL</li>
                  <li>Object-Oriented Design</li>
                  <li>RESTful Conventions</li>
                </ul>
                <div className="BioWords">
                  A picture is worth 1,000 words and a shot at love! Using Artificial Intelligence,
                  we match you based on your pictures. Tired of shallow dating apps? Tired of fake bios?
                  Tired of being tired? Let PixedUp fix you up!  We will find people who like what you like.
                  Let us show you the way, through your pictures.
                  Turn the 1,000 words into those 3 words that you have been waiting to hear.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img className= "tableimg-static" src="image (1).png" width="300" height="200"alt="description here" />
                <img className="tableimg-active" src="https://media.giphy.com/media/26wkwZ8Q8M0QdW4Tu/giphy.gif"width="300" height="200"alt="description here"/>
              </td>
              <td>
                <br/><br/>
                <label>DateABase</label>
                <br/>
                <ul id="language-points">
                  <li>Bootstrap</li>
                  <li>Web Scarping</li>
                  <li>React</li>
                  <li>Simantic UI</li>
                  <li>Javascript</li>
                  <li>SQL</li>
                  <li>Object-Oriented Design</li>
                </ul>
                <div className="BioWords">

                  This is the best way to keep track of a group of people! Say goodbye to excel to keep track of your interview candidates,
                  sorority recruitment potential members, and even your online dates (like in the example to the left,
                  who went on a date with Kim K). DateABase allows you to choose the characteristics that are
                  important to your use case and you can filter by any category you add. Choose to store anything
                  from their name to their fit for the job or sorority. But wait... what if you do not remember
                  what your candidate looks like? No Problem! Store their instagram name to see their
                  instagram pictures!

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Projects;
