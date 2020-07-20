import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/ajaxActions";
import Card from "../components/home/Card";

class Home extends Component<{ fetchWeather: Function }> {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    return (
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${require("../assets/sunset.jpg")})`,
        }}
      >
        <div className="container flex flex-col justify-center items-center h-screen w-screen">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchWeather })(Home);
