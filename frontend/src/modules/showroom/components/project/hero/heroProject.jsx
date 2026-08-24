import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroBackground from "./HeroBackground";

function HeroProject({ project }) {
    const navigate = useNavigate();
    const [stage, setStage] = useState(0);
    const stages = project.hero.stages;
    const currentStage = stages[stage];
    const isLastStage = stage === stages.length - 1;
    const handleButtonClick = () => {

    if (isLastStage) {
        navigate(`/portal-comercial/${project.slug}/recorrido`);
        return;
    }

    setVideoEnded(false);
    setStage(stage + 1);
};
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <section
            className="
                relative
                h-screen
                w-full
                overflow-hidden
            "
        >

            {/* VIDEO */}
            <HeroBackground
                desktopVideo={currentStage.desktop}
                loop={stage === 0}
                onEnded={() => setVideoEnded(true)}
            />
            <div
                className="
                    absolute
                    inset-0
                    z-20
                    flex
                    items-center
                    justify-center
                    px-6
                "
            >

                <AnimatePresence mode="wait">

                    <motion.div
                        key={stage}
                        layout

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            y: -20,
                        }}

                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            layout: {
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        }}

                        className="
                            max-w-3xl
                            text-center
                            text-white
                        "
                    >

                        {/* TÍTULO */}
                        <h1
                            className="
                                text-display
                                text-4xl
                                font-light
                                uppercase
                                tracking-[0.25em]
                                md:text-7xl
                            "
                        >
                            {currentStage.title}
                        </h1>


                        {/* SUBTÍTULO */}
                        <span
                            className="
                                mt-4
                                block
                                text-sm
                                tracking-[0.3em]
                                text-white/90
                                md:text-lg
                            "
                        >
                            {currentStage.subtitle}
                        </span>
                        {(stage === 0 || videoEnded) && (

                            <button
                                onClick={handleButtonClick}
                                className="
                                    mt-8
                                    rounded-full
                                    border
                                    border-white
                                    px-6
                                    py-2
                                    text-xs
                                    uppercase
                                    tracking-widest
                                    text-white
                                    transition-all
                                    duration-900
                                    hover:bg-white
                                    hover:text-black
                                    md:px-10
                                    md:py-4
                                    md:text-lg
                                "
                            >
                                {currentStage.button}
                            </button>

                        )}
                    </motion.div>

                </AnimatePresence>

            </div>

        </section>
    );
}

export default HeroProject;