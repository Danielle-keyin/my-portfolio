import React from "react";
import "./App.css";
import RockPaperScissors from "./components/RockPaperScissors";

const projects = [
  {
    // nav links are redirected to keep you on the menu
    title: "Sunny Bites Café Website Menu",
    description:
      "A clean and simple, yet stylish and reactive café menu made with HTML and JavaScript, showing food pics, descriptions, and an easy 'Add to Cart' button for online orders.",
    image: "/images/cafe.jpg",
    link: "/projects/menu.html",
  },
  {
    title: "Roman Architecture Info Site",
    description:
      "My first attempt at utilizing the CSS box model to design a tourist information site for a school project. I used the box model to organize tourist photos and their corresponding links in neatly arranged boxes. Each photo fits within its own box, and the boxes are spaced from one another using margins, creating a clean and structured layout that is easy to navigate.",
    image: "/images/ra.jpg",
    link: "/images/ra.jpg",
  },
  {
    // all nav links work
    title: "Samsung Galaxy S23 Ultra",
    description:
      "I created a simple site about the Samsung Galaxy S23 Ultra, packed with photos, specs, and all kinds of media. It's an easy way to check out the phone’s design, features, and performance with everything laid out in a clear, simple format.",
    image: "/images/phone2.jpg",
    secondImage: "/images/phone1.jpg",
    link: "/projects/index.html",
  },
  {
    title: "Python Yacht Club Receipt Generator",
    description:
      "A simple Python script I made to generate clean, printable receipts for a yacht club. It takes in user details, service choices, calculates the pricing, then formats it all into a neat receipt layout. Great for practicing input/output, string formatting, and keeping things organized for members!",
    image: "/images/yac.jpg",
    link: "/images/yac.jpg",
  },
  {
    title: "Python Text Based - Choose Your Adventure Game",
    description:
      "A fun little Python game where you get to choose your own adventure through text prompts. The player makes choices at each step that lead to different story outcomes — some good, some... not so much. It was a great way to practice conditionals, loops, and user input while getting creative with storytelling.",
    image: "/images/game1.jpg",
    link: "/images/game1.jpg",
  },
  {
    title: "Rock Paper Scissors",
    description: "Who doesn't like a quick and easy game??",
    isComponent: true,
  },
];

function App() {
  return (
    <div className="app">
      <section className="hero">
        <h1>Hi, I'm Danielle</h1>
        <p>
          I'm a Software Developement student studying at Keyin College. Here
          are some of the projects I've worked on recently.
        </p>
        <br />
        <button
          onClick={() => {
            const section = document.getElementById("projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View My Work
        </button>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* this part here was a pain... it almost made me scrap the game */}
              {!project.isComponent && project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              {!project.isComponent && project.secondImage && (
                <img
                  src={project.secondImage}
                  alt={`Additional view of ${project.title}`}
                  className="project-image"
                />
              )}

              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* and here..... */}
              {project.isComponent ? (
                <RockPaperScissors />
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="primary-button">View Project</button>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="about">
        <h2 className="center">About Me</h2>
        <div className="about-content">
          <div className="avatar">
            <img src="/images/av.png" alt="Your Avatar" />
          </div>
          <p>
            Hey! I’m a software development student who’s into coding, creating,
            and gaming. I love building things that are simple, functional, and
            fun to use. When I’m not coding, I’m probably getting inspired by
            games, tinkering with side projects, or just enjoying some downtime.
            Right now, I’m focusing on web development and always looking for
            new ways to turn ideas into real, working stuff on the screen.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>

        <form action="https://formspree.io/f/yourformid" method="POST">
          <input type="text" name="name" required placeholder="Name" />
          <input type="email" name="_replyto" required placeholder="Email" />
          <textarea
            name="message"
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
