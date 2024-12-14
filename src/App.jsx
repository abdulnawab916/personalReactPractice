// TO DO immediately
// Add in the event listener for the buttons when they are clicked
// and have it naviagate to various projects that I have worked on

function generatingRandomNumber(maxLength) {
  return Math.floor(Math.random() * (maxLength +1));
}

const differentNames = ["student", "innovator", "engineer"]
function Header() {
  // randomly picks a name each time that the page is loaded up
  const potentialNames = differentNames[generatingRandomNumber(2)];
  return (
    <header>
        <h1>Abdul Hanan Nawab</h1>
        <p>
        Currently a Senior at the University of California, Davis,
        majoring in Computer Science, specifically the College of Engineering
        </p>
        <br />
        <p>
          I am actively seeking full-time roles!
        </p>
      </header>
    )
}

// creating a new component function that we 
// can pass various attributes into it
// I will use this component to show all of my various work experiences
/*
TODO:
  - change the color format of the website!
  Work experience:
    1. SWE Intern @ Design2Data
    2. SWE Intern @ ...
*/


// when using props, the most common formality when using them is to use
// props as the main parameter, then you acess the items that way, they
// have to be spelled the same
function WorkExperience(props) {
  // what other elements could I add?
  // I want to put more information and make 
  // it prettier

  return (
    <li>
      <h3>{props.title}</h3>
      <h5>{props.company}</h5>
      <p>{props.description}</p>
    </li> 
  );
}

// Here is the main app componet
function App() {
  // Utilizing props within the main component to display 
  // my work experiences

  // Potential issues,
  // might have an issue with the first line in my work
  // experience
  // Things I can add to use props
  // I should add a member that is stackUsed + technologies used at the
  // particular organization that I worked at
  return (
    <div>
      <main>
        <Header></Header>
        <section id= "core-concepts">
        <h2>My previous work experience(s):</h2>
        <ul>
          <WorkExperience title = "Sotware Engineer Intern"
                          company = "Design2Data"
                          description = "Built a research-based application using React.js, & AWS. Created a seemless user-based tutorial"/>
          <WorkExperience title = "Software Engineer Intern"
                          company = "DesignHub"
                          description = "Developed React Native based application to assist ADA-students with locating bathrooms efficiently" 
                          />
          <WorkExperience title = "R&D Hardware Engineering Intern"
                          company = "NASA"
                          description = "Conducted vast research on various chipsets, conducetd firmware research, authored 15 page research paper"/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

// Notes
// When you want to write any type of JS function inside the HTML element shit in the return 
// block, then you need to put {...} around whatever it is.
// This ensures to us that React will be able to recognize it
/* 
  was having issues setting git up, 
  had to remove the remote from being origin or whatever
*/
/* 
TODO:
- Add in buttons that I can click and they will take me to something
  on my resume, what is something from my resume that I should put on here?
- Ideas:
I could create the buttons for various projects that I have worked on
- H2 tag with Projects Label
- and then various buttons that you could click to take us to different
- projects with a description of what I built
- have github link in there as well?
- maybe incorporate a little YT Video link where I could be explaining
- the core concepts behind the project.
- have this play in browser by React. There has to be some special shit that can
- do this for me
MUST DO:
ADD IN A NAV BAR, NEED THIS!
- change the color of whatever that purple is, need to change this to 
- a color that matches me more
- incorporate Ubuntu font?



- maybe add in some crazy data scraping that runs on a server
- on a docker container
- this would be a really cool feature
*/