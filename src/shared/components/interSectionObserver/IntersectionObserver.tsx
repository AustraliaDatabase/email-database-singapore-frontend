import { useEffect, useRef } from "react";

interface Props {
  onChange?: (entry: IntersectionObserverEntry) => void;
  children?: React.ReactNode;
}

const MyIntersectionObserver = ({ onChange, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (onChange) {
          onChange(entry);
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onChange]);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const isIntersecting =
          ref.current.getBoundingClientRect().top < window.innerHeight &&
          ref.current.getBoundingClientRect().bottom > 0;
        console.log(isIntersecting);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default MyIntersectionObserver;
