import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { todoRemainingSelector } from "../../redux/selector";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPriority] = useState("");
  const inputRef = useRef();
  console.log(todoName);
  console.log(prioriry);
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);
  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuid(),
        name: todoName,
        completed: false,
        priority: prioriry,
      })
    );
    setTodoName("");
    inputRef.current.focus();
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
            ref={inputRef}
          />

          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={(value) => setPriority(value)}
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
          <Button type="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
