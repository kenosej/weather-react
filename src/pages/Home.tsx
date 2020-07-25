import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/ajaxActions";
import Card from "../components/home/Card";
import { AiFillGithub } from "react-icons/ai";

interface FormProps {
  fetchWeather: Function;
  weather: Record<string, any>;
}

interface FormState {
  random: number;
  imageSource: string;
}

class Home extends Component<FormProps, FormState> {
  constructor(props: any) {
    super(props);

    const randomInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min)) + min; // generate random integer (1, 2, 3, 4)

    this.state = {
      random: randomInt(1, 5), // randomly select background, whose names end with 1 | 2 | 3 | 4
      imageSource: "",
    };
  }

  // select randomly/change background on click
  setBg = (type: "default" | "click"): void => {
    if (type === "default") {
      this.setState({
        imageSource: require(`../assets/${
          window.innerWidth < 768 ? "p" : "d"
        }_bg${this.state.random}.jpg`),
      });
    } else if (type === "click") {
      // increase random num, then call recursive callback
      if (this.state.random === 4) {
        return this.setState(
          {
            random: 1,
          },
          () => this.setBg("default")
        );
      }

      return this.setState(
        {
          random: this.state.random + 1,
        },
        () => this.setBg("default")
      );
    }
  };

  componentDidMount() {
    this.props.fetchWeather();
    this.setBg("default");
    window.addEventListener("resize", () => this.setBg("default"));
  }

  render() {
    return (
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${this.state.imageSource})`,
        }}
        onClick={() => this.setBg("click")}
      >
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          {Object.keys(this.props.weather).map((e, i) => {
            return <Card city={e} key={i} weather={this.props.weather[e]} />;
          })}
        </div>
        <div className="absolute bottom-0 left-0 text-white mb-1 ml-1">
          <a
            className="mb-1 no-underline duration-300 cursor-pointer hover:text-gray-200"
            href="https://github.com/kenosej/weather-react"
          >
            <div className="flex items-center">
              Made by Kenan Sejmenović
              <AiFillGithub className="ml-2 text-xl" />
            </div>
          </a>
          <div className="text-xs">
            Made in 3 days with: React, Redux, Typescript, Tailwind.
          </div>
        </div>
      </div>
    );
  }
}

const mstp = (state: { weatherReducer: { weather: {} } }) => ({
  weather: state.weatherReducer.weather,
});

export default connect(mstp, { fetchWeather })(Home);
