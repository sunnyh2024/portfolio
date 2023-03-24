import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Background from "./Background";
import ContactForm from "./ContactForm";
import SideMenu from "./Menu";
import NavBar from "./NavBar";
import useWindowSize from "../hooks/useWindowSize";

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.div
          key="menu"
          initial={{ x: -width }}
          animate={{ x: 0 }}
          exit={{ x: -width }}
          transition={{
            duration: 0.75,
          }}
        >
          <SideMenu setShowMenu={setShowMenu} />
        </motion.div>
      ) : (
        <motion.div
          key="common"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <NavBar setShowMenu={setShowMenu} />
          <ContactForm />
        </motion.div>
      )}
      <Background/>
    </AnimatePresence>
  );
}
