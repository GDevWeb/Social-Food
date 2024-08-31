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
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href={"/meals"} children={"Browse your meals"} />
            <NavLink href={"/community"} children={"Community"} />
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
