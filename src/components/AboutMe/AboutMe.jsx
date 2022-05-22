import React from "react";

import "./AboutMe.scss";

const AboutMe = () => {

  const studies = [
    {
      id: 1,
      name: "Universidad Tecnológica de santiago (UTESA)",
      time: "Jan. 2019 - Currently",
      career: "Systems Engineering",
      learned: [
        "HTML",
        "JavaScript",
        "PHP",
        "C#",
        "SQL Server",
        "MySQL",
        "Java",
        "Python",
        "C++",
        "SDLC",
        "Machine Learning",
        "Data Structures",
        "Project development and administration",
        "And More",
      ],
    },
    {
      id: 2,
      name: "Instituto Politécnico la Esperanza",
      time: "Aug. 2014 - May. 2018",
      career: "Bachiller técnico en informática",
      learned: ["C#", "MySQL", "Network Administration", "MS Office", "Technical Support"],
    },
  ];

  return (
    <div className="about__me__wrapper">
      <div className="bio__section">
        <h3 className="title">About Me</h3>
        <div className="card">
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam
            amet laudantium natus voluptates nisi, dicta vero qui dolorum
            asperiores nulla temporibus doloremque at expedita quo maxime dolorem
            magnam a dignissimos. Eos eaque repellendus impedit fuga quia
            voluptatibus perferendis omnis. Ratione expedita deserunt alias ea
            quasi eveniet fuga id magni.
          </p>
        </div>
      </div>
      <div className="education__section">
        <h2 className="title">Education</h2>
        {studies.map((study) => (
          <div className="card" key={study.id}>
              <span className="d-block">{study.time}</span>
            <div className="card__header">{study.name}</div>
            <div className="card__body">
              <span className="d-block">{study.career}</span>
              <p>
                {
                  study.learned.map((item, i) => (
                    <span className="badge" key={i}>{ item }</span>
                  ))
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;