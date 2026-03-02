import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(180deg, #03064A 0%, #060FB0 50%, #03064A 100%)" }}>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="font-madimi text-white text-5xl md:text-7xl lg:text-[80px] mb-6">
          ABOUT ME
        </h1>
        <p className="text-white/70 font-inter text-lg md:text-xl max-w-xl mb-8">
          This page is coming soon. Continue prompting to fill in the content for this page.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#FEE711] text-[#060FB0] font-bold text-lg tracking-wider px-7 py-4 rounded-full hover:bg-[#FEE711]/90 transition-colors"
        >
          ← Back to Home
        </Link>
      </main>
      <FooterSection />
    </div>
  );
}
