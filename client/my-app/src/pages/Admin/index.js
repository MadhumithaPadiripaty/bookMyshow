import React from "react";
import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MoviesList";
import TheatreTable from "./TheatreTable";

function Admin() {
  return (
    <div>
      <PageTitle title="Admin" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
            <MoviesList/>
            {/* <h1>All movies</h1> */}
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
            <TheatreTable/>
            {/* <h1>TheatreTable</h1> */}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;  