import React from 'react';

interface HeroSectionProps {
  bgColor?: string; // Background color of the section
  title: string; // Main title
  titleHighlight?: string; // Highlighted text in the title
  subtitle?: string; // Subtitle under the title
  description: string; // Short description
  buttonText?: string; // Button text
  buttonLink?: string; // Button link URL
  buttonColor?: string; // Button background color
  buttonTextColor?: string; // Button text color
}

const HeroSection: React.FC<HeroSectionProps> = ({
  bgColor = 'bg-gradient-to-b from-blue-100 to-blue-300',
  title,
  titleHighlight,
  subtitle,
  description,
  buttonText = 'Get Started',
  buttonLink = '#',
  buttonColor = 'bg-primary',
  buttonTextColor = 'text-white',
}) => {
  return (
    <section className={`${bgColor} py-16 sm:py-20 h-full`}>
      <div className="mx-auto max-w-screen-xl px-4 h-full flex items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-primary">
            {title}
            <span className="text-secondary">
              {titleHighlight}
            </span>
            <strong className="block text-white">{subtitle}</strong>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600">{description}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buttonLink}
              className={`block w-full px-12 py-3 text-sm font-medium rounded shadow sm:w-auto hover:opacity-90 transition ${buttonColor} ${buttonTextColor}`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
