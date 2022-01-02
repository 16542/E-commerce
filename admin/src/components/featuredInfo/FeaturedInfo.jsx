import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../RequestMethods";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        // console.log(userRequest)
        setIncome(res.data);
        setPerc((res.data[1] * 100) / res.data[0] - 100);
      } catch {}
    };
    getIncome();
  }, []);

  console.log(perc);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyConatiner">
          <span className="featuredMoney">$ {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            % {Math.floor(perc)}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyConatiner">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1,4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyConatiner">
          <span className="featuredMoney">$2,50</span>
          <span className="featuredMoneyRate">
            +2,55
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
