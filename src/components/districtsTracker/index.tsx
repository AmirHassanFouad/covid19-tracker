import { useEffect } from "react";
import { notification, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined, RadiusUprightOutlined } from "@ant-design/icons";

import { Results } from "./components/Results";
import { Filtration } from "./components/Filtration";
import { setStatus } from "features/districtsTracking/slice";
import { getStatus, isLoading } from "features/districtsTracking/selectors";

import "./index.scss";

const openNotification = () => {
  notification.error({
    message: `Error`,
    description: "Something went wrong!",
  });
};

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export function DistrictTracker() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === "failed") {
      openNotification();
      dispatch(setStatus("idle"));
    }
  }, [dispatch, status]);

  return (
    <div className="resource-page">
      {status === "failed" && <RadiusUprightOutlined />}
      <Spin indicator={antIcon} size="large" spinning={loading}>
        <Filtration />
        <Results />
      </Spin>
    </div>
  );
}
