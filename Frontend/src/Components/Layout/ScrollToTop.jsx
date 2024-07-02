// Add this code to your page component or layout component where you want the scroll behavior

import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return null; // Since this component doesn't render anything, return null
};

export default ScrollToTop;
