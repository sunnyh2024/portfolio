import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Background from "./Background";
import ContactForm from "./ContactForm";
import Menu from "./Menu";
import NavBar from "./NavBar";
import useWindowSize from "../hooks/useWindowSize";
import { ReactNode } from "react";
import TextReveal from "./TextReveal";

export default function Layout({
  children,
  title,
  showContact,
}: {
  children?: ReactNode;
  title?: string;
  showContact?: boolean;
}) {
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
            duration: 1.25,
            type: "spring",
            damping: 25,
            stiffness: 350,
          }}
          className="z-50"
        >
          <Menu setShowMenu={setShowMenu} />
        </motion.div>
      ) : (
        <motion.div
          key="navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "linear" }}
        >
          <NavBar setShowMenu={setShowMenu} />
          {showContact && <ContactForm />}
        </motion.div>
      )}
      <Background showMenu={showMenu} > 
        {!showMenu &&
          <motion.div
            key="children"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-left px-32 py-48"
          >
            <TextReveal text={title || ""} style="text-7xl"/>
            {children}
          </motion.div>
        }
      </Background>
    </AnimatePresence>
  );
}
