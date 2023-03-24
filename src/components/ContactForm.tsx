import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [emailPop, setEmailPop] = useState(false);
  const [link, setLinkPop] = useState(false);
  const [gitPop, setGitPop] = useState(false);
  const [codePop, setCodePop] = useState(false);

  const createTrigger = (setState: any) => {
    return {
      onMouseEnter: () => setState(true),
      onMouseLeave: () => setState(false),
    };
  };

  const openEmail = () => console.log("window opened");
  const openLinkedIn = () =>
    window.open("https://www.linkedin.com/in/sunnyh2024/");
  const openGithub = () => window.open("https://github.com/sunnyh2024");
  const openCode = () => window.open("https://github.com/sunnyh2024/portfolio");

  const popStates = [emailPop, link, gitPop, codePop];
  const setPopStates = [setEmailPop, setLinkPop, setGitPop, setCodePop];
  const triggers = [
    createTrigger(setEmailPop),
    createTrigger(setLinkPop),
    createTrigger(setGitPop),
    createTrigger(setCodePop),
  ];
  const icons = [<MailOutlineIcon />, <LinkedInIcon />, <GitHubIcon />, "</>"];
  const contents = ["E-mail", "LinkedIn", "GitHub", "Source Code"];
  const links = [openEmail, openLinkedIn, openGithub, openCode];

  const createPopover = (
    icon: JSX.Element | string,
    content: string,
    index: number
  ) => {
    const openPopover: boolean = popStates[index];
    const setOpenPopover = setPopStates[index];
    const trigger = triggers[index];
    return (
      <Popover
        key={index}
        open={openPopover}
        handler={setOpenPopover}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler {...trigger}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 + index / 4 }}
          >
            <Button
              variant="gradient"
              className="hover:scale-110 p-3"
              onClick={links[index]}
            >
              {icon}
            </Button>
          </motion.div>
        </PopoverHandler>
        <PopoverContent
          {...trigger}
          className="bg-gray-500 text-white rounded-md border-none outline-none p-2"
        >
          {content}
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row fixed right-0 bottom-0 z-7"
    >
      {icons.map((icon, i) => createPopover(icon, contents[i], i))}
    </motion.div>
  );
}
