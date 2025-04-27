'use client';
import ReactDom from 'react-dom';
import {useEffect, useRef} from 'react'; // Import useRef
import SocialList from '@components/SocialMedia/SocialList';

function Modal({open, onClose, displayInfo}) {
  // Use useRef to store original body/html styles
  const originalBodyOverflow = useRef(null);
  const originalHtmlOverflow = useRef(null);

  useEffect(() => {
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;

    if (open) {
      // Store original styles only if they haven't been stored yet
      if (originalBodyOverflow.current === null) {
        originalBodyOverflow.current = bodyStyle.overflow || '';
      }
      if (originalHtmlOverflow.current === null) {
        originalHtmlOverflow.current = htmlStyle.overflow || '';
      }

      // Apply styles to prevent background scroll
      bodyStyle.overflow = 'hidden';
      htmlStyle.overflow = 'hidden';
    } else {
      // Restore original styles only if they were stored
      if (originalBodyOverflow.current !== null) {
        bodyStyle.overflow = originalBodyOverflow.current;
        originalBodyOverflow.current = null; // Reset ref
      }
      if (originalHtmlOverflow.current !== null) {
        htmlStyle.overflow = originalHtmlOverflow.current;
        originalHtmlOverflow.current = null; // Reset ref
      }
    }

    // Cleanup function for when the component unmounts while open
    return () => {
      if (originalBodyOverflow.current !== null) {
        document.body.style.overflow = originalBodyOverflow.current;
        originalBodyOverflow.current = null;
      }
      if (originalHtmlOverflow.current !== null) {
        document.documentElement.style.overflow = originalHtmlOverflow.current;
        originalHtmlOverflow.current = null;
      }
    };
  }, [open]); // Rerun effect only when 'open' changes

  // Handler for wheel events on scrollable containers
  const handleWheelScroll = e => {
    e.stopPropagation();
  };

  if (!open) return null;
  if (typeof window === 'undefined') return null;
  const portalElement = document.getElementById('portal');
  if (!portalElement) {
    console.error("Modal target element 'portal' not found.");
    return null;
  }

  const hoverColor = `hover:text-synelixis-${displayInfo.color}`;

  return ReactDom.createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        onWheel={handleWheelScroll}
        className="fixed inset-0 bg-black/80 z-10"
      ></div>

      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-[90%] max-h-[calc(100vh-140px)] max-w-[800px] overflow-hidden p-6 md:p-10">
        <button
          onClick={onClose}
          className={`p-0 absolute top-4 right-4 md:top-6 md:right-6 text-synelixis-blue text-4xl font-bold hover:text-tedx-red transition z-10`}
        >
          ×
        </button>

        <main className="flex flex-col gap-4 h-full">
          {/* Header Section */}
          <section id="bio" className="flex flex-col md:flex-row gap-4 lg:gap-8">
            <img
              src={displayInfo.imageUrl}
              alt={displayInfo.name}
              className="hidden lg:block w-[300px] h-full rounded-lg"
            />
            <div className="flex gap-4 flex-col text-center md:text-left flex-grow min-w-0">
              {/* Name & Secondary Info*/}
              <div
                id="name"
                className="max-h-[15vh] overflow-y-auto modal-scrollable-content pr-2"
                onWheel={handleWheelScroll}
              >
                <h2 id="heading">
                  <span className="text-2xl md:text-3xl font-bold text-synelixis-blue">
                    {displayInfo.name}
                  </span>
                  {displayInfo.artisticName && (
                    <span className="ml-2 text-lg md:text-xl font-light text-synelixis-blue/70">
                      (a.k.a. {displayInfo.artisticName})
                    </span>
                  )}
                </h2>

                <p className="text-md text-synelixis-blue/70">{displayInfo.secondaryInfo}</p>
              </div>
              {/* Social Media Links */}
              {displayInfo.socialMediaLinks && (
                <div className="flex gap-4 lg:gap-6 justify-center md:justify-start">
                  <SocialList
                    socialMediaLinks={displayInfo.socialMediaLinks}
                    color={'blue'}
                    hoverColor={displayInfo.color}
                  />
                </div>
              )}
              {/* Bio Section*/}
              <div
                className="max-h-[25vh] overflow-y-auto modal-scrollable-content pr-2"
                onWheel={handleWheelScroll}
              >
                <p className="text-left text-synelixis-blue/70 leading-relaxed">
                  {displayInfo.bio}
                </p>
              </div>
            </div>
          </section>
          <div className="border-t my-2 md:my-4"></div>
          {/* Happening Info Section */}
          {displayInfo.happening && (
            <section id="happening-info">
              <p className="text-sm text-synelixis-blue/50 mb-2 uppercase tracking-wider">
                {displayInfo.happening.category}
                {displayInfo.happening.session ? ` | Session ${displayInfo.happening.session}` : ''}
                {displayInfo.happening.time ? ` | ${displayInfo.happening.time}` : ''}
              </p>
              <div
                className="max-h-[23vh] overflow-y-auto modal-scrollable-content pr-2 rounded"
                onWheel={handleWheelScroll}
              >
                <p className="text-synelixis-blue/70 leading-relaxed">
                  {displayInfo.happening.description}
                </p>
              </div>
            </section>
          )}
        </main>
      </div>
    </>,
    portalElement
  );
}

export default Modal;
