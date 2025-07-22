import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-[#7e6659] text-white p-3 rounded-full shadow-lg hover:bg-[#5a4a42] transition-all z-[999]"
        aria-label="Back to Top"
      >
        <i className="ri-arrow-up-line text-xl" />
      </button>
    )
  );
};

export default BackToTop;
