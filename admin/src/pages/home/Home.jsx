import React from "react";
import Chart from "../../components/chart/chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../DummyData";

import WidgetLg from "../../components/widgetsLg/WidgetLg";
import WidgetSm from "../../components/WidgetsSm/WidgetSe";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "../../RequestMethods";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item)=>{
          setUserStats(prev=>[
            ...prev,
            {name:MONTHS[item._id-1],"ACTIVE USER" : item.total}
          ])
        })
      } catch {}
    };
    getStats()
  },[MONTHS]);
  console.log(userStats)

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
