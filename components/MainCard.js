import React, { Component } from "react";
import { View, Text } from "react-native";
import {connect} from "react-redux";
import { Actions } from "react-native-router-flux";
import Touchable from "react-native-platform-touchable";
import { setItemHtml } from "../actions"
import Main from "./Main";


const styles = {
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    padding: 20
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10
  }
};

class MainCard extends Component {

  onTouch = ()=> {
    const {props} = this;
    Actions.itemView();
    props.setItemHtml(props.html);
  }

  render() {
    const { props, onTouch } = this;
    return (
      <Touchable onPress={()=> onTouch()}>
        <View style={styles.container}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text>{props.excerpt}</Text>
        </View>
      </Touchable>
    );
  }
}

export default connect(null, {setItemHtml})(MainCard)

