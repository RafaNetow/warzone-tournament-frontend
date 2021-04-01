import React from "react";
import "antd/dist/antd.css";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from "antd/lib/card/Meta";
import TournamentsDataModel from "./modelList";
 export class MainContent extends React.Component <any, any> {
    state: TournamentsDataModel = {
        tournaments: []
      };

      componentDidMount() {
        const url = "http://localhost:4000/Tournament";
        fetch(url)
        .then(response => response.json())
        .then((tournaments) =>  {
          this.state.tournaments = tournaments;
          this.setState(this.state);
        });
    }

 render() {
  let state = this.state;
  const Tournament = state.tournaments.map((tournament) => {
   return  <Card key = {tournament["id"]}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://www.bdaesportsleague.com/wp-content/uploads/2020/05/CoD-Tourney-GraphicsWP-PRODUCT.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://as02.epimg.net/meristation/imagenes/2020/03/16/avances/1584344280_436438_1584353649_noticia_normal_recorte1.jpg" />}
      title={tournament["name"]}
      description={tournament["description"]}
    />
  </Card>
 })
 console.log(Tournament);
    return (
    
    <>
    
     {Tournament} 
  </>

    );
  }

}