import React, { useRef } from 'react';

const ProjectGlowCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    cardRef.current.style.setProperty("--start", angle);
  };
  
  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border rounded-lg overflow-hidden shadow-xl mb-4 transform transition-all hover:scale-105 duration-300"
      style={{ height: 'fit-content' }}
    >
      <div className="glow"></div>
      <div className="w-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectGlowCard;