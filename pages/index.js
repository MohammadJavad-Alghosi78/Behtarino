import mainHttp from "../config/axios";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Button, Container, Typography } from "theme/UI";
import StarRatings from "react-star-ratings";

export default function Home() {
  React.useEffect(() => {
    mainHttp.get("/products").then((response) => console.log(response));
  }, []);
  return (
    <Container>
      <Typography variant="title" color="red" display="block">
        PLEASE GO TO "/PRODUCTS/NUMBER" ROUTE
      </Typography>
    </Container>
  );
}
