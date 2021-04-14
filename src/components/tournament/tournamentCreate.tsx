import React, { ChangeEvent, MouseEventHandler } from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Form, Input, Button } from 'antd';
import { useState } from 'react';

import { useHistory } from "react-router-dom";
 function TournamentCreate() {  
  const [name, setCurrentName] = useState("..");
  let history = useHistory();
  const SaveTournament = ()  => {

    let request: any = {};
    request.name =name
    console.log(JSON.stringify(request));
    fetch('http://localhost:4000/Tournament', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then(response => response.json())
      .then(data => {
        history.push("/tournamentList");
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const { TextArea } = Input;

   


    const layout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      }
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16
      }
    };


    return (

      <>

        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
        >
          
          <Form.Item
            label="Tournament name"
            name="Tournament name"

            rules={[
              {
                required: true,
                message: "Tournament name!"
              }
            ]}
          >
              <TextArea onChange={e => setCurrentName((e.target.value))} />
            </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={SaveTournament}>
              Submit
        </Button>
          </Form.Item>
        </Form>
      </>

    );
}

export default TournamentCreate;