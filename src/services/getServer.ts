import { client } from "../services/client";

export const getServer = () => {
  return (dispatch: any) => {
    client.get("/students").then((response) => {
      dispatch(response.data);
    });
  };
};
