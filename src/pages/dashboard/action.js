import ListUsers from "../../models/users/list-users";
import UserRepo from "../../repositories/user-repo";

const getlist = async () => {
  const res = await UserRepo.getListUser({ page: 1 });

  if (res.data.length > 0) {
    return res.data.map((item) => {
      return ListUsers({
        id: item.id,
        email: item.email,
        first_name: item.first_name,
        last_name: item.last_name,
        avatar: item.avatar,
      });
    });
  }

  console.error("Data is not an array:", res.data);
  return [];
};

const Action = {
  getlist,
};

export default Action;
