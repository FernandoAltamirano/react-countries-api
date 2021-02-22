import React from "react";

import SearchContainer from "../components/SearchContainer";
import Loader from "../components/Loader";

class Flags_page extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  render() {
    if (this.state.loading === true) {
      return <Loader />;
    }

    if (this.state.error) {
      return <div>ERROR...</div>;
    }
    return <SearchContainer data={this.state.data} />;
  }
}

export default Flags_page;
