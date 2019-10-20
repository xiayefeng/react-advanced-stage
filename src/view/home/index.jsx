import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTitle } from "../../action/title";
import * as styles from "./home.scss";

class Home extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <img
          className={styles.logo}
          src={require("../../assets/logo.svg")}
          alt="logo"
        />
        <h2
          onClick={() => updateTitle("Hello world!")}
          className={styles.title}
        >
          {this.props.title}
        </h2>
      </div>
    );
  }
}

export default connect(state => {
  return {
    title: state.title
  };
})(Home);
