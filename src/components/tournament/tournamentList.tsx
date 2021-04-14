import "antd/dist/antd.css";
import { Card, Avatar, Col, Row  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from "antd/lib/card/Meta";
import TournamentsDataModel from "./modelList";
import { useState, useEffect } from 'react';

 function TournamentList ()  {
  const [tournaments, setTournaments] = useState([]);
  useEffect(() => {
    console.log("...");
        const url = "http://localhost:4000/Tournament";
        fetch(url)
        .then(response => response.json())
        .then((tournaments) =>  {
          console.log(tournaments)
          setTournaments(tournaments)
  });

     
    }, []);

  const Tournament = tournaments.map((tournament) => {
   return (     <Col span={8}><Card key = {tournament["id"]}
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
  </Col> 
 )})
 console.log(Tournament);
    return (
    
    <>
       <Row gutter={16}>
     {Tournament} 
     </Row>
  </>

    );
  }
  export default TournamentList;

