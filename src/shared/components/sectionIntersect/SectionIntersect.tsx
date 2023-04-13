import { useEffect, useRef } from "react";

interface ISectionIntersect {
  onChange: (value: boolean) => void;
  children?: React.ReactNode;
}

const SectionIntersect = ({ children, onChange }: ISectionIntersect) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const windowHeight = window.innerHeight * 0.9;
        const isIntersecting =
          ref.current.getBoundingClientRect().top < window.innerHeight &&
          ref.current.getBoundingClientRect().bottom > windowHeight;
        onChange(!isIntersecting);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onChange]);

  return <span ref={ref}>{children}</span>;
};

export default SectionIntersect;
