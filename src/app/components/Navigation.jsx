"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
// import { TransitionLink } from "./utils/TransitionLink";
import TransitionLink from "./TransitionLink";

const Links = [
  { url: "/", label: "Početna" },
  { url: "/ordinacija", label: "Ordinacija" },
  { url: "/tomislav-gajic", label: "Tomislav Gajić" },
  { url: "/branka-stamatovic-gajic", label: "Branka Stamatović Gajić" },
  { url: "/kontakt", label: "Kontakt" },
];

const Navigation = () => {
  const pathname = usePathname();

  useEffect(() => {
    const openMenuBtn = document.querySelector(".open-menu");
    const closeMenuBtn = document.querySelector(".close-menu");
    const siteBranding = document.querySelector(
      ".site-header__wrap > .site-branding"
    );
    const siteMenu = document.querySelector(".site-header__menu");

    const handleOpenMenu = (e) => {
      e.preventDefault();
      openMenuBtn.classList.add("is--hidden");
      siteBranding?.classList.add("is--hidden");
      siteMenu?.classList.add("is--active");
    };

    const handleCloseMenu = (e) => {
      e.preventDefault();
      siteMenu?.classList.remove("is--active");
      openMenuBtn.classList.remove("is--hidden");
      siteBranding?.classList.remove("is--hidden");
    };
    openMenuBtn?.addEventListener("click", handleOpenMenu);
    closeMenuBtn?.addEventListener("click", handleCloseMenu);
    // Cleanup event listeners on unmount
    return () => {
      openMenuBtn?.removeEventListener("click", handleOpenMenu);
      closeMenuBtn?.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  // Reset menu state when pathname changes
  useEffect(() => {
    const openMenuBtn = document.querySelector(".open-menu");
    const siteBranding = document.querySelector(
      ".site-header__wrap > .site-branding"
    );
    const siteMenu = document.querySelector(".site-header__menu");

    if (openMenuBtn && siteMenu && siteBranding) {
      // Remove all classes to reset state
      openMenuBtn.classList.remove("is--hidden");
      siteBranding.classList.remove("is--hidden");
      siteMenu.classList.remove("is--active");
    }
  }, [pathname]);

  return (
    <div className="site-header__wrap">
      <div className="site-branding">
        <TransitionLink
          href="/"
          className="custom-logo-link"
          aria-current="page"
        >
          <Image src="logo.svg" alt="custom-logo" width={213} height={77} />
        </TransitionLink>
      </div>

      <div className="site-header__menu">
        <div className="site-header__menu-items">
          <div className="site-header__menu-wrap">
            <div className="site-header__menu-top">
              <div className="site-branding">
                <Link className="custom-logo-link" href="/">
                  <Image
                    src="logo.svg"
                    alt="custom-logo"
                    width={213}
                    height={77}
                  />
                </Link>
              </div>
              <Link className="close-menu" href="#">
                Nazad
              </Link>
            </div>

            <nav id="site-navigation" className="main-navigation">
              <div className="menu-menu-container">
                <ul id="primary-menu" className="menu">
                  {Links.map((link) => (
                    <li
                      key={link.url}
                      className={`menu-item menu-item-type-post_type menu-item-object-page ${
                        link.url === pathname ? "current-menu-item" : ""
                      }`}
                    >
                      <TransitionLink href={link.url}>
                        {link.label}
                      </TransitionLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="site-header__created">
          <p>
            developed &amp; design <br />
            by <Link href="https://monochrome.rs">MONOCHROME</Link>
          </p>
        </div>
        <Image
          className="rcdp-icon"
          src="rcdp-icon.svg"
          alt="rcdp-logo"
          width={417}
          height={417}
        />
      </div>

      <Link className="open-menu" href="#">
        Meni
      </Link>
    </div>
  );
};

export default Navigation;
