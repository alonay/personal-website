import React from 'react';

class Bio extends React.Component{
  render(){
    return(
      <div className= "bio">
      <h1>From Sales to Rails: About Me</h1>
      <ul id="language-points">
        <li>Ruby</li>
        <li>Rails</li>
        <li>Javascript</li>
        <li>React</li>
        <li>jQuery</li>
        <li>Git</li>
        <li>SQL</li>
        <li>Postgres</li>
        <li>Test-Driven Dev</li>
        <li>Object-Oriented Design</li>
        <li>RESTful Conventions</li>
      </ul>
      <p className= "BioWords"> I am a full stack Software Engineer with a
       passion for communicating the power of technology through projects and presentations.
       After graduating Franklin and Marshall College, I had two strong years in sales at a small,
       fast-paced tech company. I have always loved technology, and was fascinated with the
       ability of the small tech team at the company  to work with me to build solutions that
       lead to revenue. I wanted to be a superhero too. I was accepted into a highly competitive New
        York City Coding Bootcamp and Suddenly a 
      whole world of possibilities opened up and all limitations were gone.
       I use my sales and coding skills every day to delight audiences and overcome challenges.</p>
      </div>

        )
  }

}

export default Bio;
