import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ArrowIcon({ color = "#FEE711" }: { color?: string }) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H15M15 0V13.5M15 0L0 13.5"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full bg-[#03064A] py-20 md:py-32">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div className="lg:w-[35%] xl:w-[30%]">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-madimi text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[clamp(48px,6vw,80px)] leading-tight"
            >
              ABOUT ME
            </motion.h2>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white font-inter font-medium text-xl sm:text-2xl md:text-3xl lg:text-[clamp(24px,3vw,42px)] leading-[1.3] tracking-wide mb-8 md:mb-10"
            >
              Lorem ipsum gravida aliquet eu cursus nisl ullamcorper neque
              euismod.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/80 font-inter font-medium text-base sm:text-lg md:text-xl leading-relaxed tracking-wide mb-10"
            >
              Lorem ipsum nibh lacus nisi scelerisque eget urna consectetur
              purus sollicitudin massa aliquet ornare maecenas molestie
              ultricies bibendum malesuada donec iaculis risus vitae luctus
              consequat.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-[#FEE711] font-bold text-lg md:text-xl lg:text-2xl tracking-widest underline hover:text-[#FEE711]/80 transition-colors"
              >
                MORE ABOUT ME
                <ArrowIcon color="#FEE711" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
