import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Page from "./Page";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <Page />
            <Footer />
        </div>
    )
}

export default Home;