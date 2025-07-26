import { Card } from '@/components/ui/card';
import { Code, Database, Globe, Palette, Server, BarChart } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["C Programming", "Python", "Java", "Project Management", "Structural Analysis"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"]
    },
    {
      title: "Data & Analysis",
      icon: BarChart,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Data Structures & Algorithms", "Data Analysis", "Microsoft Excel"]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Canva", "UI/UX Design", "Responsive Design", "SEO Optimization"]
    }
  ];

  const progressSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "WordPress", level: 90 },
    { name: "PHP", level: 80 },
    { name: "Python", level: 75 },
    { name: "MySQL", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-card border-0 hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 ${category.bgColor} rounded-lg`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {progressSkills.map((skill, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;