"use client";
import { navMenu, orgInfo } from "@/data/rw011";
import type { NavItem } from "@/data/rw011";
import { useStickyHeader } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = ({ header }: { header?: number }) => {
  useStickyHeader();
  const headers = { 1: Header1, 3: Header3 };
  const HeaderComponent = headers[header as keyof typeof headers] || Header3;
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <Fragment>
      <HeaderComponent open={() => setToggleMobileMenu(true)} />
      <MobileMenu
        open={toggleMobileMenu}
        close={() => setToggleMobileMenu(false)}
      />
    </Fragment>
  );
};

export default Header;

const Logo = ({
  logo = "white-logo.png",
  className = "header-logo",
}: {
  logo?: string;
  className?: string;
}) => (
  <Link href="/" className={className}>
    <Image
      src={`/assets/img/logo/${logo}`}
      width={178}
      height={54}
      alt="Logo RW 011"
    />
  </Link>
);

const SocialIcons = ({ label = "Ikuti Kami:" }: { label?: string }) => (
  <div className="social-icon d-flex align-items-center">
    {label && <span>{label}</span>}
    <a href={orgInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f" />
    </a>
    <a href={orgInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram" />
    </a>
    <a href={orgInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-youtube" />
    </a>
  </div>
);

const ContactList = ({
  items,
}: {
  items: { icon: string; content: string | React.ReactNode }[];
}) => (
  <ul className="contact-list">
    {items.map((item, i) => (
      <li key={i}>
        <i className={item.icon} />
        {item.content}
      </li>
    ))}
  </ul>
);

const Header1 = ({ open }: { open: () => void }) => (
  <header id="header-sticky" className="header-4">
    <div className="container">
      <div className="mega-menu-wrapper">
        <div className="header-main style-2">
          <div className="header-left">
            <div className="logo">
              <Logo />
              <Logo className="header-logo-2" logo="black-logo.png" />
            </div>
          </div>
          <div className="header-right d-flex justify-content-end align-items-center">
            <div className="mean__menu-wrapper">
              <Nav />
            </div>
            <div className="header-button d-none d-sm-block">
              <Link href="/infaq" className="theme-btn">
                Infaq Online
                <i className="ps-2 fas fa-hand-holding-heart" />
              </Link>
            </div>
            <div className="header__hamburger d-xl-none my-auto">
              <div className="sidebar__toggle" onClick={open}>
                <i className="fas fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header3 = ({ open }: { open: () => void }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <SearchPopup open={toggle} close={() => setToggle(false)} />
      <header className="header-section-1">
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper style-2">
              <ContactList
                items={[
                  {
                    icon: "far fa-envelope",
                    content: (
                      <a href={`mailto:${orgInfo.email}`} className="link">
                        {orgInfo.email}
                      </a>
                    ),
                  },
                  {
                    icon: "fa fa-regular fa-phone",
                    content: <a href={`tel:${orgInfo.telepon}`}>{orgInfo.telepon}</a>,
                  },
                ]}
              />
              <div className="top-right">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-1">
          <div className="main-logo">
            <Logo />
          </div>
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo d-none">
                  <Logo logo="black-logo.png" />
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <Nav />
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <a
                    href="#0"
                    className="search-trigger search-icon"
                    onClick={() => setToggle(true)}
                  >
                    <i className="fa-light fa-magnifying-glass"></i>
                  </a>
                  <div className="header-button">
                    <Link href="/infaq" className="theme-btn">
                      Infaq Online
                      <i className="ps-2 fas fa-hand-holding-heart" />
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle" onClick={open}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Nav = () => (
  <div className="main-menu d-none d-xl-block">
    <nav id="mobile-menu">
      <ul>
        {navMenu.map((item, i) => (
          <li key={i} className={item.children ? "has-dropdown" : ""}>
            <Link href={item.href}>
              {item.label}
              {item.children && <i className="fas fa-angle-down" />}
            </Link>
            {item.children && (
              <ul className="submenu">
                {item.children.map((child, j) => (
                  <li key={j}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const SearchPopup = ({ open, close }: { open: boolean; close: () => void }) => (
  <div className="search-wrap" style={{ display: open ? "block" : "none" }}>
    <div className="search-inner">
      <i className="fa fa-light fa-xmark search-close" onClick={close}></i>
      <div className="search-cell">
        <form method="get">
          <div className="search-field-holder">
            <input
              type="search"
              className="main-search-input"
              placeholder="Cari..."
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

const MobileMenu = ({ open, close }: { open: boolean; close: () => void }) => (
  <Fragment>
    <div className="fix-area">
      <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <Logo logo="black-logo.png" className="" />
              </div>
              <div className="offcanvas__close">
                <button onClick={close}>
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <p className="text d-none d-xl-block">
              Portal resmi RW 011 Desa Sukamantri, Kecamatan Pasar Kemis,
              Kabupaten Tangerang. Informasi, berita, dan layanan warga.
            </p>
            <MobileNav />
            <div className="offcanvas__contact">
              <h4>Informasi Kontak</h4>
              <ul>
                {[
                  {
                    icon: "fal fa-map-marker-alt",
                    link: "#",
                    text: orgInfo.alamat,
                  },
                  {
                    icon: "fal fa-envelope",
                    link: `mailto:${orgInfo.email}`,
                    text: orgInfo.email,
                  },
                  {
                    icon: "far fa-phone",
                    link: `tel:${orgInfo.telepon}`,
                    text: orgInfo.telepon,
                  },
                ].map((item, i) => (
                  <li key={i} className="d-flex align-items-center">
                    <div
                      className={`offcanvas__contact-icon ${
                        i > 0 ? "mr-15" : ""
                      }`}
                    >
                      <i className={item.icon} />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target={item.link === "#" ? undefined : undefined}
                        href={item.link}
                      >
                        {item.text}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="header-button mt-4">
                <Link href="/contact" className="theme-btn text-center">
                  <span>
                    Hubungi Kami
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </Link>
              </div>
              <SocialIcons label="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`offcanvas__overlay ${open ? "overlay-open" : ""}`}
      onClick={close}
    ></div>
  </Fragment>
);

const MobileNavItem = ({
  item,
  activeMenu,
  setActiveMenu,
  multiMenu,
  setMultiMenu,
}: {
  item: NavItem;
  activeMenu: string;
  setActiveMenu: (v: string) => void;
  multiMenu: string;
  setMultiMenu: (v: string) => void;
}) => {
  const toggle = (menu: string, setter: (v: string) => void, current: string) =>
    setter(current === menu ? "" : menu);
  const show = (menu: string, current: string) => ({
    display: current === menu ? "block" : "none",
  });

  if (!item.children) {
    return (
      <li>
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  }

  return (
    <li className="has-dropdown">
      <Link href={item.href}>
        {item.label}
        <i className="fas fa-angle-down" />
      </Link>
      <ul className="submenu" style={show(item.label, activeMenu)}>
        {item.children.map((child, j) => (
          <li key={j}>
            <Link href={child.href}>{child.label}</Link>
          </li>
        ))}
      </ul>
      <a
        className="mean-expand"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggle(item.label, setActiveMenu, activeMenu);
        }}
      >
        <i className="far fa-plus" />
      </a>
    </li>
  );
};

const MobileNav = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");

  return (
    <div className="mobile-menu fix mb-3 mean-container">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            {navMenu.map((item, i) => (
              <MobileNavItem
                key={i}
                item={item}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                multiMenu={multiMenu}
                setMultiMenu={setMultiMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
