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
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>API built in Rails</li>

                </ul>
                <div className="BioWords">

                The world of eSports is blowing up, filling arenas with fans coming to watch
                professional video gamers. Among the most popular eSports is StarCraft,
                in which keyboard speed is essential. We focus on this one skill to help
                gamers master it and improve even faster. The scientific theory behind StarSim is
                called deliberate practice.
                Who doesn’t love great keyboard skills?

                </div>
              </td>
            </tr>
            <tr>
              <td data-aos="fade-right">
                <img className= "tableimg-static"src="image (2).png" width="300" height="200"alt="description here" />
                <img className="tableimg-active" src="https://media.giphy.com/media/xT1R9FoR1VIKNtFYSk/giphy.gif"width="300" height="200"alt="description here"/>
              </td>
              <td>
                <label>PixedUp</label>
                <br/>
                <ul id="language-points">
                  <li>Bootstrap</li>
                  <li>Clarafai API</li>
                  <li>Ruby</li>
                  <li>Rails</li>
                  <li>SQL</li>
                  <li>RESTful Conventions</li>
                </ul>
                <div className="BioWords">
                  A picture is worth 1,000 words and a shot at love! Using artificial intelligence,
                  we match you based on your pictures. Tired of shallow dating apps? Tired of fake bios?
                  Tired of being tired? Let PixedUp fix you up!  We will find people who like what you like.
                  Let us show you the way, through your pictures.
                  Turn the 1,000 words into those 3 little words that you have been waiting to hear.
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
                  <li>Web Scraping</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Semantic UI</li>




                </ul>
                <div className="BioWords">


                Say goodbye to Excel keeping track of your interview candidates,
                sorority recruitment members, and even your online dates (like in the example to the left...
                the user who went on a date with Kim K). DateABase allows you to choose the characteristics that are
                important to you, then filter by any category you desire. Choose to store anything
                from names to ages to ratings. But wait... what if you do not remember
                what your candi/date looks like? No Problem! Store their Instagram name to see their  Instagram pictures!


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
