import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  const skills = [
    'Figma to pixel-perfect and mobile responsive UI',
    'Strong JavaScript skills, including ES6+ features',
    'React state management libraries',
    'Proven React development and debugging experience',
    'Build cross-platform mobile applications using React Native',
    'Familiar with RESTful APIs and WebSocket communication',
    'Knowledge of modern authorization mechanisms like JWT',
    'Comfortable with version control systems like Git',
    'Strong problem-solving skills and attention to detail',
    'Knowledge of CI/CD pipelines and cloud services'
  ];

  return (
    <section id="experience">
      <h2 className="section__title">2. Technologies I worked on</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            {skills.map((skill, index) => <article key={index} className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>{skill}</h4>
            </article>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
