import React from "react";

import "./Technologies.scss";

const Technologies = () => {
  const techStack = [
    {
      title: "HTML5",
      topics: ["Layout", "Responsive", "Semantic", "Markup"],
      icon: "fa-brands fa-html5",
    },
    {
      title: "CSS3",
      topics: ["Specificity", "Animations", "Grid", "Media queries", "Flexbox"],
      icon: "fa-brands fa-css3",
    },
    {
      title: "JavaScript",
      topics: ["Storage API", "OOP", "ES6", "Async", "DOM handling", "Fetch", "Axios"],
      icon: "fa-brands fa-js",
    },
    {
      title: "TypeScript",
      topics: ["Types", "Interfaces", "OOP", "Enums"],
      icon: "fa-brands fa-js",
    },
    {
      title: "PHP",
      topics: ["Security", "OOP", "MVC"],
      icon: "fa-brands fa-php",
    },
    {
      title: "Laravel",
      topics: ["MVC", "Auth", "Eloquent ORM", "Rest API", "Security"],
      icon: "fa-brands fa-laravel",
    },
    {
      title: "React.js",
      topics: [
        "React Hooks",
        "React router",
        "SPA",
        "Redux",
        "Material-ui",
        "Functional Components",
        "typescript",
        "inertia.js",
      ],
      icon: "fa-brands fa-react",
    },
    {
      title: "Vue.js",
      topics: [
        "Vue router",
				"Vuex",
				"SPA",
        "Composition API",
        "Integration with electron",
        "typescript",
        "inertia.js",
      ],
      icon: "fa-brands fa-vuejs",
    },
    {
      title: "SQL Server",
      topics: [
        "Stored procedures",
        "Data types",
        "Data manipulation",
        "Data querying",
      ],
      icon: "fa-solid fa-database",
    },
    {
      title: "MySQL",
      topics: [
        "Stored procedures",
        "Data types",
        "Data manipulation",
        "Data querying",
      ],
      icon: "fa-solid fa-database",
    },
    {
      title: "Git",
      topics: [],
      icon: "fa-brands fa-git-alt",
    },
    {
      title: "GitHub",
      topics: [],
      icon: "fa-brands fa-github",
    },
  ];

  return (
    <div className="technologies__wrapper">
      <div className="technologies__container">
        <h2 className="title">Technologies</h2>
        <div className="container">
          {techStack.map((tech, index) => (
						<div className="tech__wrapper card" key={index}>
							<i className={tech.icon} style={{ fontSize: '1.5rem', marginRight: '5px' }}></i>
              <span className="tech__title" style={{ marginBottom: '5px' }}>{tech.title}</span>
							<div>
								{tech.topics.map((topic, index) => (
									<span key={index} className="badge" style={{ marginBottom: 0, marginTop: '5px' }}>
										{topic}
									</span>
								))}
							</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
