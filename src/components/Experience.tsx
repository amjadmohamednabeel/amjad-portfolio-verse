
import { Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Mechatronics Engineer",
    company: "Rightsource LLC Dubai",
    duration: "June 2024 - Present",
    description: "Working on interactive projects applying mechatronics principles.",
  },
  {
    title: "Mechatronics Engineer",
    company: "Aravez DMCC",
    duration: "Oct 2023 - Feb 2024",
    description: "Worked on Aerostat embedded system and Mechatronics system in R&D.",
  },
  {
    title: "Mechatronics Engineer Intern",
    company: "Shokon Auto - DUBAI",
    duration: "Sept 2023",
    description: "Focused on embedded programming and design, automation, and automotive solutions.",
  },
  {
    title: "Robotic Mentor",
    company: "Evobi Automations Pvt Ltd (BIBOX) - Bangalore",
    duration: "Nov 2022 - Feb 2023",
    description: "Taught and mentored on robotics, IoT, drones, microcontrollers, and other technologies.",
  },
  {
    title: "Robotics Engineer (R&D)",
    company: "Enstein Automation and Robotics Pvt Ltd - Chennai",
    duration: "Sep 2022 - Oct 2022",
    description: "Prototyped a robotic arm for small-scale industries, using ROS, arm communication with MoveIt, RViz.",
  },
  {
    title: "Robotics Engineer Intern",
    company: "Atum Robotics (Startup) - Chennai",
    duration: "May 2022 - Aug 2022",
    description: "Prototyped entertainment robots for malls, implemented ROS, arm communication using MoveIt, RViz.",
  },
  {
    title: "Machine Learning Intern",
    company: "IETE & PanTech - Remote",
    duration: "Jun 2021 - Jul 2021",
    description: "Developed machine learning applications using Python.",
  },
  {
    title: "Intern",
    company: "TI Anode Fabricators PVT. LTD - Chennai",
    duration: "Dec 2019",
    description: "Contributed to design & construction of Technical Support department.",
  },
  {
    title: "Intern",
    company: "TRANSTONNELSTROY-AFCONS JOINT VENTURE - Chennai",
    duration: "Jun 2019",
    description: "Assisted in design and construction of underground station & associated tunnels for Chennai Metro Rail.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{exp.duration}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
