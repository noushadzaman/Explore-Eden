import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const Banner = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["-80%", "300%"]);


    return (
        <div
            ref={ref}
            className="w-full h-[80vh] overflow-hidden relative grid place-items-center"
        >
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-white text-4xl md:text-7xl  z-10 text-center"
            >
                Welcome <br />to Explore Eden
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/image-full.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/image-bottom.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
};

export default Banner;