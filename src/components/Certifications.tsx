
import { Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
}

const certifications: Certification[] = [
  {
    title: "Artificial Intelligence Masterclass",
    issuer: "Ureka",
  },
  {
    title: "Machine Learning using Python Intern",
    issuer: "IETE PanTech",
  },
  {
    title: "AWS Machine Learning",
    issuer: "Amazon Web Services",
  },
  {
    title: "Applied Industrial IoT",
    issuer: "L&T EduTech",
  },
  {
    title: "Python Course",
    issuer: "Google",
  },
  {
    title: "Diploma in Robotic Process Automation (RPA)",
    issuer: "Certified Program",
  },
  {
    title: "NASA Space Apps Challenge 2020",
    issuer: "NASA",
  },
  {
    title: "Game Development",
    issuer: "Michigan State University (Coursera)",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 flex flex-col items-center text-center bg-secondary/30 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
