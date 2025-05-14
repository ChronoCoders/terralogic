import React from 'react';
import { Sprout, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">Terra Logic</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering farmers with advanced agricultural analytics. Our mission is to help optimize crop yields through intelligent data analysis and actionable insights.
            </p>
            <div className="mt-6 flex space-x-6">
              <SocialIcon icon={<Facebook size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Instagram size={20} />} href="#" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <FooterLink href="#">Crop Health Monitoring</FooterLink>
              <FooterLink href="#">Irrigation Intelligence</FooterLink>
              <FooterLink href="#">Harvest Optimization</FooterLink>
              <FooterLink href="#">Disease Detection</FooterLink>
              <FooterLink href="#">Yield Forecasting</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Terra Logic. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
      {children}
    </a>
  </li>
);

export default Footer;