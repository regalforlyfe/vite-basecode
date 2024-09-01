const ListUsers = ({
  id = "",
  email = "",
  first_name = "",
  last_name = "",
  avatar = "",
}) => {
  return {
    id,
    email,
    first_name,
    last_name,
    avatar,
  };
};

export default ListUsers;
