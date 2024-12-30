import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import MainHeaderBackground from '@/components/main-header/main-header-bg';
import classes from './main-header.module.css';
import NavLink from "./nav-link";

export default function MainHeader() {
  
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImage} alt="food on the plate" priority/>
        Food Lovers
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
           <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
          <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
