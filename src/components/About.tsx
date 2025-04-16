
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Mechatronics Engineer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a skilled Mechatronics Engineer with experience in robotics, embedded systems, automation, and IoT solutions. 
              My expertise spans across various domains including robotic arms, drones, machine learning, and industrial automation.
            </p>
            <p className="text-muted-foreground mb-6">
              With a strong background in programming and hardware integration, I've worked on diverse projects from robotic arm prototyping 
              to aerostat embedded systems. I'm passionate about developing innovative solutions that bridge the gap between mechanical, 
              electronic, and software engineering.
            </p>
            <p className="text-muted-foreground">
              I'm currently working at Rightsource LLC in Dubai, where I apply my skills in mechatronics to develop interactive projects.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium">Location:</strong>
                  <span className="text-muted-foreground">Room No-A12 (2nd Floor),Omani Building( Al Serakal Villa),42A Street,Near Hor Al Anz Park,Dubai,UAE</span>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium">Phone:</strong>
                  <a 
                    href="tel:+971505886998" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +971 50 588 6998
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium">Email:</strong>
                  <a 
                    href="mailto:amnamjad4@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amnamjad4@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase className="mr-3 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium">Current:</strong>
                  <span className="text-muted-foreground">Mechatronics Engineer at Rightsource LLC</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
