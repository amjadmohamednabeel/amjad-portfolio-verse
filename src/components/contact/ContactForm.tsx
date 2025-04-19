
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "amnamjad4@gmail.com",
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message
      };

      const result = await emailjs.send(
        'service_azm080q',
        'template_vs0vbcq',
        templateParams,
        'QcOWRlKF8XMLygMUY'
      );

      if (result.text === 'OK') {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <input 
            type="text" 
            id="subject" 
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
          <textarea 
            id="message" 
            rows={5}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full flex items-center justify-center gap-2" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}
