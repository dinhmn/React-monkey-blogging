import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import HomeBanner from "components/module/home/HomeBanner";
import HomeFeature from "components/module/home/HomeFeature";
import HomeItems from "components/module/home/HomeItems";
import HomeNewest from "components/module/home/HomeNewest";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
        <HomeItems></HomeItems>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
