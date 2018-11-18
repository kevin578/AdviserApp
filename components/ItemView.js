import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import HTML from "react-native-render-html";

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  p: {
    backgroundColor: "green",
    padding: 0
  },
  h2: {
    color: "#FF3366" // make links coloured pink
  }
});

class ItemView extends Component {
  render() {
    const { props } = this;
    return (
      <ScrollView style={styles.container}>
        <HTML
          html={props.html}
          imagesMaxWidth={Dimensions.get("window").width - 20}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    html: state.application.itemHtml
  };
}

export default connect(mapStateToProps)(ItemView);
