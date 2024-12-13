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
        <p>a { potentialNames }</p>
        <p>
        Currently a Senior at the University of California, Davis,
        majoring in Computer Science, College of Engineering
        </p>
        <p>
          I am actively seeking full-time roles for the year of 2025 post-grad
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
      <p>{props.description}</p>
    </li> 
  );
}

// Here is the main app componet
function App() {
  // Utilizing props within the main component to display 
  // my work experiences
  return (
    <div>
      <main>
        <Header></Header>
        <section id= "core-concepts">
        <h2>my prior work experience:</h2>
        <ul>
          <WorkExperience title = "Sotware Engineer Intern"
                          description = "Worked as a SWE for the corporation in Davis..."/>
          <WorkExperience title = "Software Engineer Intern"
                          description = "Led a team for ARC's Design hub as the lead Software Engineer" 
                          />
          <WorkExperience title = "R&D Hardware Engineering Intern"
                          description = "Conducted vast research on various chipsets that..."/>
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


*/