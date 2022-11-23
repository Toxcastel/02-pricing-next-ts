import Head from "next/head";
import React from "react";
import { Navbar } from "../navbar/Navbar";
import styles from "./MainLayout.module.css";

interface props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pricing - Homework</title>
                <meta name="description" content="A task from the course" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <p>Powered by Alberto Castel</p>
            </footer>
        </div>
    );
};
