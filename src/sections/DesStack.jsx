import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";
import { desStackImgs } from "../constants";

const DesStack = () => {
    const [hintsShown, setHintsShown] = useState(true);

    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );

        if (hintsShown) {
            gsap.fromTo(
                ".drag-hint",
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: 1.5, 
                    ease: "power2.out",
                }
            );
            
            gsap.to(".drag-hint-icon", {
                x: 5,
                duration: 0.6,
                repeat: 2,
                yoyo: true,
                ease: "power1.inOut",
                delay: 2,
            });
        }
    }, [hintsShown]);

    const makeDraggable = (element, container) => {
        if (!element || !container) return;
        let isDragging = false;
        let startX, startY, initialX, initialY;
        let xOffset = 0, yOffset = 0;
        
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        const imgRect = element.getBoundingClientRect();
        const imgWidth = imgRect.width;
        const imgHeight = imgRect.height;

        const mouseDown = (e) => {
            startX = e.clientX;
            startY = e.clientY;
            initialX = xOffset;
            initialY = yOffset;
            isDragging = true;
            setHintsShown(false);

            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
        };

        const mouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const currentX = e.clientX;
            const currentY = e.clientY;
            
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            xOffset = initialX + deltaX;
            yOffset = initialY + deltaY;
            
            const maxX = (containerWidth - imgWidth) / 2;
            const maxY = (containerHeight - imgHeight) / 2;
            
            xOffset = Math.max(Math.min(xOffset, maxX), -maxX);
            yOffset = Math.max(Math.min(yOffset, maxY), -maxY);
            setTranslate(xOffset, yOffset, element);
        };

        const mouseUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };

        const touchStart = (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            initialX = xOffset;
            initialY = yOffset;
            isDragging = true;
            setHintsShown(false);
        };

        const touchMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            xOffset = initialX + deltaX;
            yOffset = initialY + deltaY;
            
            const maxX = (containerWidth - imgWidth) / 2;
            const maxY = (containerHeight - imgHeight) / 2;
            
            xOffset = Math.max(Math.min(xOffset, maxX), -maxX);
            yOffset = Math.max(Math.min(yOffset, maxY), -maxY);
            
            setTranslate(xOffset, yOffset, element);
        };

        const touchEnd = () => {
            isDragging = false;
        };
        const setTranslate = (xPos, yPos, el) => {
            el.style.transform = `translate(${xPos}px, ${yPos}px)`;
        };

        element.addEventListener('mousedown', mouseDown);
        element.addEventListener('touchstart', touchStart);
        element.addEventListener('touchmove', touchMove);
        element.addEventListener('touchend', touchEnd);
        element.style.cursor = 'grab';
        element.addEventListener('mousedown', () => {
            element.style.cursor = 'grabbing';
        });
        element.addEventListener('mouseup', () => {
            element.style.cursor = 'grab';
        });
    };

    useEffect(() => {
        const techIcons = document.querySelectorAll('.tech-icon-img');
        techIcons.forEach(icon => {
            const container = icon.closest('.tech-icon-wrapper');
            if (container) {
                makeDraggable(icon, container);
            }
        });

        const handleFirstDrag = () => {
            localStorage.setItem('dragHintsShown', 'true');
            setHintsShown(false);
            document.removeEventListener('mousedown', handleFirstDrag);
            document.removeEventListener('touchstart', handleFirstDrag);
        };

        const hintsShownBefore = localStorage.getItem('dragHintsShown') === 'true';
        if (hintsShownBefore) {
            setHintsShown(false);
        } else {
            document.addEventListener('mousedown', handleFirstDrag);
            document.addEventListener('touchstart', handleFirstDrag);
        }

        return () => {
            document.removeEventListener('mousedown', handleFirstDrag);
            document.removeEventListener('touchstart', handleFirstDrag);
        };
    }, []);

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Design Tools I Work With"
                    sub="🤝 What I Bring to the Table"
                />
                
                {hintsShown && (
                    <div className="flex-center mb-6 drag-hint">
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-white/20 shadow-lg">
                            <span className="drag-hint-icon">👆</span>
                            <span>Drag these tools to interact with them!</span>
                        </div>
                    </div>
                )}
                
                <div className="tech-grid">
                    {desStackImgs.map((desStackIcon, index) => (
                        <div
                            key={index}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper relative">
                                    {hintsShown && index === 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="drag-hint-overlay animate-pulse">
                                                <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                    <img 
                                        src={desStackIcon.imgPath} 
                                        alt={desStackIcon.name}
                                        className={`tech-icon-img transition-transform ${hintsShown ? 'animate-wiggle' : ''}`}
                                    />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{desStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesStack;