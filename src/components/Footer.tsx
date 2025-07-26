import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shreyashbabar",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Percyakr2161",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:shreyashbabar38@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Shreyash Babar</h3>
            <p className="text-muted-foreground">Freelance Web Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-lg shadow-soft hover:shadow-glow hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <div className="flex justify-center md:justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Shreyash Babar. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;