const ENV = import.meta.env.VITE_ENVIRONMENT;

const baseApi = () => {
  switch (ENV) {
    case "PRODUCTION":
      return import.meta.env.VITE_BASE_API_PRODUCTION;
    case "STAGGING":
      return import.meta.env.VITE_BASE_API_STAGGING;
    case "DEVELOPMENT":
      return import.meta.env.VITE_BASE_API_DEVELOPMENT;
    default:
      return "";
  }
};

const CommonUtility = {
  baseApi,
};

export default CommonUtility;
