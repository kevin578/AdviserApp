import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import Touchable from "react-native-platform-touchable";
import Carousel from "react-native-snap-carousel";
import * as actions from "../actions";
import { months } from "../monthsArray";
import SideMenu from "./SideMenu";

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
    width: 120,
    height: 75
  },

  monthText: {
    fontSize: 18,
    fontWeight: "600"
  },

  yearText: {
    fontSize: 12,
    paddingTop: 5
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
  },

  hideArrowContainer: {
    opacity: 0
  }
});

class MonthSelecter extends Component {
  state = {
    width: 375
  };

  componentDidMount() {
    const { props } = this;
    const { width } = Dimensions.get("window");
    this.setState({ width });
    if (!props.month.currentMonth) {
      const currentDate = new Date();
      const month = this.convertMonth(currentDate.getMonth());
      props.setCurrentMonth(month);
    }

  }

  convertMonth = realMonth => {
    const appMonths = [null, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
    return appMonths[realMonth];
  };

  renderItem = ({ item, index }) => {
    const { name, backgroundColor } = item;
    return (
      <View
        style={StyleSheet.flatten([styles.container, { backgroundColor }])}
      />
    );
  };

  getArrowStyle = arrow => {
    const { month } = this.props;
    const { currentMonth } = month;
    if (arrow === "left" && currentMonth < 1) {
      return StyleSheet.flatten([styles.hideArrowContainer]);
    }
    if (arrow === "right" && currentMonth > 10) {
      return StyleSheet.flatten([styles.hideArrowContainer]);
    }
    return {};
  };

  onScroll = event => {
    const { setCurrentMonth } = this.props;
    setCurrentMonth(event);
  };

  nextMonth = () => {
    const { month, setCurrentMonth } = this.props;
    const { currentMonth } = month;
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1);
      this.carousel.snapToNext();
    }
  };

  prevMonth = () => {
    const { month, setCurrentMonth } = this.props;
    const { currentMonth } = month;
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
      this.carousel.snapToPrev();
    }
  };

  render() {
    const { month, user } = this.props;
    const { currentMonth } = month;
    const { width } = this.state;
    return (
      <View>
        <Carousel
          ref={c => {
            this.carousel = c;
          }}
          data={months}
          onSnapToItem={this.onScroll}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
          firstItem={currentMonth}
        />

        <View style={styles.MonthDisplayContainer}>
          <Touchable
            onPress={this.prevMonth}
            style={this.getArrowStyle("left")}
          >
            <View style={styles.arrowContainer}>
              <Icon name="arrow-back" />
            </View>
          </Touchable>
          <View style={styles.monthContainer}>
            <Text style={styles.monthText}>{months[currentMonth].name}</Text>
            <Text style={styles.yearText}>{user.year} Year</Text>
          </View>
          <Touchable
            onPress={this.nextMonth}
            style={this.getArrowStyle("right")}
          >
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
    month: state.month,
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  actions
)(MonthSelecter);
