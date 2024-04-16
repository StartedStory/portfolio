import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDiscord, FaTelegram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/christian-montero-3007222a4"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/PolarisStar2000"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://discord.gg/CxgeNqD9"
        target="_blank"
        rel="noreferrer"
      >
        <FaDiscord />
      </a>
      <a
        href="https://t.me/Liodev0308"
        target="_blank"
        rel="noreferrer"
      >
        <FaTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
