import CommonUtility from "./common-utility";

// A list of all locales that are supported
const locales = ["en", "id"];

const endpoints = {
  list_user: "/api/users",
  detail_user: "/api/users",
};

// config use API or Dummy Data
const config = {
  isDummy: false,
  api: {
    baseUrl: CommonUtility.baseApi(),
    isDummy: {
      [`${endpoints.list_user + "?page=1"}`]: false,
      [`${endpoints.detail_user + "/1"}`]: true,
    },
  },
};

export { endpoints, config, locales };
