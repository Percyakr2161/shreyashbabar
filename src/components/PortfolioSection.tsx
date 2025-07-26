import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Filter } from 'lucide-react';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "Freelancer Website",
      year: "2023",
      category: "WordPress",
      description: "A comprehensive freelancing platform with user registration, project listings, and secure payment integration. Features include user profiles, project management, and real-time messaging system.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      features: ["User Registration", "Project Listings", "Secure Payments", "Real-time Messaging"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-commerce Website",
      year: "2024",
      category: "E-commerce",
      description: "A fully responsive e-commerce platform with WooCommerce integration. Includes advanced features like dynamic cart, checkout process, inventory management, and SEO optimization.",
      technologies: ["WordPress", "WooCommerce", "HTML", "CSS", "JavaScript"],
      features: ["Responsive Design", "SEO Optimized", "Dynamic Cart", "Inventory Management"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Recipe App Website",
      year: "2023-24",
      category: "Web App",
      description: "An interactive recipe application that displays real-time data using Food Recipe API. Features include recipe search, filtering, favorites, and detailed nutritional information.",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      features: ["Real-time Data", "Recipe Search", "Favorites System", "Nutritional Info"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Portfolio Website",
      year: "2024",
      category: "Portfolio",
      description: "A modern, responsive portfolio website showcasing web development projects. Built with focus on performance, accessibility, and user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      features: ["Dark Mode", "Smooth Animations", "Mobile First", "Performance Optimized"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Business Landing Page",
      year: "2023",
      category: "WordPress",
      description: "A professional business landing page with lead generation forms, service showcases, and integrated analytics. Optimized for conversions and search engines.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      features: ["Lead Generation", "Analytics Integration", "SEO Optimized", "Contact Forms"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Restaurant Website",
      year: "2024",
      category: "E-commerce",
      description: "A restaurant website with online ordering system, menu management, and reservation booking. Includes payment integration and order tracking.",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      features: ["Online Ordering", "Reservation System", "Menu Management", "Order Tracking"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = ['All', 'WordPress', 'E-commerce', 'Web App', 'Portfolio'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and the technologies I've worked with
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`
                ${filter === category 
                  ? 'bg-primary text-primary-foreground shadow-soft' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }
                transition-all duration-300
              `}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card shadow-card border-0 overflow-hidden hover:shadow-glow transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20 text-muted-foreground"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-accent/10 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;