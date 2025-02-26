import { motion } from "framer-motion";
import { animationVariants } from "@/app/constants/motion/animations";

const motionWrapper = (Component, animationType) => {
  return function HOC(props) {
    return (
      <motion.div
        variants={animationVariants[animationType] || {}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default motionWrapper;
