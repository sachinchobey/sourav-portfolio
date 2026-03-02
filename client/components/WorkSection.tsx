import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface WorkItem {
  title: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
}

const workItems: WorkItem[] = [
  {
    title: "SOCIAL POSTS",
    description1:
      "Lorem ipsum etiam sed sem non ac vitae ac duis eu placerat eu placerat arcu diam dolor suspendisse vitae tortor mauris dictum tristique nunc sapien in varius neque urna egestas auctor vehicula suspendisse arcu dis.",
    description2:
      "Lorem ipsum elementum bibendum consectetur non nibh turpis diam elit diam feugiat egestas tellus sagittis ullamcorper enim egestas viverra sagittis aliquam eget vitae tincidunt ipsum.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/305363e58565baee69857937827fb8a46483f2a6?width=1476",
    imageAlt: "Social Posts project",
    imageLeft: true,
  },
  {
    title: "ADS FOR SOCIAL",
    description1:
      "Lorem ipsum etiam sed sem non ac vitae ac duis eu placerat eu placerat arcu diam dolor suspendisse vitae tortor mauris dictum tristique nunc sapien in varius neque urna egestas auctor vehicula suspendisse arcu dis.",
    description2:
      "Lorem ipsum elementum bibendum consectetur non nibh turpis diam elit diam feugiat egestas tellus sagittis ullamcorper enim egestas viverra sagittis aliquam eget vitae tincidunt ipsum.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f3e6dcf15105dc9fe0812face0c8a556a16198fb?width=1476",
    imageAlt: "Ads for Social project",
    imageLeft: false,
  },
  {
    title: "UI/UX",
    description1:
      "Lorem ipsum etiam sed sem non ac vitae ac duis eu placerat eu placerat arcu diam dolor suspendisse vitae tortor mauris dictum tristique nunc sapien in varius neque urna egestas auctor vehicula suspendisse arcu dis.",
    description2:
      "Lorem ipsum elementum bibendum consectetur non nibh turpis diam elit diam feugiat egestas tellus sagittis ullamcorper enim egestas viverra sagittis aliquam eget vitae tincidunt ipsum.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ac81de33667fd482df86a24765612e5417e3d0bc?width=1476",
    imageAlt: "UI/UX project",
    imageLeft: true,
  },
];

function ArrowIcon({ color = "#060FB0" }: { color?: string }) {
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

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div
      className={`flex flex-col ${item.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
    >
      {/* Image */}
      <div className="w-full md:w-[43%] flex-shrink-0">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Text content */}
      <div className="w-full md:w-[57%]">
        <h3 className="text-white font-inter font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-widest mb-6">
          {item.title}
        </h3>
        <p className="text-white font-inter font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide mb-6">
          {item.description1}
        </p>
        <p className="text-white font-inter font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide mb-8">
          {item.description2}
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-3 bg-[#FEE711] text-[#060FB0] font-bold text-base md:text-lg tracking-wider px-6 py-3 rounded-full hover:bg-[#FEE711]/90 transition-colors"
        >
          VIEW PAGE
          <ArrowIcon color="#060FB0" />
        </Link>
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#03064A] via-[#060FB0] to-[#03064A] py-20 md:py-32">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-madimi text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[clamp(48px,6vw,80px)] leading-tight mb-6"
          >
            OUR LATEST WORK
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-inter font-medium text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-3xl mx-auto lg:mx-0"
          >
            Lorem ipsum fermentum varius posuere in tristique urna aliquam
            mauris nulla sit eget fringilla sed.
          </motion.p>
        </div>

        {/* Work items */}
        <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
          {workItems.map((item, index) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>

        {/* Bottom view page link */}
        <div className="flex justify-center mt-20 md:mt-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-3 text-[#FEE711] font-bold text-lg md:text-xl tracking-widest underline hover:text-[#FEE711]/80 transition-colors"
            >
              VIEW ALL PROJECTS
              <ArrowIcon color="#FEE711" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
