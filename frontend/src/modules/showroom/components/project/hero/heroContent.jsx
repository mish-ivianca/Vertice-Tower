import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/variants";

function HeroContent({ project }) {
    return (

        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="
                relative
                z-10
                mx-auto
                flex
                h-full
                flex-col
                items-center
                justify-center
                text-center
                text-white
                px-6
            "
        >

            <h1
                className="
                    text-display
                    text-white
                    md:text-7xl
                    font-light
                    uppercase
                    tracking-[0.25em]
                "
            >
                {project.nombre}
            </h1>

            <p
                className="
                    mb-12
                    max-w-3xl
                    leading-8
                    text-lg
                    --showroom-gray
                "
            >
                {project.resumen}
            </p>

        <motion.div
            whileHover={{
                scale: 1.05
            }}
            whileTap={{
                scale: 0.97
            }}
        >
            <Link
                to={`/portal-comercial/${project.slug}/recorrido`}
                className="
                group
                my-12
                rounded-full
                border
                border-white
                px-10
                py-4
                uppercase
                tracking-widest
                hover:bg-white
                hover:text-black
                hover:px-12
                "
            >
                Iniciar recorrido
            </Link>
        </motion.div>


        </motion.div>

    );
}

export default HeroContent;