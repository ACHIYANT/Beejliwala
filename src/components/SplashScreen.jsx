import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.css";

const SplashScreen = ({children}) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Duration of the splash screen (3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="splash-screen"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/beejliwala-logo.jpg"
              alt="Logo"
              className="splash-logo"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!showSplash && <div className="main-content">{children}</div>}
    </div>
  );
};

export default SplashScreen;
