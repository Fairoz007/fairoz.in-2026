import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import lenis from '../smoothScroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
