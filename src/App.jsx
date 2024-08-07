import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Spinner,
  Alert,
} from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserData from "./hooks/useUserData";

const App = () => {
  const { data, loading, error } = useUserData("FaiqTech");

  return (
    <Container className="mt-5">
      <ToastContainer />
      <h1 className="text-center mb-4">GitHub İstifadəçi Məlumatı</h1>
      {loading && (
        <div className="text-center">
          <Spinner color="primary" />
        </div>
      )}
      {error && <Alert color="danger">Məlumat alarkən səhv baş verdi!</Alert>}
      {!loading && data && (
        <Row className="justify-content-center">
          <Col md="6" lg="4">
            <Card className="text-center">
              <CardImg
                top
                width="100%"
                src={data.avatar_url}
                alt="Avatar"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  margin: "20px auto",
                }}
              />
              <CardBody>
                <CardTitle tag="h5">İstifadəçi Adı: {data.login}</CardTitle>
                <CardText>
                  <strong>Adı:</strong> {data.name}
                </CardText>
                <CardText>
                  <strong>Takibçilərin:</strong> {data.followers}
                </CardText>
                <CardText>
                  <strong>İzlədiklerin:</strong> {data.following}
                </CardText>
                <CardText>
                  <strong>Repo:</strong> {data.public_repos}
                </CardText>
                <CardText>
                  <strong>Bio:</strong> {data.bio}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default App;
