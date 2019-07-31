import React, { useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import { getGuides } from "../store/actions";
import Guide from "./Guide";

const GuideList = props => {
  return (
    <div className="guide-list-container">
      <h3>Browse All Guides</h3>
      <button onClick={props.getGuides}>Get All Guides</button>
      {props.guides ? props.guides.map(guide => <Guide guide={guide} />) : null}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    guides: state.guides
  };
};

export default connect(
  mapStateToProps,
  { getGuides }
)(GuideList);
