import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className={classes.logo}
            priority
          />
          Foodies
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href={"/meals"}>Browse your meals</NavLink>
            <NavLink href={"/community"}>Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
