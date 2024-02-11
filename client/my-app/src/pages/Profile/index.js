import React from "react";
import { Tabs } from "antd";
// import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import TheatreList from "./TheatreList";
// import Bookings from "./Bookings";

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
            Booking
        </Tabs.TabPane>

        <Tabs.TabPane tab="apply Theater" key="2">
            <TheatreList/>
            {/* list of theatre */}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;