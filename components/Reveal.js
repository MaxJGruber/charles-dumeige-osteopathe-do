import { useEffect, useRef, useState } from "react";

// Scroll-triggered reveal. Children start hidden and animate in the first time
// they enter the viewport, then stay put.
//
// Replaces react-awesome-reveal (and its @emotion/react peer). The offsets are
// deliberately short: the library translated by 100% of the element's own
// width, which sent full-width sections flying in from off-screen and could
// overflow on mobile.
//
// The hidden/visible states are plain classes so `prefers-reduced-motion` can
// neutralise them in CSS (see styles/globals.css); an inline style could not
// express that media query.

const Reveal = ({
  children,
  animation = "fade",
  direction = "top",
  duration = 600,
  delay = 0,
  className,
  style,
}) => {
  const ref = useRef(null);
  // Without IntersectionObserver, start revealed so the content is never
  // stuck hidden. The server always renders the hidden state, so this is
  // resolved in an effect below rather than during the first render.
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      // Deferred so it does not run synchronously inside the effect body.
      const id = setTimeout(() => setRevealed(true), 0);
      return () => clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variant = animation === "zoom" ? "zoom" : `fade-${direction}`;

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant}${revealed ? " reveal-in" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{
        ...style,
        "--reveal-duration": `${duration}ms`,
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
