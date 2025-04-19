
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
      <p className="text-muted-foreground mb-8">
        Feel free to contact me for any work opportunities or collaborations. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <div className="space-y-2">
              <a 
                href="https://wa.me/971505886998" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span>+971 50 588 6998</span>
              </a>
              <a 
                href="https://wa.me/919094729507" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span>+91 90947 29507</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <a 
              href="mailto:amnamjad4@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              amnamjad4@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-muted-foreground">Room No-A12 (2nd Floor),Omani Building( Al Serakal Villa),42A Street,Near Hor Al Anz Park,Dubai,UAE</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <Linkedin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/amjad-mohamed-nabeel-j/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
