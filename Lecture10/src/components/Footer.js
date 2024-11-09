const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="footer-links flex justify-center space-x-8 mb-4">
        <a href="#about" className="footer-link hover:text-gray-400 transition-colors duration-200">
          About
        </a>
        <a href="#contact" className="footer-link hover:text-gray-400 transition-colors duration-200">
          Contact Us
        </a>
        <a href="#terms" className="footer-link hover:text-gray-400 transition-colors duration-200">
          Terms of Service
        </a>
      </div>
      <p className="footer-text text-center text-gray-500">© 2024 Your Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
