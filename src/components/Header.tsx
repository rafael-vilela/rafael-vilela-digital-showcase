
import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "E-commerce", href: "#ecommerce" },
    { label: "Sites Institucionais", href: "#websites" },
    { label: "Dashboards", href: "#dashboards" },
    { label: "Contato", href: "#contact" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom flex justify-between items-center">
        <a 
          href="#home" 
          className="font-montserrat text-2xl font-bold text-primary"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('#home');
          }}
        >
          Rafael Vilela
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8 py-8">
              {menuItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-xl font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
