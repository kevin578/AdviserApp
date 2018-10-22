import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import * as actions from "../actions";

const styles = StyleSheet.create({
  container: {},
  monthContainer: {
    width: Dimensions.get("window").width,
    height: 150
  },
  monthCircle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 75,
    width: 100,
    height: 75
  }
});

class MonthSelecter extends Component {
  state = {
    width: 375
  };

  months = [
    {
      name: "September",
      backgroundColor: "#e8c64d"
    },
    {
      name: "October",
      backgroundColor: "#e8a74d"
    },
    {
      name: "November",
      backgroundColor: "#b78743"
    }
  ];

  componentDidMount() {
    const { setCurrentMonth } = this.props;
    const { width } = Dimensions.get("window");
    this.setState({ width });
    setCurrentMonth("September");
  }

  renderItem = ({ item, index }) => {
    const { name, backgroundColor } = item;
    const { setCurrentMonth } = this.props;
    return (
      <View
        style={StyleSheet.flatten([styles.monthContainer, { backgroundColor }])}
      />
    );
  };

  onScroll = event => {
    console.log(event);
  };

  render() {
    const { width } = this.state;
    return (
      <View style={styles.container}>
        <Carousel
          data={this.months}
          onBeforeSnapToItem={this.onScroll}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    month: state.month
  };
}

export default connect(
  mapStateToProps,
  actions
)(MonthSelecter);
