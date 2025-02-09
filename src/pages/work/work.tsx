import Accordion from "../../components/accordion/accordion";
import InfoBox from "../../components/infobox/infobox";

export default function Work() {
  const bullets = {
    capitalOne2: [
      "Currently utilizing Databricks, Spark, and Python to automate the monthly data quality verification of over 300 large datasets used by both internal and third-party applications",
      "Enhanced the automation above to ensure datasets adhere to an updated set of validation rules",
      "Optimized the test suite runtime of the team's utility library by 40% from 1 minute to about 35 seconds",
      "Automated the process of notifying Cyber associates of upcoming issue and ticket due dates using Databricks, sending 150+ monthly emails and Slack messages",
    ],
    capitalOne1: [
      "Migrated the Android Mobile App's frontend from XML-views to Jetpack Compose, improving code extensibility by creating reusable components",
      "Designed and developed a fullstack NextJS/Typescript application for an internal hackathon that adds playlist history and collaboration to Spotify, placing 4th out of 36 teams",
    ],
    amazonRobotics: [
      "Designed and developed a version control tool for partner teams to maintain a history of S2P simulation files ran with different parameters using Python",
      "Leveraged Jenkins and ETX to create CI/CD pipelines for the signal integrity GitHub repository",
      "Maintained a Python script that analyzes and visualizes data from signal integrity simulations, providing routine updates and visualizations for over 50+ files across the organization",
    ],
    amd: [
      "Designed and developed a version control tool for partner teams to maintain a history of S2P simulation files ran with different parameters using Python",
      "Leveraged Jenkins and ETX to create CI/CD pipelines for the signal integrity GitHub repository",
      "Maintained a Python script that analyzes and visualizes data from signal integrity simulations, providing routine updates and visualizations for over 50+ files across the organization",
    ],
    northeastern: [
      "Assisted professors for the honors section of Discrete Structures consisting of 180 students",
      "Supervised recitations with professors, answering questions and grade students' work from these recitations",
      "Various challenge problems given exclusively to honors students throughout the semester",
    ],
  };

  return (
    <InfoBox color="matcha">
      <Accordion
        items={[
          {
            title: "Capital One",
            duration: "Aug 2024 - Present",
            content: (
              <ul>
                {bullets.capitalOne2.map((bullet, index) => (
                  <li key={index}>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Capital One",
            duration: "Jun - Aug 2023",
            content: (
              <ul>
                {bullets.capitalOne1.map((bullet, index) => (
                  <li key={index}>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Amazon Robotics",
            duration: "Jan - Jun 2023",
            content: (
              <ul>
                {bullets.amazonRobotics.map((bullet, index) => (
                  <li key={index}>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "AMD",
            duration: "Jan - Aug 2022",
            content: (
              <ul>
                {bullets.amd.map((bullet, index) => (
                  <li key={index}>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Northeastern",
            duration: "Sep - Dec 2021",
            content: (
              <ul>
                {bullets.northeastern.map((bullet, index) => (
                  <li key={index}>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            ),
          },
        ]}
        background="forest"
        height="18rem"
      />
    </InfoBox>
  );
}
