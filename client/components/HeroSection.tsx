import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#03064A] overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-0">
          {/* Left content */}
          <div className="w-full lg:w-1/2 xl:w-[55%] z-10 relative text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-madimi text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[clamp(64px,8vw,120px)] leading-[1.1] mb-6 md:mb-8"
            >
              HI, I AM{" "}
              <span className="block text-[#FEE711]">SOURAV CHOBEY.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 font-inter font-medium text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed tracking-wide mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              Lorem ipsum interdum tempor mus orci augue aenean eu consectetur
              enim egestas rhoncus urna eget vitae nec nibh eget mauris suscipit
              diam maecenas eu leo ultrices cursus velit odio vitae diam vitae
              nulla feugiat eu.
            </motion.p>

            {/* CTA + Social */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8">
              {/* Contact Me button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#FEE711] text-[#060FB0] font-bold text-lg md:text-xl tracking-wider px-8 py-4 md:px-10 md:py-5 rounded-full hover:shadow-[0_0_30px_rgba(254,231,17,0.4)] transition-all"
              >
                CONTACT ME
                <span className="w-3 h-3 md:w-4 md:h-4 bg-[#060FB0] rounded-full" />
              </motion.a>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {[
                  { id: 'linkedin', src: 'https://api.builder.io/api/v1/image/assets/TEMP/cdee1eddb78cf034f385669f91a3f64cb78206b4?width=120', href: 'https://linkedin.com' },
                  { id: 'figma', src: 'https://api.builder.io/api/v1/image/assets/TEMP/b57705e74f2a0d4f995df2e09e5171acc7abc498?width=120', href: 'https://figma.com' },
                  { id: 'instagram', src: 'https://api.builder.io/api/v1/image/assets/TEMP/c6afe709f673c51af1947ab84e7f11b6117ffe56?width=120', href: 'https://instagram.com' },
                  { id: 'whatsapp', src: 'https://api.builder.io/api/v1/image/assets/TEMP/baec25eb01b8883d3fb5c63c84840a7c6457d79b?width=120', href: 'https://whatsapp.com' }
                ].map((social, index) => (
                  <motion.a
                    key={social.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-white/20 transition-all flex-shrink-0"
                  >
                    <img
                      src={social.src}
                      alt={social.id}
                      className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Person image + floating icons */}
          <div className="relative w-full lg:w-1/2 xl:w-[45%] flex justify-center lg:justify-end mt-16 lg:mt-0 min-h-[450px] md:min-h-[600px]">
            {/* Floating Figma logo top-left */}
            <motion.img
              animate={{ y: [0, -25, 0], rotate: [-22, -18, -22] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/76bef34d28d6a61b6f6cf19dba9a18ee4f456c29?width=286"
              alt="Figma"
              className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 top-0 left-4 md:left-10 lg:left-4 z-20 drop-shadow-[0_-5px_42px_rgba(255,255,255,0.20)]"
            />
            
            {/* Floating Instagram logo top-right */}
            <motion.img
              animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/331a5401b5f97f7c8e3ab4db7e71ced6893cc9ce?width=332"
              alt="Instagram"
              className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 -top-4 right-4 md:right-10 lg:right-0 z-20 drop-shadow-[0_5px_44px_rgba(255,255,255,0.40)]"
            />
            
            {/* Floating Photoshop logo mid-right */}
            <motion.img
              animate={{ y: [0, -20, 0], rotate: [18, 25, 18] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/db290070ceb8e9c34218ee203437d274ad253d16?width=210"
              alt="Photoshop"
              className="absolute w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 top-1/3 -right-2 md:right-4 lg:-right-4 z-20 drop-shadow-[0_1px_44px_rgba(255,255,255,0.25)]"
            />
            
            {/* Main person image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full flex justify-center lg:justify-end"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a37876461c977aa8a05b8d87aff1a0a7231c28c6?width=3346"
                alt="Sourav Chobey"
                className="w-full max-w-[380px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[680px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FEE711]/10 blur-[120px] rounded-full z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
