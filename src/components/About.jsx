import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, description }) => (
  <div className="w-full sm:w-64 transform transition-transform hover:scale-105 duration-300">
    <div 
      className="
        p-6 flex flex-col items-center space-y-4 
        bg-gradient-to-br from-[#7df3ff] to-[#66f7ff] 
        text-gray-900 rounded-lg min-h-[280px] shadow-lg
      "
    >
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  </div>
);

const SkillBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWidth(percentage);
    }, 500);
  }, [percentage]);

  return (
    <div 
      className="mb-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-[#04d9ff]">{skill}</span>
        <span className="font-medium text-[#04d9ff]">{width}%</span>
      </div>
      <div className="relative w-full">
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="h-3 rounded-full transition-all duration-1000 ease-out bg-[#04d9ff]"
            style={{ width: `${width}%` }}
          />
        </div>
        {isHovered && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded shadow-lg text-sm">
            {skill} - {percentage}%
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => {
  const services = [
    {
      title: "Network Security",
      description: "Implementing robust security measures to protect network infrastructure and data transmission.",
      icon: "🔒"
    },
    {
      title: "Penetration Testing",
      description: "Conducting thorough security assessments to identify and address vulnerabilities.",
      icon: "🎯"
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery strategies for security incidents and breaches.",
      icon: "⚡"
    },
    {
      title: "Security Automation",
      description: "Developing automated solutions for security monitoring and threat detection.",
      icon: "🤖"
    }
  ];

  const skills = [
    { name: "Python", percentage: 100 },
    { name: "C", percentage: 98 },
    { name: "SQL", percentage: 85 },
    { name: "Java", percentage: 90 },
    { name: "HTML", percentage: 90 },
    { name: "JavaScript", percentage: 60 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-2 mb-12">
        <p className="text-lg font-medium text-[#04d9ff]">
          Introduction
        </p>
        <h2 className="text-4xl font-bold text-white">
          Overview
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
         
I'm Junaid Memon, currently pursuing a Bachelor of Science degree in Computer Science at the University of Alberta, with a focused concentration in Cybersecurity and Networks. My academic journey has been enriched by coursework in Data Structures & Algorithms, Object-Oriented Programming, Relational Databases (SQL), Discrete Mathematics, and Statistics, which have provided me with a solid technical foundation.

With a growing passion for cybersecurity, I am developing expertise in areas such as network security, penetration testing, and incident response. Through both personal projects and academic endeavors, I am honing my skills in identifying vulnerabilities, securing infrastructures, and proactively mitigating risks.

I take pride in being a proactive learner with a deep interest in both offensive and defensive security strategies. As I continue to advance my knowledge and hands-on experience in this ever-evolving field, I am eager to contribute to meaningful projects and collaborate with like-minded professionals. Let's work together to protect and enhance your digital environment!
        </p>
      </div>

      {/* Services section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* Skills section */}
      <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
        <div className="max-w-2xl">
          {skills.map((skill) => (
            <SkillBar 
              key={skill.name}
              skill={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
