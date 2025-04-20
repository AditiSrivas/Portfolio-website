import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const TechProject = () => {
    const sectionRef = useRef(null);
    const intellicubeRef = useRef(null);
    const flightRef = useRef(null);
    const laundrixRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
        );

        const cards = [intellicubeRef.current, flightRef.current, laundrixRef.current];

        cards.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
            y: 50,
            opacity: 0,
            },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
            },
            }
        );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <TitleHeader 
                    title="Technical Projects"
                    sub="👩‍💻 My Projects Overview"
                />

                <div className="mt-12 md:mt-16">
                    <div className="showcaselayout">
                        <div ref={intellicubeRef} className="first-project-wrapper">
                            <div className="image-wrapper">
                                <a href="https://github.com/AditiSrivas/IntelliCube" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/Intellicube.png" alt="Intellicube App Interface" />
                                </a>
                            </div>
                            <div className="text-content">
                                <h2>
                                    Studies Made Easy With AI-Powered Intellicube, Your Own Study Companion.
                                </h2>
                                <p className="text-white-50 md:text-xl">
                                    A cube shaped study companion made with ESP32, programmed in C++ and its study 
                                    companion app made in Kotlin.
                                </p>
                            </div>
                        </div>

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={flightRef}>
                                <div className="image-wrapper bg-[#F5D5FF]">
                                    <a href="https://github.com/AditiSrivas/Flight-Tracker/tree/Q1" target="_blank" rel="noopener noreferrer">
                                        <img src="/images/flight_tracker.png" alt="Flight Tracker" />
                                    </a>
                                </div>
                                <h2>The Flight Tracker Platform</h2>
                            </div>

                            <div className="project" ref={laundrixRef}>
                                <div className="image-wrapper bg-[#F3EAD8]">
                                    <a href="https://github.com/AditiSrivas/Laundrix-App" target="_blank" rel="noopener noreferrer">
                                        <img src="/images/laundrix.png" alt="Laundrix App" />
                                    </a>
                                </div>
                                <h2>Laundrix - Marketplace App for Laundry Vendors</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechProject;