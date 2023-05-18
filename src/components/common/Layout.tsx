import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Background from "./Background";
import ContactForm from "./ContactForm";
import Menu from "./Menu";
import NavBar from "./NavBar";
import useWindowSize from "../../hooks/useWindowSize";
import { ReactNode } from "react";

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
            duration: 0.75,
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
          {showContact ? <ContactForm /> : <div />}
        </motion.div>
      )}
      <Background>
        {showMenu ? (
          <div />
        ) : (
          <motion.div
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-left px-32 py-48"
          >
            <div className="text-7xl">{title ? title : ""}</div>
            {children}
          </motion.div>
        )}
      </Background>
    </AnimatePresence>
  );
}
