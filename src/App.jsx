import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  Container,
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import axiosInstance from "./api/axiosInstance";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/users/FaiqTech");
        setData(response.data);
      } catch (error) {
        toast.error("Məlumat alınmadı.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <ToastContainer />
      <h1 className="text-center">GitHub İstifadəçi Məlumatı</h1>
      {loading ? (
        <div className="text-center">
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
          <p>Yüklənir...</p>
        </div>
      ) : (
        data && (
          <Card>
            <CardImg
              top
              src={data.avatar_url}
              alt="Avatar"
              style={{
                width: "150px",
                height: "150px",
                margin: "auto",
                marginTop: "20px",
              }}
            />
            <CardBody>
              <CardTitle tag="h5">İstifadəçi Adı: {data.login}</CardTitle>
              <CardText>Adı: {data.name}</CardText>
              <CardText>Takibçilərin: {data.followers}</CardText>
              <CardText>İzlədiklerin: {data.following}</CardText>
              <CardText>Repo: {data.public_repos}</CardText>
            </CardBody>
          </Card>
        )
      )}
    </Container>
  );
};

export default App;
