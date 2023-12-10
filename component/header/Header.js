// Header.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import Logo from "../../public/icon/logo.png";
import Mail from "../../public/icon/mail.svg";
import User from "../../public/icon/user.svg";
import Search from "../../public/icon/search.png";
import Menu from "../../public/icon/menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const toggleMessageDropdown = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = () => {
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={Logo} alt="logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.options}>
        <Link href="/company" className={styles.link}>
          Company
        </Link>
        <Link href="/jobs" className={styles.link}>
          Jobs
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/locale" className={styles.link}>
          By Locale
        </Link>
      </div>

      <div className={styles.icons}>
        <Image src={Search} alt="" className={styles.searchIcon} />
        <Image
          src={Mail}
          alt=""
          className={styles.mailIcon}
          onClick={toggleMessageDropdown}
        />
        {isMessageOpen && (
          <div className={styles.dropdownContent}>
            <ul className={styles.dropdownOptions}>
              <li className={styles.dropdownOption}>Notification 1</li>
              <li className={styles.dropdownOption}>Notification 2</li>
              <li className={styles.dropdownOption}>Notification 3</li>
            </ul>
          </div>
        )}
        <Link href="/signin">
          <Image src={User} alt="" className={styles.userIcon} />
        </Link>
      </div>

      <div className={styles.mobileMenu}>
        {isMenuOpen ? (
          <div>
            <button onClick={closeMenu} className={styles.closeButton}>
              Close
            </button>
          </div>
        ) : (
          <Image
            src={Menu}
            onClick={toggleMenu}
            className={styles.hamburgerIcon}
          />
        )}
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenuContainer}>
          <button onClick={closeMenu} className={styles.closeButton}>
            Close
          </button>
          <div className={styles.mobileMenuContainerInner}>
            <Link
              href="/company"
              onClick={handleNavigation}
              className={styles.mobileLink}>
              Company <sub style={{ fontSize: "14px" }}>01</sub>
            </Link>
            <Link
              href="/jobs"
              onClick={handleNavigation}
              className={styles.mobileLink}>
              Jobs <sub style={{ fontSize: "14px" }}>02</sub>
            </Link>
            <Link
              href="/contact"
              onClick={handleNavigation}
              className={styles.mobileLink}>
              Contact <sub style={{ fontSize: "14px" }}>03</sub>
            </Link>
            <Link
              href="/contact"
              onClick={handleNavigation}
              className={styles.mobileLink}>
              By Locale <sub style={{ fontSize: "14px" }}>04</sub>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
