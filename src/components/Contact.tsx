
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";
import { Button } from "./ui/button";
import { FileText, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Download My Resume</h3>
          <p className="text-muted-foreground mb-6 text-center max-w-2xl">
            Feel free to download my resume in PDF format. It's ATS-friendly and contains 
            detailed information about my skills and experience as a Mechatronics Engineer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default" 
              className="flex items-center gap-2" 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/src/amjadmd_CV.pdf';
                link.download = 'Amjad_Mohamed_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileText />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
