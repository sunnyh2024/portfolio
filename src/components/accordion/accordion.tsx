import { useState } from "react";
import "./accordion.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(index);
  };

  const items = [
    {
      title: "Capital One",
      duration: "Aug 2024 - Present",
      content: [
        "Currently utilizing Databricks, Spark, and Python to automate the monthly data quality verification of over 300 large datasets used by both internal and third-party applications",
        "Enhanced the automation above to ensure datasets adhere to an updated set of validation rules",
        "Optimized the team's utility library's unit test suite runtime by 40% from 1 minute to about 35 seconds",
        "Automated the process of notifying Cyber associates of upcoming issue and ticket due dates using Databricks, sending 150+ monthly emails and Slack messages",
      ],
    },
    {
      title: "Capital One",
      duration: "Jun - Aug 2023",
      content: [
        "Migrated the Android Mobile App's frontend from XML-views to Jetpack Compose, improving code extensibility by creating reusable components",
        "Designed and developed a fullstack NextJS/Typescript application for an internal hackathon that adds playlist history and collaboration to Spotify, placing 4th out of 36 teams",
      ],
    },
    {
      title: "Amazon Robotics",
      duration: "Jan - Jun 2023",
      content: [
        "Maintained and updated an application for Fulfillment Center workers to report issues and mechanical failures, performing bug fixes and optimizing performance",
        "Redesigned the ticket intake process of the application above using React/Javascript, allowing users to create their own custom intake workflows and used Jest to ensure 80% test coverage",
        "Implemented and tested AWS Lambda functions to fetch employee data from an internal API and application icons from AWS S3 to be displayed upon user login",
      ],
    },
    {
      title: "AMD",
      duration: "Jan - Aug 2022",
      content: [
        "Designed and developed a version control tool for partner teams to maintain a history of S2P simulation files ran with different parameters using Python",
        "Leveraged Jenkins and ETX to create CI/CD pipelines for the signal integrity GitHub repository",
        "Maintained a Python script that analyzes and visualizes data from signal integrity simulations, providing routine updates and visualizations for over 50+ files across the organization",
      ],
    },
    {
      title: "Northeastern",
      duration: "Sep - Dec 2021",
      content: [
        "Assisted professors for the honors section of Discrete Structures consisting of 180 students",
        "Supervised recitations with professors, answering questions and grade students' work from these recitations",
        " various challenge problems given exclusively to honors students throughout the semester",
      ],
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleIndex(index)}
          className="accordion-item shadow-forest light-border"
        >
          <div className="accordion-header">
            <h3>{item.title}</h3>
            <h4>{item.duration}</h4>
          </div>
          {activeIndex === index && (
            <div className="content">
              <ul className="bullets">
                {item.content.map((bullet, i) => (
                  <li key={i}>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
