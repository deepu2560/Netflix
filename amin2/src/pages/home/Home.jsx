import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [userstats, setuserstats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        await axios
          .get("http://localhost:8080/api/users", {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDVkY2QyODBhYWIwMDgyOTM0NjJmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NzkwMCwiZXhwIjoxNjQ5MjI5OTAwfQ.NuKWLkBfr2aYo7ay2SJRXW45rcOodPy_c9HqjSlqHK8",
            },
          })
          .then((res) => {
            console.log("home", res);
            const userData = res.data.sort(function(a, b) {
              return a._id - b._id;
            });

            userData.map((elem, i) => {
              setuserstats((prev) => [
                ...prev,
                { name: MONTHS[i], "New User": elem.username },
              ]);
            });
          });
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getStats();
  }, []);

  console.log("userStats", userstats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userstats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
