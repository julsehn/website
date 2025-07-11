import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-dark-card border border-dark-border rounded-lg shadow-xl p-6 w-full max-w-md text-dark-text">
        <h3 className="text-xl font-bold text-ntts-blue mb-4">{title}</h3>
        <div className="text-dark-text-secondary mb-6">
          {children}
        </div>
        <button
          onClick={onClose}
          className="w-full bg-ntts-blue text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function PopupManager() {
  const { theme } = useTheme();
  const [showLightModePopup, setShowLightModePopup] = useState(false);
  const [showFiveMinPopup, setShowFiveMinPopup] = useState(false);
  const [fiveMinPopupShown, setFiveMinPopupShown] = useState(false);

  useEffect(() => {
    let lightModeTimer;
    if (theme === 'light') {
      lightModeTimer = setTimeout(() => {
        setShowLightModePopup(true);
      }, 60000);
    }
    return () => clearTimeout(lightModeTimer);
  }, [theme]);

  useEffect(() => {
    const fiveMinTimer = setTimeout(() => {
      if (!fiveMinPopupShown) {
        setShowFiveMinPopup(true);
        setFiveMinPopupShown(true);
      }
    }, 300000);
    return () => clearTimeout(fiveMinTimer);
  }, [fiveMinPopupShown]);

  return (
    <>
      <Modal
        isOpen={showLightModePopup}
        onClose={() => setShowLightModePopup(false)}
        title="A Word of Advice..."
      >
        <p>You really dont like your eyes huh?</p>
      </Modal>

      <Modal
        isOpen={showFiveMinPopup}
        onClose={() => setShowFiveMinPopup(false)}
        title="You're Still Here?"
      >
        <p className="mb-4">
          Looks like you really are locked in, reading the rules? or forgot to close your browser? either way enjoy this cool video from speech.
        </p>
        <a
          href="https://youtu.be/OApqYQmHrOE?t=1m38s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ntts-blue hover:underline font-semibold"
        >
          Watch the video on YouTube
        </a>
      </Modal>
    </>
  );
};
