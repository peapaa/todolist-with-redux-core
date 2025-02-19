import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filtersPriority,
  filtersSearch,
  filtersStatus,
} from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();
  console.log(searchText);
  console.log(status);
  console.log(priority);

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            dispatch(filtersSearch(e.target.value));
          }}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            dispatch(filtersStatus(e.target.value));
          }}
        >
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priority}
          onChange={(value) => {
            setPriority(value);
            dispatch(filtersPriority(value));
          }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
