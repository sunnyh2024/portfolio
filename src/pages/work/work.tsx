import Accordion from "../../components/accordion/accordion";
import InfoBox from "../../components/infobox/infobox";
import "./work.css";

export default function Work() {
  const items = [
    {
      title: "Capital One",
      duration: "Aug 2024 - Present",
      content: (
        <ul>
          <li>
            <p>
              Currently utilizing Databricks, Spark, and Python to automate the
              monthly data quality verification of over 300 large datasets used
              by both internal and third-party applications
            </p>
          </li>
          <li>
            <p>
              Enhanced the automation above to ensure datasets adhere to an
              updated set of validation rules
            </p>
          </li>
          <li>
            <p>
              Optimized the team's utility library's unit test suite runtime by
              40% from 1 minute to about 35 seconds
            </p>
          </li>
          <li>
            <p>
              Automated the process of notifying Cyber associates of upcoming
              issue and ticket due dates using Databricks, sending 150+ monthly
              emails and Slack messages
            </p>
          </li>
        </ul>
      ),
    },
    {
      title: "Capital One",
      duration: "Jun - Aug 2023",
      content: (
        <ul>
          <li>
            <p>
              Migrated the Android Mobile App's frontend from XML-views to
              Jetpack Compose, improving code extensibility by creating reusable
              components
            </p>
          </li>
          <li>
            <p>
              Designed and developed a fullstack NextJS/Typescript application
              for an internal hackathon that adds playlist history and
              collaboration to Spotify, placing 4th out of 36 teams
            </p>
          </li>
        </ul>
      ),
    },
    {
      title: "Amazon Robotics",
      duration: "Jan - Jun 2023",
      content: (
        <ul>
          <li>
            <p>
              Designed and developed a version control tool for partner teams to
              maintain a history of S2P simulation files ran with different
              parameters using Python
            </p>
          </li>
          <li>
            <p>
              Leveraged Jenkins and ETX to create CI/CD pipelines for the signal
              integrity GitHub repository
            </p>
          </li>
          <li>
            <p>
              Maintained a Python script that analyzes and visualizes data from
              signal integrity simulations, providing routine updates and
              visualizations for over 50+ files across the organization
            </p>
          </li>
        </ul>
      ),
    },
    {
      title: "AMD",
      duration: "Jan - Aug 2022",
      content: (
        <ul>
          <li>
            <p>
              Designed and developed a version control tool for partner teams to
              maintain a history of S2P simulation files ran with different
              parameters using Python
            </p>
          </li>
          <li>
            <p>
              Leveraged Jenkins and ETX to create CI/CD pipelines for the signal
              integrity GitHub repository
            </p>
          </li>
          <li>
            <p>
              Maintained a Python script that analyzes and visualizes data from
              signal integrity simulations, providing routine updates and
              visualizations for over 50+ files across the organization
            </p>
          </li>
        </ul>
      ),
    },
    {
      title: "Northeastern",
      duration: "Sep - Dec 2021",
      content: (
        <ul>
          <li>
            <p>
              Assisted professors for the honors section of Discrete Structures
              consisting of 180 students
            </p>
          </li>
          <li>
            <p>
              Supervised recitations with professors, answering questions and
              grade students' work from these recitations
            </p>
          </li>
          <li>
            <p>
              Various challenge problems given exclusively to honors students
              throughout the semester
            </p>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <InfoBox color="matcha">
      <Accordion items={items} background="forest" height="18rem" />
    </InfoBox>
  );
}
