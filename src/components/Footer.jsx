import React from 'react';
import { ButtonPrimary } from './Button';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 mt-12 border-t border-zinc-700 text-white py-6">
      <div className="container mx-auto px-2 flex flex-col items-center">

        {/* Top: Open to Roles + Button */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
          <h2 className="headline-1 text-center lg:text-left">Open to Roles</h2>
          <ButtonPrimary
            href="mailto:pushpakalajohn.2@gmail.com"
            label="Stay in Touch"
            icon="chevron_right"
          />
        </div>

        {/* Bottom: Logo + Text */}
        <div className="flex flex-col items-center  pt-2">
          <p className="text-zinc-500 text-sm text-center">
            &copy; 2025 <span className="text-zinc-200">pushpakalajohn</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
