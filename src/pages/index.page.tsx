import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../common/routes/default.routes";

type Props = {};

const IndexPage = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.BOOKS);
  }, [navigate]);

  return <div>INDEX</div>;
};

export default IndexPage;
