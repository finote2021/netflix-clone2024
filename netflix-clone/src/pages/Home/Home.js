import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Rows/Row";
import requests from "../../Utils/requests";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Row
        title="Netflix Orginals"
        fetchurl={requests.fetchNetflexOrginals}
        isLargeRow={true}
      />
      <Row title="Trendings" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated " fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies " fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies " fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies " fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchurl={requests.fetchDocumentaries} />
      <Footer />
    </>
  );
}
export default Home;