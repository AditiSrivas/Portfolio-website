import { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/anim.json';

const SectionAnimator = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownFor, setHasShownFor] = useState({});
  const animationRef = useRef(null);

  const sectionNames = {
    'hero': 'Hero',
    'techproject': 'Tech Projects',
    'desproject': 'Design Projects',
    'logoshowcase': 'Programming Languages',
    'featurecards': 'Features',
    'experience': 'Experience',
    'techstack': 'Tech Stack',
    'desstack': 'Design Stack',
    'testimonials': 'Testimonials',
    'contact': 'Contact'
  };

  useEffect(() => {
    const sections = [
      'hero', 'techproject', 'desproject', 'logoshowcase',
      'featurecards', 'experience', 'techstack', 'desstack',
      'testimonials', 'contact'
    ];

    sections.forEach(section => {
      const matches = document.querySelectorAll('section, div');
      matches.forEach(el => {
        if (
          !el.id &&
          el.className &&
          el.className.toLowerCase().includes(section)
        ) {
          el.id = section;
        }
      });
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sectionElements = document.querySelectorAll('section, [id]');
      let currentSectionId = null;

      sectionElements.forEach(section => {
        if (!section.id || !sectionNames[section.id.toLowerCase()]) return;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionId = section.id.toLowerCase();
        }
      });

      if (currentSectionId && currentSectionId !== currentSection) {
        if (!hasShownFor[currentSectionId]) {
          setCurrentSection(currentSectionId);
          setIsVisible(true);
          setHasShownFor(prev => ({ ...prev, [currentSectionId]: true }));

          if (animationRef.current) {
            animationRef.current.goToAndPlay(0, true);
          }

          setTimeout(() => {
            setIsVisible(false);
          }, 4000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 1000); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, hasShownFor]);

  return (
    <div
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex items-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 shadow-lg flex flex-col items-center max-w-xs">
        <div className="w-32 h-32">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>

        <div className="text-center mt-2">
          <p className="text-white text-lg font-medium">Welcome to</p>
          <h3 className="text-white text-xl font-bold">
            {currentSection && sectionNames[currentSection]}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SectionAnimator;
