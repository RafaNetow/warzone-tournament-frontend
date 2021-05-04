import React, { ChangeEvent, MouseEventHandler } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Form, Input, Button, InputNumber } from "antd";
import { useState } from "react";

import { useHistory } from "react-router-dom";
function TournamentCreate() {
  const [name, setCurrentName] = useState("");
  const [pointsPerKill, setPointsPerKills] = useState(0);
  const [type, setType] = useState(0);
  let history = useHistory();
  const SaveTournament = () => {
    let request: any = {};
    request.name = name;
    request.pointPerKilolopp874 = pointsPerKill;
    request.type = type;
    console.log(JSON.stringify(request));
    fetch("http://localhost:4000/Tournament", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/tournamentList");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const { TextArea } = Input;

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
      </a>
      </Menu.Item>
    </Menu>
  );


  return (
    
    <>
    
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Tournament name"
          name="Tournament name"
          rules={[
            {
              required: true,
              message: "Tournament name!",
            },
          ]}
        >
          <TextArea onChange={(e) => setCurrentName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Points per Kills"
          name="Points per Kills"
          rules={[
            {
              required: true,
              message: "Points Per Kills",
            },
          ]}
        >
          <InputNumber
            min={1}
            max={10}
      
            onChange={(e) => setPointsPerKills(e.valueOf())}
          />
        </Form.Item>
        

        <Form.Item
          name={['Solo', 'Duo', 'Trio', 'Squad']}
          noStyle
          rules={[{ required: true, message: 'Province is required' }]}
        >
        </Form.Item>
      </Form>
    </>
  );
}

export default TournamentCreate;
