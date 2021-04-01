import React, { ChangeEvent, MouseEventHandler } from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Form, Input, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import Meta from "antd/lib/card/Meta";
import TournamentCreateModel from "./modelCreate";
export class TournamentCreate extends React.Component<any, any> {
  state: TournamentCreateModel = {
    name: " "
  };

  handleChangeTournament = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let name = event.target.value
    this.setState({
      name
    });
    console.log(this.state)
  };

  handleChangeName = (name: String) => {
    this.setState({
      name
    });
  };

   saveTournament = ()  => {
    let request: any = {};
    request.name =this.state.name
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
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  render() {
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
              <TextArea onChange={e => this.handleChangeTournament((e))} />
            </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={this.saveTournament}>
              Submit
        </Button>
          </Form.Item>
        </Form>
      </>

    );
  }
}