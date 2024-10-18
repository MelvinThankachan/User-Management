import React from "react";

type User = {
  name: string;
  email: string;
  profileImage: string;
};

type UsersTableProps = {
  users: User[];
};

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto container mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Users Table</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-primary text-left">
            <th className="table-cell text-center">No.</th>
            <th className="table-cell">User</th>
            <th className="table-cell">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="table-cell text-center">{index + 1}</td>
              <td className="table-cell">
                <div className="flex gap-2">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span className="p-2">{user.name}</span>
                </div>
              </td>
              <td className="table-cell">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
