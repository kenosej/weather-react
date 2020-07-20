import React, { Component } from "react";
import nightPhone from "../assets/night_phone.png";
import goldenBridge from "../assets/golden_gate_bridge.jpg";

interface FormProps {
  match: {
    params: {
      city: string;
    };
  };
}

interface FormState {
  imageSrc: string;
}

class City extends Component<FormProps, FormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      imageSrc: nightPhone,
    };
  }

  updateDimensions = () => {
    if (window.innerWidth < 768) {
      this.setState({
        imageSrc: nightPhone,
      });
    } else {
      this.setState({
        imageSrc: goldenBridge,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${this.state.imageSrc})`,
        }}
      >
        <div className="w-6 h-6" style={{ border: "2px solid white" }}></div>
      </div>
    );
  }
}

export default City;
