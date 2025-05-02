'use client';
import React, {useState, useEffect} from 'react';

const MarketingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // modal appears after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleWheelScroll = e => {
    e.stopPropagation();
  };

  // Optional: Prevent background page scrolling when modal is open
  // You might need a more robust solution depending on your app structure
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // Re-run effect when isOpen changes

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer p-4"
      onClick={handleOverlayClick}
      onWheel={handleWheelScroll}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow-lg w-[90%] max-h-[calc(100vh-80px)] max-w-[800px] overflow-y-auto p-6 md:p-12"
      >
        <button
          onClick={closeModal}
          className="absolute bg-transparent border-none cursor-pointer transition-colors duration-200 ease-in-out text-gray-500 hover:text-tedx-red // Adjusted base color
                     text-3xl top-3 right-3 // Adjusted position slightly within padding
                     sm:text-4xl sm:top-4 sm:right-4 p-1 leading-none z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="mt-12 flex flex-col gap-1 sm:gap-4">
          <img
            src="/synelixis-bg.jpg"
            alt="TEDxNTUA 2025 Synelixis Background"
            className="block rounded-md mx-auto w-full h-auto"
          />
          <h2 className="font-bold text-synelixis-blue mt-0 relative text-2xl mb-3 pr-10 sm:text-3xl sm:mb-4 sm:pr-12">
            Welcome to <span className="text-tedx-red">TEDx</span>NTUA 2025!
          </h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base sm:mb-5 text-gray-700">
            {' '}
            Secure your spot for a day of groundbreaking talks, performances, experiences and
            endless opportunities for new connections.
          </p>
          <div className="text-center">
            <a
              href="https://www.eventora.com/en/Events/tedxntua2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-white text-synelixis-blue font-bold rounded-md cursor-pointer no-underline transition duration-200 ease-in-out bg-tedx-red hover:bg-tedx-red/90 hover:-translate-y-0.5 // Added hover bg color
                           py-2 px-5 text-base mt-3
                           sm:py-3 sm:px-6 sm:text-lg sm:mt-4"
            >
              Get Your Tickets Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingModal;
