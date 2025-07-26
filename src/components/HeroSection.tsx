import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl text-primary font-medium">Hi, I'm</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Shreyash Babar
              </h1>
              <h3 className="text-2xl lg:text-3xl text-accent font-medium">
                Freelance Web Developer
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about creating responsive, modern web solutions that bring ideas to life. 
              Specializing in WordPress development and e-commerce solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-glow transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="lg:flex justify-center animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-primary rounded-full opacity-20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative bg-card p-8 rounded-2xl shadow-card">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">SB</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Full-Stack Developer</h4>
                    <p className="text-muted-foreground">Computer Science Graduate</p>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;