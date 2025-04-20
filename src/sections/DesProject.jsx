import React, { useRef, useState, useEffect } from 'react';
import TitleHeader from '../components/TitleHeader';
import { designCategories } from '../constants';
import ProjectGlowCard from '../components/ProjectGlowCard';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleCard from "../components/CircleCard";

gsap.registerPlugin(ScrollTrigger);

const DesProject = () => {
    const sectionRef = useRef(null);
    const projectRef = useRef(null);
    const overlayRef = useRef(null);
    const circleContainerRef = useRef(null);
    const swishSoundRef = useRef(null);

    const [showProjects, setShowProjects] = useState(false);
    const [expandedProjectsData, setExpandedProjectsData] = useState(null);

    useEffect(() => {
        swishSoundRef.current = new Audio('/sounds/swish.mp3');
        swishSoundRef.current.preload = 'auto';
        
        return () => {
            if (swishSoundRef.current) {
                swishSoundRef.current.pause();
                swishSoundRef.current = null;
            }
        };
    }, []);

    const playSwishSound = () => {
        if (swishSoundRef.current) {
            swishSoundRef.current.currentTime = 0;
            swishSoundRef.current.play().catch(err => {
                console.error("Error playing sound:", err);
            });
        }
    };

    const restoreScrollPosition = () => {
        const lastScrollPosition = localStorage.getItem('lastScrollPosition');
        if (lastScrollPosition) {
            window.scrollTo({
                top: parseInt(lastScrollPosition),
                behavior: 'smooth'
            });
        }
    };

    const handleBackClick = (e) => {
        e.stopPropagation(); 
        playSwishSound();
        
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut"
        });
        
        gsap.to(".circle-rest", {
            scale: 1,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                setShowProjects(false);
                restoreScrollPosition();
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        );

        const circleCards = gsap.utils.toArray(circleContainerRef.current.children);
        circleCards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { 
                    y: 100, 
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.15 * index,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: circleContainerRef.current,
                        start: "top bottom-=100",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
        
        if (showProjects && projectRef.current) {
            const projectCards = gsap.utils.toArray(projectRef.current.children);
            gsap.fromTo(
                projectCards,
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.6, 
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }
    }, [showProjects]);

    return (
        <div id='designProj' ref={sectionRef} className="mb-24">
            <div className='w-full'>
                <TitleHeader 
                    title="Design Projects"
                    sub="🎨 My Projects Overview"
                />

                <div className='mt-16'>
                    <div 
                        ref={circleContainerRef}
                        className="flex flex-row justify-center items-center flex-wrap gap-8 md:gap-16"
                    >
                        {designCategories.map((category, index) => (
                            <CircleCard 
                                key={index}
                                title={category.title}
                                color={category.color}
                                index={index}
                                projects={category.projects}
                                setExpendedProjectsData={setExpandedProjectsData}
                                setShowProjects={setShowProjects}
                                playSwishSound={playSwishSound}
                            />
                        ))}
                    </div>

                    {showProjects && (
                        <div 
                            ref={overlayRef}
                            className='fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto'
                        >
                            <div className='container mx-auto px-4 py-12'>
                                <button
                                    className='absolute top-6 left-6 text-white flex items-center gap-2 
                                    bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors'
                                    onClick={handleBackClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                    </svg>
                                    Back
                                </button>

                                <div
                                    ref={projectRef}
                                    className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {expandedProjectsData && expandedProjectsData.map((project, idx) => (
                                        <ProjectGlowCard 
                                            key={idx}
                                            project={project}
                                            index={idx}
                                        />
                                    ))}
                                </div>
                                
                                <div className="flex justify-center mt-12 mb-6">
                                    <button
                                        className='text-white flex items-center gap-2 
                                        bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-colors
                                        shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
                                        onClick={handleBackClick}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        Back to Categories
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DesProject;