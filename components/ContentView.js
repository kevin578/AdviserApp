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

class ContentView extends Component {
  state = {
    isLoading: false,
    isLoadingFlatList: false
  };

  componentDidMount() {
    this.loadContent();
  }

  loadContent = async (flatlist = false) => {
    if (flatlist) {
      this.setState({isLoadingFlatList: true})
    }
    else {
      this.setState({ isLoading: true });
    }
    const { props } = this;
    try {
      const content = await this.getData(1);
      let posts = content.data;
      const totalPages = content.headers["x-wp-totalpages"];
      if (totalPages > 1) {
        for (let i = 2; i <= totalPages; i += 1) {
          const newContent = this.getData(i);

          posts = posts.concat(newContent.data);
        }
      }
      props.loadContent(await Promise.all(posts));
      this.setState({ isLoading: false, isLoadingFlatList: false });
    } catch (err) {
      this.setState({ isLoading: false, isLoadingFlatList: false });
      return err;
    }
  };

  getData = pageNumber =>
    axios.get("http://adviserapp.local/wp-json/wp/v2/posts", {
      params: {
        page: pageNumber,
        per_page: 99
      }
    });

  filterContent = () => {
    const { props } = this;
    const filteredForMonth = _.filter(props.application.content, {
      content_month: months[props.month.currentMonth]
    });
    const filteredForYears = _.filter(filteredForMonth, "student_year");
    const filteredContent = _.filter(filteredForYears, o =>
      o.student_year.includes(props.user.year)
    );
    return filteredContent;
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
    this.filterContent();
    const { props, state } = this;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          animating={state.isLoading}
          style={styles.activityIndicator}
        />
        <FlatList
          data={this.filterContent()}
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
