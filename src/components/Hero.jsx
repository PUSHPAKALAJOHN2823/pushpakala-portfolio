import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button';
import profile from '../../public/assets/push.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        {/* Left Section */}
        <div>
          {/* Status + small profile */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
              <img
                src={profile}
                alt="profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>

          {/* Headline */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[30ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Fast, Responsive & User-Friendly Websites
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
          </div>
        </div>

        {/* Right Section - Big Profile Image */}
        <div className="mt-10 lg:mt-0">
          <figure className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] mx-auto lg:ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src={profile}
              alt="banner"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero;
