import { Card } from '@/components/ui/card';
import { Globe, ShoppingCart, Smartphone, Code, Palette, FileText, Database, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Responsive Web Design",
      description: "Creating modern, mobile-first websites that look great on all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: ShoppingCart,
      title: "WordPress Development",
      description: "Custom WordPress websites and themes tailored to your specific business needs.",
      features: ["Custom Themes", "Plugin Integration", "Content Management", "Security Optimization"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment integration and inventory management.",
      features: ["WooCommerce", "Payment Gateway", "Inventory System", "Order Management"]
    },
    {
      icon: Code,
      title: "Custom Web Solutions",
      description: "Bespoke web applications built with modern technologies to solve your unique challenges.",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Scalable Architecture"]
    },
    {
      icon: Palette,
      title: "UI/UX Enhancement",
      description: "Improving user experience and interface design to boost engagement and conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: FileText,
      title: "Blog Integration",
      description: "Setting up content management systems and blog functionality for your website.",
      features: ["Content Strategy", "CMS Setup", "Blog Design", "SEO Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card shadow-card border-0 hover:shadow-glow transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Database className="h-4 w-4 text-primary" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Search className="h-4 w-4 text-accent" />
                <span>SEO Optimization</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Smartphone className="h-4 w-4 text-primary" />
                <span>Mobile Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;