"use client"

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = ({className}: any) => {
    return (
        <p className={`${className}`}>
            <Link href={"www.facebook.com"}>
                <FaFacebook/>
            </Link>
            <Link href={"www.twitter.com"}>
                <FaXTwitter/>
            </Link>
            <Link href={"www.instagram.com"}>
                <FaInstagram/>
            </Link>
        </p>
    );
};

export default Socials;