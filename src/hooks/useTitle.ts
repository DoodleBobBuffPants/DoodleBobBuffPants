import { useEffect } from "react";

const useTitle = (title?: string) =>
  useEffect(() => {
    const original = document.title;
    document.title = title ?? original;
    return () => {
      document.title = original;
    };
  }, []);

export default useTitle;
