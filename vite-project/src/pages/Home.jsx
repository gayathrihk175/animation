import { useEffect, useRef } from "react";
import {  motion, useAnimation } from "framer-motion";
import cat from "../assets/cat.jpg"
import elephant from "../assets/elephant.jpg"
import lion from "../assets/lion.jpg"
import piglet from "../assets/piglet.jpg"
import pony from "../assets/pony.jpg"
import puppy from "../assets/puppy.jpg"

// Custom easing function
const customEase = [0.6, -0.05, 0.01, 0.99];

export default function Home() {
  const topControls = useAnimation();
  const topControls2 = useAnimation();
  const midControls = useAnimation();
  const midControls2 = useAnimation();
  const bottomControls = useAnimation();
  const bottomControls2 = useAnimation();
  const textControls = useAnimation();
  const winterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls
            .start({
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            })
            .then(() => {
              topControls
                .start({
                  rotate: -15,

                  opacity: 1,
                  y: 0,
                  x: 0,
                  filter: "blur(0px)",
                  scale: 1,
                  transition: { duration: 0.25, ease: customEase },
                })
                .then(() => {
                  topControls2
                    .start({
                      rotate: 15,
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: "blur(0px)",
                      scale: 1,
                      transition: { duration: 0.25, ease: customEase },
                    })
                    .then(() => {
                      midControls2
                        .start({
                          rotate: 0,

                          opacity: 1,
                          y: 0,
                          x: 0,
                          filter: "blur(0px)",
                          scale: 1,
                          transition: { duration: 0.25, ease: customEase },
                        })

                        .then(() => {
                          bottomControls2
                            .start({
                              rotate: -15,
                              opacity: 1,
                              y: 0,
                              x: 0,
                              filter: "blur(0px)",
                              scale: 1,
                              transition: {
                                duration: 0.25,
                                ease: customEase,
                              },
                            })
                            .then(() => {
                              bottomControls
                                .start({
                                  rotate: 15,
                                  opacity: 1,
                                  y: 0,
                                  x: 0,
                                  filter: "blur(0px)",
                                  scale: 1,
                                  transition: {
                                    duration: 0.25,
                                    ease: customEase,
                                  },
                                })
                                .then(() => {
                                  midControls.start({
                                    rotate: 0,
                                    opacity: 1,
                                    y: 0,
                                    x: 0,
                                    filter: "blur(0px)",
                                    scale: 1,
                                    transition: {
                                      duration: 0.25,
                                      ease: customEase,
                                    },
                                  });
                                });
                            });
                        });
                    });
                });
            });
        } else {
          textControls.start({
            opacity: 0,
            y: 5,
            x: -10,
            scale: 0.5,
          });

          topControls.start({
            rotate: 135,
            opacity: 0,
            y: 200,
            x: 120,
            scale: 0.5,

            filter: "blur(5px)",
          });

          topControls2.start({
            rotate: -135,
            opacity: 0,
            y: 200,
            x: -120,
            scale: 0.5,
            filter: "blur(5px)",
          });
        }

        midControls.start({
          rotate: -135,

          opacity: 0,
          x: 300,
          scale: 0.5,
          filter: "blur(5px)",
        });

        midControls2.start({
          rotate: -135,

          opacity: 0,
          x: -300,
          scale: 0.5,
          filter: "blur(5px)",
        });

        bottomControls.start({
          rotate: 135,
          opacity: 0,
          y: -200,
          x: 120,
          scale: 0.5,
          filter: "blur(5px)",
        });

        bottomControls2.start({
          rotate: -135,
          opacity: 0,
          y: -200,
          x: -120,
          scale: 0.5,
          filter: "blur(5px)",
        });
      },
      { threshold: 0.8 } // Trigger animation when 50% of the element is visible
    );

    if (winterRef.current) {
      observer.observe(winterRef.current);
    }

    return () => {
      if (winterRef.current) {
        observer.unobserve(winterRef.current);
      }
    };
  }, [
    topControls,
    topControls2,
    midControls,
    midControls2,
    bottomControls,
    bottomControls2,
    textControls,
  ]);

  return (
    <>
      <div className="h-screen bg-blue-50 grid place-items-center">
        <h1 className="text-blue-500 text-6xl font-semibold ">
          To infinity and beyond!
        </h1>
      </div>
      <div className="h-screen bg-green-50 grid place-items-center">
        <h1 className="text-green-500 text-6xl font-semibold ">
          Great things take time!
        </h1>
      </div>
      {/* ---1--- */}

      <div
        className="h-screen bg-gradient-to-tr from-[#4facfe]  to-[#00f2fe] flex flex-col justify-center items-center gap-32"
        ref={winterRef}
      >
        <div className="flex gap-52">
          <motion.div
            className="grid place-items-center gap-2 bg-white rounded-lg p-4 shadow-xl text-blue-800"
            initial={{
              opacity: 0,
              y: 200,
              x: 120,
              filter: "blur(1px)",
              scale: 0.5,
              rotate: 135,
            }}
            animate={topControls}
          >
            <img src={cat} alt="kitten" className="w-20 h-20" />
            <h1 className="text-xl ">Kitten</h1>
          </motion.div>
          <motion.div
            className="grid place-items-center gap-2 bg-white rounded-lg p-4 shadow-xl text-blue-800"
            initial={{
              opacity: 0,
              y: 200,
              x: -120,
              filter: "blur(1px)",
              scale: 0.5,
              rotate: -135,
            }}
            animate={topControls2}
          >
            <img src={elephant} alt="calf" className="w-20 h-20" />
            <h1 className="text-xl ">Calf</h1>
          </motion.div>
        </div>
        {/* ---2--- */}

        <div className="flex gap-32 items-center overflow-hidden ">
          <motion.div
            className="grid place-items-center gap-2 bg-white rounded-lg p-4 shadow-xl text-blue-800"
            initial={{
              rotate: 0,
              opacity: 0,
              x: 300,
              scale: 0.5,
              filter: "blur(5px)",
            }}
            animate={midControls}
          >
            <img src={lion} alt="cub" className="w-20 h-20" />
            <h1 className="text-xl ">Cub</h1>
          </motion.div>
          <motion.h1
            className="text-blue-800 text-6xl font-semibold  "
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={textControls}
          >
            Winter is coming.
          </motion.h1>
          <motion.div
            className="grid place-items-center gap-2 bg-white rounded-lg p-4 shadow-xl text-blue-800"
            initial={{
              rotate: 0,

              opacity: 0,
              x: -300,
              scale: 0.5,
              filter: "blur(5px)",
            }}
            animate={midControls2}
          >
            <img src={piglet} alt="piglet" className="w-20 h-20" />
            <h1 className="text-xl ">Piglet</h1>
          </motion.div>
        </div>
        {/* ---3--- */}
        <div className="flex gap-52">
          <motion.div
            className="grid place-items-center gap-2 bg-white rounded-lg p-4 shadow-xl text-blue-800"
            initial={{
              opacity: 0,
              y: -200,
              x: 120,
              scale: 0.5,
              filter: "blur(5px)",
              rotate: 135,
            }}
            animate={bottomControls}
          >
            <img src={pony} alt="pony" className="w-20 h-20" />
            <h1 className="text-xl ">Pony</h1>
          </motion.div>
          <motion.div
            className="grid place-items-center gap-2 bg-white rounded-lg p-4 shadow-xl text-blue-800"
            initial={{
              opacity: 0,
              y: -200,
              x: 120,
              scale: 0.5,
              filter: "blur(5px)",
              rotate: -135,
            }}
            animate={bottomControls2}
          >
            <img src={puppy} alt="puppy" className="w-20 h-20" />
            <h1 className="text-xl ">Puppy</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}
