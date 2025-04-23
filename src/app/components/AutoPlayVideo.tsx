"use client";

import { useEffect, useRef, useState } from "react";

function AutoPlayVideo() {
  const theVideo = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let didPlay = false;
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
          if (entry.isIntersecting && !didPlay) {
            // We also add a scroll event listener to handle the scrolling interaction.
            didPlay = true;
            vid.play();
          }
        });
      },
      { threshold: 0.0 }
    );

    // We observe the video element, assuming it was rendered (not null).
    if (theVideo.current) {
      theVideo.current.playbackRate = 10;
      observer.observe(theVideo.current);
    }

    return () => {
      // Clean up the observer and event listener when the component is unmounted.
      observer.disconnect();
    };
  }, []);

  return (
    <video
      className="w-full py-36 md:pt-0 md:w-auto md:h-[80vh]"
      playsInline
      muted
      preload="auto"
      ref={theVideo}
      src="/lotus-compressed.mp4"
    />
  );
}

export default AutoPlayVideo;
