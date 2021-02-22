import React from "react";
import { Link } from "react-router-dom";

import CardDescription from "../components/CardDescription";
import Loader from "../components/Loader";
import back from "../images/back.svg";
class DescriptionPage extends React.Component {
  state = {
    loading: false,
    error: null,
    data: null,
  };
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`
      );
      const data = await response.json();
      this.setState({ loading: false, data: data });
      console.log(this.state.data);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.loading === true) {
      return <Loader />;
    }
    if (this.state.error) {
      return <div>ERROR...</div>;
    }
    if (this.state.data) {
      return (
        <div>
          <div className="back">
            <Link className="back-button" to="/">
              <img id="back-arrow" src={back} alt="" />
              Back
            </Link>
          </div>
          <CardDescription description={this.state.data} />
        </div>
      );
    }
    return <div></div>;
  }
}

export default DescriptionPage;
