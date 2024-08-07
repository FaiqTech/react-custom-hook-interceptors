import React from "react";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import useUserData from "./hooks/useUserData";

const App = () => {
  const { data, loading } = useUserData("FaiqTech");

  return (
    <Container className="mt-5">
      <ToastContainer />
      <h1 className="text-center">GitHub İstifadəçi Məlumatı</h1>
      <LoadingSpinner loading={loading} />
      {!loading && data && (
        <div>
          <img
            src={data.avatar_url}
            alt="Avatar"
            style={{
              width: "150px",
              height: "150px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <h5>İstifadəçi Adı: {data.login}</h5>
          <p>Adı: {data.name}</p>
          <p>Takibçilərin: {data.followers}</p>
          <p>İzlədiklerin: {data.following}</p>
          <p>Repo: {data.public_repos}</p>
          <p>Bio: {data.bio}</p>
        </div>
      )}
    </Container>
  );
};

export default App;
