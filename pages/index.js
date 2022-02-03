import mainHttp from "../config/axios";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Button, Typography } from "theme/UI";

export default function Home() {
  React.useEffect(() => {
    mainHttp.get("/products").then((response) => console.log(response));
  }, []);
  return (
    <div className={styles.container}>
      <Typography variant="title" color="red">
        PLEASE GO TO "/PRODUCTS/NUMBER" ROUTE
      </Typography>
    </div>
  );
}
