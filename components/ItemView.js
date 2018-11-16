import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import HTMLView from 'react-native-htmlview';

class ItemView extends Component {
  render() {
    const {props} = this;
    return (
      <ScrollView>
        <HTMLView value={props.html}/>
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
