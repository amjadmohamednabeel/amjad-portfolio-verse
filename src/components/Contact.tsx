
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
