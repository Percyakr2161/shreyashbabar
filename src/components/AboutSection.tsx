import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Calendar, MapPin, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const downloadResume = () => {
    // In a real implementation, this would trigger a resume download
    console.log('Downloading resume...');
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, education, and journey into web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate Full-Stack Web Developer with a strong foundation in Computer Science. 
              Currently pursuing my Bachelor's degree at SPPU University (graduating in 2025), I've 
              dedicated myself to mastering modern web technologies and creating exceptional digital experiences.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My journey into web development began with a fascination for how code can transform ideas 
              into interactive, functional websites. I specialize in responsive web design, WordPress 
              development, and e-commerce solutions, always focusing on clean code and user-centered design.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and staying updated with the latest trends in web development. I believe in continuous learning 
              and always strive to deliver solutions that exceed expectations.
            </p>

            <Button 
              onClick={downloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="space-y-6 animate-scale-in">
            <Card className="p-6 bg-card shadow-card border-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">2021 - 2025</span>
                </div>
                <h4 className="font-medium text-foreground">Bachelor of Computer Science</h4>
                <p className="text-muted-foreground">SPPU University</p>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-card border-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Available for Remote Work</p>
                </div>
              </div>
              <p className="text-foreground">Based in India, working with clients worldwide</p>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-secondary rounded-lg">
                <div className="text-2xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;