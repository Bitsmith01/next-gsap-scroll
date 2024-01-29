"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const textWrapper = document.querySelectorAll(".my-text-wrapper");
    const prinTrigger = ScrollTrigger.create({
      trigger: ".container-wrapper",
      pin: true,
      start: "top top",
      end: "+=200%",
    });
    let tl = gsap.timeline();
    tl.to(textWrapper, {
      x: "-200%",
      scrollTrigger: {
        start: () => prinTrigger?.start,
        end: () => prinTrigger?.end,
        scrub: 1,
      },
    });
    return () => {
      prinTrigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <main className="container-wrapper">
      <div className="my-text-wrapper flex h-screen flex-col items-center justify-center p-24">
        <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper transform translate-x-[70%] text-8xl">
          DIMON Oloni Oloushola Esperat
        </h1>
      </div>
    </main>
  );
}
