import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.css";

const SplashScreen = ({ children }) => {
  const [showSplash, setShowSplash] = useState(() => {
    return sessionStorage.getItem("splashShown") !== "true"; // Show only if not seen in this session
  });

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true"); // Mark splash as shown for this session
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <div className="app-container">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="splash-screen"
            initial={{ scale: 1.4, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
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

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./SplashScreen.css";

// //Local Storage
// const SplashScreen = ({ children }) => {
//   const [showSplash, setShowSplash] = useState(() => {
//     return localStorage.getItem("splashShown") !== "true"; // Show only if not seen before
//   });

//   useEffect(() => {
//     if (showSplash) {
//       const timer = setTimeout(() => {
//         setShowSplash(false);
//         localStorage.setItem("splashShown", "true"); // Mark as shown
//       }, 700);

//       return () => clearTimeout(timer);
//     }
//   }, [showSplash]);

//   return (
//     <div className="app-container">
//       <AnimatePresence>
//         {showSplash && (
//           <motion.div
//             className="splash-screen"
//             initial={{ scale: 1.4, opacity: 0.5 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             exit={{ scale: 1, opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src="/beejliwala-logo.jpg"
//               alt="Logo"
//               className="splash-logo"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {!showSplash && <div className="main-content">{children}</div>}
//     </div>
//   );
// };

// export default SplashScreen;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./SplashScreen.css";

// const SplashScreen = ({ children }) => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 700); // Duration of the splash screen (3 seconds)

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="app-container splash-screen-1">
//       <AnimatePresence>
//         {showSplash && (
//           <motion.div
//             className="splash-screen splash-screen-1"
//             initial={{ scale: 1.4, opacity: 0.5 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             exit={{ scale: 1, opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src="/beejliwala-logo.jpg"
//               alt="Logo"
//               className="splash-logo"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {!showSplash && <div className="main-content">{children}</div>}
//     </div>
//   );
// };

// export default SplashScreen;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./SplashScreen.css";

// const SplashScreen = ({ children }) => {
//   const [showSplash, setShowSplash] = useState(() => {
//     return localStorage.getItem("splashShown") !== "true";
//   });

//   useEffect(() => {
//     if (showSplash) {
//       const timer = setTimeout(() => {
//         setShowSplash(false);
//         localStorage.setItem("splashShown", "true"); // Mark splash as shown
//       }, 700); // Duration of the splash screen

//       return () => clearTimeout(timer);
//     }
//   }, [showSplash]);

//   return (
//     <div className="app-container splash-screen">
//       <AnimatePresence>
//         {showSplash && (
//           <motion.div
//             className="splash-screen"
//             initial={{ scale: 1.4, opacity: 0.5 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             exit={{ scale: 1, opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img src="/beejliwala-logo.jpg" alt="Logo" className="splash-logo" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {!showSplash && <div className="main-content">{children}</div>}
//     </div>
//   );
// };

// export default SplashScreen;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom"; // Import useLocation
// import "./SplashScreen.css";

// const SplashScreen = ({ children }) => {
//   const location = useLocation(); // Get current route
//   const [showSplash, setShowSplash] = useState(false);

//   useEffect(() => {
//     if (location.pathname === "/") {
//       // Show splash only on homepage
//       setShowSplash(true);
//       const timer = setTimeout(() => {
//         setShowSplash(false);
//       }, 700); // Duration of the splash screen

//       return () => clearTimeout(timer);
//     }
//   }, [location.pathname]); // Run effect when route changes

//   return (
//     <div className="app-container splash-screen">
//       <AnimatePresence>
//         {showSplash && (
//           <motion.div
//             className="splash-screen"
//             initial={{ scale: 1.4, opacity: 0.5 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             exit={{ scale: 1, opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src="/beejliwala-logo.jpg"
//               alt="Logo"
//               className="splash-logo"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {!showSplash && <div className="main-content">{children}</div>}
//     </div>
//   );
// };

// export default SplashScreen;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom"; // Ensure this runs inside Router
// import "./SplashScreen.css";

// const SplashScreen = ({ children }) => {
//   let location;
//   try {
//     location = useLocation(); // Try using useLocation safely
//   } catch (error) {
//     console.error(
//       "Router context not found. Ensure SplashScreen is inside BrowserRouter."
//     );
//     return <>{children}</>; // Return children if Router isn't ready
//   }

//   const [showSplash, setShowSplash] = useState(location.pathname === "/"); // Show only on home

//   useEffect(() => {
//     if (location.pathname === "/") {
//       setShowSplash(true);
//       const timer = setTimeout(() => {
//         setShowSplash(false);
//       }, 700);

//       return () => clearTimeout(timer);
//     }
//   }, [location.pathname]);

//   return (
//     <div className="app-container splash-screen">
//       <AnimatePresence>
//         {showSplash && (
//           <motion.div
//             className="splash-screen"
//             initial={{ scale: 1.4, opacity: 0.5 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             exit={{ scale: 1, opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src="/beejliwala-logo.jpg"
//               alt="Logo"
//               className="splash-logo"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {!showSplash && <div className="main-content">{children}</div>}
//     </div>
//   );
// };

// export default SplashScreen;
