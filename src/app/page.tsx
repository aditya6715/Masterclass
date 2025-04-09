// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Form from "@/components/Form";
import InfoSection from "@/components/InfoSection";
import Learnings from "@/components/Learnings";
import Speaker from "@/components/Speaker";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-8">
      {/* 🚀 HERO SECTION */}
      <section className="py-16 text-center w-full">
        <Hero />
      </section>

      {/* 📝 FORM SECTION */}
      <section className="py-12 w-full max-w-xl">
        <Form />
      </section>

      {/* 🎤 SPEAKER SECTION */}
      <section className="py-16 w-full">
        <Speaker />
      </section>

      {/* 💬 TESTIMONIALS SECTION */}
      <section className="py-16 w-full">
        <Testimonials />
      </section>
      <InfoSection />
      <Learnings />
    </main>
  );
}
