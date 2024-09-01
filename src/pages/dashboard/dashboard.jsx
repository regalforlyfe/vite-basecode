import React, { useEffect, useState } from "react";
import Action from "./action";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Action.getlist();
      setData(response);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
        <span className="ml-4 text-blue-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the Dashboard. Here you can view the list of users and
          their details.
        </p>
      </header>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg border">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-700">{item.id}</td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {item.first_name}
                </td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {item.email}
                </td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={item.avatar}
                    alt={`Avatar of ${item.first_name}`}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
