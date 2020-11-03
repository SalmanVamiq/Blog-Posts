import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout> Main Content </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
