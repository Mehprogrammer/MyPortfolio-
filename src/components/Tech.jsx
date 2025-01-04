import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Python', category: 'Language' },
  { name: 'HTML', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'R', category: 'Language' },
  { name: 'PyCharm', category: 'Tool' },
  { name: 'App Game KIT', category: 'Tool' },
  { name: 'VS Code', category: 'Tool' },
  { name: 'UNIX', category: 'Tool' },
  { name: 'Linux', category: 'Tool' },
  { name: 'Git', category: 'Tool' },
  { name: 'GitHub', category: 'Tool' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firestore', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'MS Word', category: 'Office' },
  { name: 'MS Excel', category: 'Office' },
  { name: 'PowerPoint', category: 'Office' },
  { name: 'R Studio', category: 'Tool' }
];

const Tech = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    const showCards = async () => {
      for (let i = 0; i < techStack.length; i++) {
        // Delay each card's appearance by 200ms
        await new Promise(resolve => setTimeout(resolve, 200));
        setVisibleCards(prev => [...prev, i]);
      }
    };
    showCards();
  }, []);

  const getIconPath = (name) => {
    const imageMap = {
      Python: '/pictures/python.png',
      HTML: '/pictures/icons8-html-100.png',
      C: '/pictures/icons8-c-programming-48.png',
      Java: '/pictures/icons8-java-48.png',
      SQL: '/pictures/icons8-mysql-48.png',
      R: '/pictures/r-lang.png',
      PyCharm: '/pictures/pycharm-icon.png',
      'App Game KIT': '/pictures/AppGameKit-Mobile-Logo.png',
      'VS Code': '/pictures/visual-studio-code-logo-png-transparent.png',
      UNIX: '/pictures/unix-icon.png',
      Linux: '/pictures/linux.png',
      Git: '/pictures/Git_icon.svg.png',
      GitHub: '/pictures/github-mark-white.png',
      MySQL: '/pictures/mysql.png',
      MongoDB: '/pictures/mongodb.png',
      Firestore: '/pictures/firestore.png',
      AWS: '/pictures/aws.png',
      'MS Word': '/pictures/msword.png',
      'MS Excel': '/pictures/msexcel.png',
      PowerPoint: '/pictures/powerpoint.png',
      'R Studio': '/pictures/rstudio.png'
    };

    return imageMap[name];
  };

  const handleImageError = (name) => {
    setFailedImages(prev => new Set([...prev, name]));
  };

  // Map categories to background colors
  const categoryColors = {
    Language: 'bg-blue-900',
    Tool: 'bg-green-900',
    Database: 'bg-purple-900',
    Cloud: 'bg-orange-900',
    Office: 'bg-red-900'
  };

  // If an image fails to load, show the fallback initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#0a0c1b] p-4">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Tools and Programming
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={visibleCards.includes(index) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div
                className={`
                  w-28 h-28 rounded-lg 
                  flex items-center justify-center 
                  ${categoryColors[tech.category]} 
                  border border-gray-700 
                  transition-all duration-300
                  hover:shadow-2xl hover:scale-105
                  // The glow effect:
                  shadow-[0_0_15px_#04d9ff]
                `}
              >
                {failedImages.has(tech.name) ? (
                  <span className="text-2xl font-bold text-white">
                    {getInitials(tech.name)}
                  </span>
                ) : (
                  <img
                    src={getIconPath(tech.name)}
                    alt={`${tech.name} icon`}
                    className="w-16 h-16 object-contain p-2"
                    onError={() => handleImageError(tech.name)}
                  />
                )}
              </div>
              <span className="mt-3 text-sm font-medium text-white">
                {tech.name}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
