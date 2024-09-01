import { endpoints } from "../utility/config-utility";
import RequestUtility from "../utility/request-utility";

const getListUser = async ({ page }) => {
  const res = await RequestUtility({
    URL: endpoints.list_user + `?page=${page}`,
    METHOD: "GET",
  });
  return res;
};

const getUser = async ({ id }) => {
  const res = await RequestUtility({
    URL: endpoints.detail_user + `/${id}`,
    METHOD: "GET",
  });
  return res;
};

const UserRepo = {
  getListUser,
  getUser,
};

export default UserRepo;
