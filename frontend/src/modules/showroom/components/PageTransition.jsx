import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

function PageTransition() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.5,
                    ease:  "easeInOut",
                }}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                "
            >
                {outlet}
            </motion.div>
        </AnimatePresence>
    );
}

export default PageTransition;