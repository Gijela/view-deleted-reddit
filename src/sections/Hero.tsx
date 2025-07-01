"use client";
import { Button } from "@/components/Button";
import { StarsImage } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface HeroProps {
  onSearch?: (query: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      if (onSearch) {
        await onSearch(query.trim());
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${StarsImage.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: StarsImage.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 100,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>
      {/* Start Planet */}
      <div className="absolute size-64 md:size-96 bg-purple-500 border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)] rounded-full"></div>
      {/* End Planet */}
      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[344px] md:size-[580px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-5 border border-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </motion.div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
        <h1 className="text-6xl md:text-[120px] md:leading-none font-semibold tracking-tighter text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text">
          ViewDeletedReddit
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-2xl mx-auto">
          Recover deleted Reddit posts and comments instantly. Enter a Reddit URL or username to view archived content.
        </p>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter Reddit URL or username (e.g., u/username)"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              disabled={isLoading}
            />
          </div>
          <Button
            classname={`px-8 py-3 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </div>

        {/* Example queries */}
        <div className="mt-6 text-center">
          <p className="text-sm text-white/50 mb-2">Try these examples:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setQuery('https://reddit.com/r/AskReddit/comments/example123/')}
              className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-colors"
            >
              Reddit URL
            </button>
            <button
              onClick={() => setQuery('testuser')}
              className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-colors"
            >
              Username
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
