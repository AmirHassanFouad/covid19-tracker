import { useCallback, useEffect, useState } from "react";
import { Button, Select, InputNumber, Row, Col, Card, Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { getDistrictsList } from "features/districtsTracking/selectors";
import {
  getDistrictHistory,
  getDistricts,
} from "features/districtsTracking/thunks";
import { District } from "typings/districts";

import "../index.scss";

export function Filtration() {
  const dispatch = useDispatch();

  const districts = useSelector(getDistrictsList);
  const [district, setDistrict] = useState<District>();
  const [days, setDays] = useState<string | number>("");

  useEffect(() => {
    dispatch(getDistricts());
  }, [dispatch]);

  const selectDistrict = (value: string) => {
    setDistrict(districts.find((d) => d.ags === value));
  };

  const applyFilters = useCallback(() => {
    dispatch(
      getDistrictHistory({
        district: district as District,
        days: Number(days),
      })
    );
  }, [dispatch, days, district]);

  return (
    <Card className="filtration">
      <Row>
        <Col sm={24} md={4} className="filter-group">
          <div className="filter-label">
            <span>Districts</span>
            <span className="required">*</span>
          </div>
          <Select
            showSearch
            value={district?.ags}
            onChange={selectDistrict}
            className="filter-field"
            placeholder="Select a district"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {districts.map((district: District) => (
              <Select.Option key={district.ags} value={district.ags}>
                {district.county}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col sm={24} md={4} className="filter-group">
          <div className="filter-label">
            <span>Days</span>
            <Tooltip
              placement="right"
              title="Number of days in the past from today."
            >
              <ExclamationCircleOutlined className="tooltip-icon" />
            </Tooltip>
          </div>
          <InputNumber
            placeholder="Enter number of days"
            min={0}
            max={90}
            value={days}
            onChange={setDays}
            className="filter-field"
          />
        </Col>
        <Col sm={24} md={4} className="button-col">
          <div className="filter-label">
            <Button disabled={!district} type="primary" onClick={applyFilters}>
              Apply
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
