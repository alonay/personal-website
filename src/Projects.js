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
                <img className="tableimg-static" src="https://mail.google.com/mail/u/0/?ui=2&ik=6db1dd5875&view=fimg&th=1617731bd5dbba63&attid=0.3&disp=emb&realattid=ii_1617730e2927cdab&attbid=ANGjdJ-vwDPKgsN62ftLRBxFvAdYSUlxq-MeF-zCCf2xt5bQf3rllAxbkH5PmxbGdz4ALwykW4ttOGeX5g8I-BurERlcq1EqE7Bm88nEjrzlLnSnIiDDB05ALFHVtyA&sz=w908-h514&ats=1518123207751&rm=1617731bd5dbba63&zw&atsh=1" width="300" height="200"alt="description here" />
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
                  The world of Esports is blowing up, filling arenas around the world with fans coming to watch competitive video gamers compete.
                  Among the most popular eSports in Star Craft where key board speed is essential. StarSim isolates the skill of typing speed in order
                  to let gamers focus on the one skill in order to get better. This scientific theory behind StarSim is called deliberate practice. Srasim
                  aims to help gamers improve typing speed and help them reach thier goal of becoming professional gamers.
                </div>
              </td>
            </tr>
            <tr>
              <td data-aos="fade-right">
                <img className= "tableimg-static"src="https://mail.google.com/mail/u/0/?ui=2&ik=6db1dd5875&view=fimg&th=1617731bd5dbba63&attid=0.2&disp=emb&realattid=ii_1617731a93c720a0&attbid=ANGjdJ_J1Hs9cbSpUbD3zaNnOqYHgtfxNeUiIw2kaliJDtZ4sjw_k3Ywn18SQu9vq3pzelN6fHU6en5XlXElgtSYkgya7cCHXohkyQ0-GDDoK53AciOYuGF3ojSycdQ&sz=s0-l75-ft&ats=1518123207752&rm=1617731bd5dbba63&zw&atsh=1" width="300" height="200"alt="description here" />
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
                  A picture is worth 1,000 words and a shot at love! Using Atificaial Inteliggence,
                  we match you based on your pictures. Let us show you who makes sense for you.
                  We will find people who like what you like, Say goodbye to fake bios and get matched by us. Seem to always make bad descions When
                  it comes to dating? Let us show you the way, through your pictures. Turn the 1,000 words into those 3
                  words that you have been waiting to hear.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img className= "tableimg-static" src="https://mail.google.com/mail/u/0/?ui=2&ik=6db1dd5875&view=fimg&th=1617731bd5dbba63&attid=0.1&disp=emb&realattid=ii_1617731529dc480b&attbid=ANGjdJ-fAGD0dTv1PbgJBUcDNxq33Ot9ggMJYepWc2_E-D06MXYgSY30IJarsNiQ3dAw9nrOsTUZ9qxML0JCIjQfYqkSXFZHKTY4y9BWdnCovCuBTyr5vqA2Y7HoNoI&sz=w908-h484&ats=1518123207752&rm=1617731bd5dbba63&zw&atsh=1" width="300" height="200"alt="description here" />
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
                  This is the best way to keep track of a group of people! Say goobye to excel to keep track of
                  your interview candidates, sorrority recruitment potential members, and even your online dates
                  (like in the example to the left, who went on a date with Kim K). DateABase allowes you to choose the colomns that are important to your use case
                  and you can filter by any category you add. Choose to store anything from thier name to thier fit for the job or sorrority. But wait... what if you dont remember what your
                  candidate looks like? No Problem! Store thier instagram name to see thier instagram pictures!
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
