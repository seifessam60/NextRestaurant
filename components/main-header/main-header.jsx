'use client'
import Link from "next/link";
import ImgLogo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "../nav-link";
export default function MainHeader() {
    const path = usePathname();
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
    <Link className={classes.logo} href={'/'}>
        <Image src={ImgLogo} alt="a plate with food on it" priority/>
        NextLevel Food
    </Link>
    <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href={'/community'}>Join The Community</NavLink>
            </li>
        </ul>
    </nav>
</header></>
    
)
  
}
