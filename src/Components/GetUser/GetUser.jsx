import { useState, useEffect } from "react";

export default function GetUser() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://dummyjson.com/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="max-w-5xl my-10 mx-auto p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center gap-10">
        <img
          src={user?.image}
          alt="User Avatar"
          className="w-52 h-52 border rounded-lg border-gray-200 shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-semibold">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="my-4 text-2xl">
            Email: <span className="font-medium">{user?.email}</span>
          </p>
          <p className="text-2xl">
            Gender: <span className="font-medium">{user?.gender}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
