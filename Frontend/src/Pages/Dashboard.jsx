import { Card, Col, Row } from "antd";

const Dashboard = () => {
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Card title="Categories">5</Card>
      </Col>

      <Col span={8}>
        <Card title="Courses">20</Card>
      </Col>

      <Col span={8}>
        <Card title="Colleges">12</Card>
      </Col>
    </Row>
  );
};

export default Dashboard;