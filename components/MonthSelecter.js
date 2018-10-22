import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import Touchable from "react-native-platform-touchable";
import Carousel from "react-native-snap-carousel";
import * as actions from "../actions";
import { months } from "../monthsArray";

const monthContainerHeight = 100;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 150
  },
  monthCircle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 75,
    width: 100,
    height: 75
  },
  MonthDisplayContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: monthContainerHeight / 2
  },
  monthContainer: {
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    height: monthContainerHeight,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#212121"
  },

  arrowContainer: {
    top: 25,
    borderWidth: 3,
    borderColor: "#212121",
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

class MonthSelecter extends Component {
  state = {
    width: 375
  };

  componentDidMount() {
    const { setCurrentMonth } = this.props;
    const { width } = Dimensions.get("window");
    this.setState({ width });
    setCurrentMonth(0);
  }

  renderItem = ({ item, index }) => {
    const { name, backgroundColor } = item;
    const { setCurrentMonth } = this.props;
    return (
      <View
        style={StyleSheet.flatten([styles.container, { backgroundColor }])}
      />
    );
  };

  onScroll = event => {
    const { setCurrentMonth } = this.props;
    setCurrentMonth(event);
  };


  nextMonth = ()=> {
    const {month, setCurrentMonth} = this.props;
    const { currentMonth } = month;
    setCurrentMonth(currentMonth + 1);
    this.carousel.snapToItem(currentMonth + 1);
  }

  prevMonth = () => {
    const { month, setCurrentMonth } = this.props;
    const { currentMonth } = month;
    setCurrentMonth(currentMonth - 1);
    this.carousel.snapToItem(currentMonth - 1);
  };

  render() {
    const { month } = this.props;
    const { currentMonth } = month;
    const { width } = this.state;
    return (
      <View>
        <Carousel
          ref={c => {
            this.carousel = c;
          }}
          data={months}
          onBeforeSnapToItem={this.onScroll}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
        />

        <View style={styles.MonthDisplayContainer}>
          <Touchable onPress={this.prevMonth}>
            <View style={styles.arrowContainer}>
              <Icon name="arrow-back" />
            </View>
          </Touchable>
          <View style={styles.monthContainer}>
            <Text style={styles.monthText}>{months[currentMonth].name}</Text>
          </View>
          <Touchable onPress={this.nextMonth}>
            <View style={styles.arrowContainer}>
              <Icon name="arrow-forward" />
            </View>
          </Touchable>
        </View>
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
