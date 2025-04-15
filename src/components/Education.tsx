
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-secondary p-8 rounded-lg">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 mr-3 text-primary" />
                <h3 className="text-2xl font-semibold">Hindustan Institute of Technology and Science</h3>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Graduated 2022</span>
              </div>
            </div>
            <div className="pl-11">
              <h4 className="text-lg text-primary mb-2">B.Tech in Mechatronics</h4>
              <p className="text-muted-foreground mb-2">Percentage: 81%</p>
              <p className="text-sm text-muted-foreground">
                Completed a comprehensive program covering mechanical engineering, electronics, 
                computer science, control engineering, and systems engineering principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
