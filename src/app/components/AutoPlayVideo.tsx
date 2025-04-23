"use client";

import { useEffect, useRef, useState } from "react";

function AutoPlayVideo() {
  const theVideo = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      const vid = theVideo.current;
      if (!vid) {
        return;
      }

      //  >winTop      ----------------
      //  >vidTop      |  |-------|  |
      //               |  |       |  |
      //  >vidBottom   |  |-------|  |
      //  >winBottom   ----------------

      const vidTop = vid.offsetTop;
      const vidBot = vidTop + vid.clientHeight;
      const winTop = window.scrollY;
      const winBot = winTop + window.innerHeight;
      if (winBot > vidTop) {
        // fix this
        // should be 100 when video is fully scrolled out of view.
        const percentage = (winBot - vidTop) / vid.clientHeight;
        console.log(percentage);
        const targetTime = percentage * vid.duration;
        console.log(targetTime);
        vid.currentTime = targetTime;
      }
    }

    // We want to play the video when it is 5% visible. So first, we create an
    // IntersectionObserver to monitor the video element.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = theVideo.current;
          if (!vid) {
            return;
          }

          // If the video is 5% visible, we play it.
          // The 5% visibility is defined by the threshold option (0.05).
          if (entry.isIntersecting) {
            // We also add a scroll event listener to handle the scrolling interaction.
            window.addEventListener("scroll", handleScroll);
          } else {
            // We remove the scroll event listener when the video is not visible.
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.0 }
    );

    // We observe the video element, assuming it was rendered (not null).
    if (theVideo.current) {
      observer.observe(theVideo.current);
    }

    return () => {
      // Clean up the observer and event listener when the component is unmounted.
      observer.disconnect();
    };
  }, []);

  return (
    <video className="h-[80vh]" ref={theVideo} src="/lotus-compressed.mp4" />
  );
}

export default AutoPlayVideo;
