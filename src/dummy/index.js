import { endpoints } from "../utility/config-utility";
import DummyUser from "./dummy-user";

const getDummyData = (endpoint) => {
  switch (endpoint) {
    case endpoints.list_user + "?page=1":
      return DummyUser.user;
    case endpoints.detail_user + "/1":
      return DummyUser.detail_user;
    default:
      return null;
  }
};
export default getDummyData;
