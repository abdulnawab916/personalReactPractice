// ran into a bug for the longest time with this, setting up
// this file path! WTF!
import ProjectButton from './componentFiles/ProjectButton';

function Header() {

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
    );
}

function WorkExperience(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <h5>{props.company}</h5>
      <p>{props.description}</p>
    </li> 
  );
}

function App() {
  // change the button elements to be tabButtons coming in from a different file instead
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
        <section id = "examples">
          <h2>Projects:</h2>
          <menu>
          <ProjectButton>User Level Thread Mananger</ProjectButton>
          <ProjectButton>$GoatedShell</ProjectButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;