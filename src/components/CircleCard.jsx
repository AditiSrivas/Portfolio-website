import gsap from "gsap";
import React, { useRef, useState, useEffect } from 'react';

const CircleCard = ({
    title,
    color,
    index,
    projects,
    setExpendedProjectsData,
    setShowProjects,
    playSwishSound
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const circleRef = useRef(null);
    const titleRef = useRef(null);
    const circleAnimationRef = useRef(null);

    const handleClick = () => {
        if (playSwishSound && typeof playSwishSound === 'function') {
            playSwishSound();
        }
        
        setIsActive(true);
        setExpendedProjectsData(projects);
        
        const scrollPosition = window.scrollY;
        localStorage.setItem('lastScrollPosition', scrollPosition);
        
        circleAnimationRef.current = gsap.to(circleRef.current, {
            scale: 50,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                setShowProjects(true);
            }
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        gsap.to(circleRef.current, {
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(titleRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        gsap.to(circleRef.current, {
            scale: 1,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(titleRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    return (
        <div
            className="relative flex flex-col items-center cursor-pointer mx-4 transition-transform duration-300"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={circleRef}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center 
                justify-center circle-rest shadow-md"
                style={{
                    backgroundColor: color,
                }}
            >
                <p 
                    ref={titleRef}
                    className="text-xl font-bold text-white text-center"
                >
                    {title}
                </p>
            </div>
            {isHovered && (
                <div className="absolute -bottom-8 text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                    Click to view
                </div>
            )}
        </div>
    );
};

export default CircleCard;