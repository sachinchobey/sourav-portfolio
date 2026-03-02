import { useState } from "react";
import { motion } from "framer-motion";

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1V11M8 11L4 7M8 11L12 7M2 14H14"
        stroke="#060FB0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FooterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="w-full bg-[#03064A] border-t border-white/10 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32">
          {/* Left side */}
          <div className="w-full lg:w-[45%]">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-madimi text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[clamp(48px,6vw,80px)] leading-tight mb-8 md:mb-12"
            >
              LET'S CONNECT
            </motion.h2>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="mailto:sourav6650@gmail.com"
              className="block text-white font-inter font-medium text-lg sm:text-xl md:text-2xl tracking-wide underline hover:text-[#FEE711] transition-colors mb-4"
            >
              Say hello at sourav6650@gmail.com
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <p className="text-white/70 font-inter font-medium text-base tracking-wide mb-4">
                For more info, Here's my
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center gap-3 bg-[#FEE711] text-[#060FB0] font-bold text-base md:text-lg tracking-widest px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(254,231,17,0.3)] transition-all"
              >
                <DownloadIcon />
                RESUME
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-12">
              {[
                { id: 1, src: 'https://api.builder.io/api/v1/image/assets/TEMP/cdee1eddb78cf034f385669f91a3f64cb78206b4?width=120' },
                { id: 2, src: 'https://api.builder.io/api/v1/image/assets/TEMP/cdee1eddb78cf034f385669f91a3f64cb78206b4?width=120' },
                { id: 3, src: 'https://api.builder.io/api/v1/image/assets/TEMP/cdee1eddb78cf034f385669f91a3f64cb78206b4?width=120' },
                { id: 4, src: 'https://api.builder.io/api/v1/image/assets/TEMP/cdee1eddb78cf034f385669f91a3f64cb78206b4?width=120' }
              ].map((social, index) => (
                <motion.a
                  key={social.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${social.id === 1 ? "bg-white" : "bg-white/70"}`}
                >
                  <img
                    src={social.src}
                    alt="LinkedIn"
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11"
                  />
                </motion.a>
              ))}
            </div>

            <p className="text-white/40 font-inter font-medium text-sm md:text-base tracking-wide mt-16">
              © 2026 SOURAV CHOBEY
            </p>
          </div>

          {/* Right side: Contact form */}
          <div className="w-full lg:w-[55%] bg-white/5 p-8 md:p-12 rounded-[32px] border border-white/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-white/70 font-inter font-medium text-base md:text-lg tracking-wide mb-3">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sachin Chobey"
                  className="w-full bg-white/10 text-white placeholder-white/30 font-inter font-medium text-base md:text-lg tracking-wide px-6 py-5 rounded-2xl border border-white/10 outline-none focus:ring-2 focus:ring-[#FEE711] focus:bg-white/15 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-white/70 font-inter font-medium text-base md:text-lg tracking-wide mb-3">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sachin1720@gmail.com"
                  className="w-full bg-white/10 text-white placeholder-white/30 font-inter font-medium text-base md:text-lg tracking-wide px-6 py-5 rounded-2xl border border-white/10 outline-none focus:ring-2 focus:ring-[#FEE711] focus:bg-white/15 transition-all"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#FEE711] text-[#060FB0] font-bold text-lg md:text-xl tracking-[0.2em] py-5 rounded-2xl hover:shadow-[0_10px_30px_rgba(254,231,17,0.3)] transition-all mt-4"
              >
                SUBMIT
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
