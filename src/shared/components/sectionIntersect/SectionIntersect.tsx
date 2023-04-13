import { useEffect, useRef } from "react";

interface ISectionIntersect {
  onChange: (value: boolean) => void;
  children?: React.ReactNode;
}

const SectionIntersecting = ({ children, onChange }: ISectionIntersect) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const isIntersecting =
          ref.current.getBoundingClientRect().top < window.innerHeight &&
          ref.current.getBoundingClientRect().bottom > 0;
        onChange(!isIntersecting);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onChange]);

  return <span ref={ref}>{children}</span>;
};

export default SectionIntersecting;
