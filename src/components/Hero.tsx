
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="text-xl font-semibold text-muted-foreground mb-2">Hello, I'm</h2>
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">
              Amjad Mohamed
            </h1>
            <h3 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
              Mechatronics Engineer
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Experienced in robotics, IoT, and automation with a passion for developing innovative mechatronic solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#experience">View Experience</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center shadow-lg">
              <div className="absolute inset-3 rounded-full bg-white overflow-hidden border-4 border-white">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/profile-photo.png" 
                    alt="Amjad Mohamed" 
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="text-3xl sm:text-4xl font-bold text-primary">AM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll Down">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
