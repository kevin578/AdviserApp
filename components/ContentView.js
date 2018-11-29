import React, { Component } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import * as actions from "../actions";
import MainCard from "./MainCard";

const months = [
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July"
];

const realMonthKey = [5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4];

const styles = {
  container: {
    paddingBottom: 250,
    position: "relative"
  },

  activityIndicator: {
    position: "absolute",
    alignSelf: "center",
    top: -15,
    zIndex: 99
  }
};

const NUMBER_OF_PAGES = 99;

class ContentView extends Component {
  state = {
    isLoading: false,
    isLoadingFlatList: false,
    filteredContent: []
  };

  componentDidMount() {
    this.loadContent();
  }



  getPageCount = async () => {
    const content = await axios.get(
      "https://clarkcompass.com/wp-json/wp/v2/posts",
      {
        params: {
          per_page: NUMBER_OF_PAGES
        }
      }
    );
    return content.headers["x-wp-totalpages"];
  };

  getData = pageNumber =>
    new Promise((resolve, reject) => {
      axios
        .get("https://clarkcompass.com/wp-json/wp/v2/posts", {
          params: {
            page: pageNumber,
            per_page: NUMBER_OF_PAGES
          }
        })
        .then(posts => resolve(posts.data))
        .catch(error => reject(error));
    });

  loadContent = async (flatlist = false) => {
    if (flatlist) {
      this.setState({ isLoadingFlatList: true });
    } else {
      this.setState({ isLoading: true });
    }
    const { props } = this;
    try {
      const promisedPosts = [];
      const totalPages = await this.getPageCount();
      for (let i = 1; i <= totalPages; i += 1) {
        promisedPosts.push(this.getData(i));
      }
      let loadedPosts = await Promise.all(promisedPosts);
      loadedPosts = _.flatten(loadedPosts)
      props.loadContent(loadedPosts);
      this.filterContent();
      this.setState({ isLoading: false, isLoadingFlatList: false });
    } catch (err) {
      this.setState({ isLoading: false, isLoadingFlatList: false });
      return err;
    }
  };

  filterContent = () => {
    const yearToCategoryID = {
      Freshman: 10,
      Sophmore: 7,
      Junior: 8,
      Senior: 9
    };
    const { props } = this;
    const filteredForMonth = props.application.content.filter(item => {
      if (!item) return false;
      if (!item.date) return false;
      const firstDigit = item.date[5];
      const secondDigit = item.date[6];
      const monthPublished =
        firstDigit === "0" ? secondDigit : firstDigit + secondDigit;
      if (realMonthKey[monthPublished] === props.month.currentMonth) {
        return true;
      }
      return false;
    });

    // const filteredForMonth = _.filter(props.application.content, {
    //   content_month: months[props.month.currentMonth]
    // });

    const filteredForYears = _.filter(filteredForMonth, "categories");
    const filteredContent = _.filter(filteredForYears, o =>
      o.categories.includes(yearToCategoryID[props.user.year])
    );
    this.setState({filteredContent});
  };

  renderItem = item => {
    const { title, excerpt, content } = item.item;
    return (
      <MainCard
        title={title.rendered}
        excerpt={excerpt.rendered.slice(3, 140)}
        html={content.rendered}
      />
    );
  };

  render() {
    const { props, state } = this;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          animating={state.isLoading}
          style={styles.activityIndicator}
        />
        <FlatList
          data={this.state.filteredContent}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshing={state.isLoadingFlatList}
          onRefresh={() => this.loadContent(true)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    application: state.application,
    month: state.month,
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  actions
)(ContentView);
