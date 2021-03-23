import React from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Form, Input, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import Meta from "antd/lib/card/Meta";
import TournamentCreateModel from "./modelCreate";
export class TournamentCreate extends React.Component<any, any> {
  state: TournamentCreateModel = {
    name: " "
  };

  handleChangeTournament = (event: any) => {
    let tournament = event.target;
    console.log(tournament);
  };
  render() {
    const { TextArea } = Input;

    function saveTournament(tournament: string) {
      fetch('http://localhost:4000/Tournament', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournament),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }


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
            <Form.Item label={<span>vacunas aplicadas</span>}>
              <TextArea onChange={e => this.handleChangeTournament(String(e))} />
            </Form.Item>

          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </>

    );
  }
}