import * as React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
};

const adminUserData: IUser[] = [
  { id: 1, name: "Araya", isAdmin: true },
  { id: 2, name: "King", isAdmin: false },
  { id: 3, name: "Hanneman", isAdmin: true },
  { id: 4, name: "Lombardo", isAdmin: false },
];

const AdminPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Admin Panel</h1>

      <ul className="admin-sections">
        <li key="users">
          <NavLink to={ `/admin/users` }>Users</NavLink>
        </li>
        <li key="products">
          <NavLink to={ `/admin/products` }>Products</NavLink>
        </li>
      </ul>
      <Outlet />
      {/* <p>You should only be here if you have logged in</p> */}
    </div>
  );
};

export const AdminUsers: React.FC = () => {
  return(
    <>
      <ul className="admin-sections">
        {
          adminUserData.map(user => (
            <li>
              <NavLink to={ `/admin/users/${ user.id }` }>{ user.name }</NavLink>
            </li>
          ))
        }
      </ul>
      <Outlet />
    </>
  );
};

export const AdminUser: React.FC = () => {
  const params = useParams();

  let user: IUser;

  if(params.id) {
    const id: number = parseInt(params.id, 10);
    user = adminUserData.filter(u => u.id === id)[0];
  } else {
    return null;
  }

  return (
    <div>
      <div><p><strong>Id: </strong>{ user.id.toString() }</p></div>
      <div><p><strong>Name: </strong>{ user.name }</p></div>
      <div><p><strong>IsAdmin: </strong>{ user.isAdmin.toString() }</p></div>
    </div>
  );
};

export const AdminProducts: React.FC = () => {
  return(
    <><p>Some options to administer products</p></>
  );
};

export default AdminPage;

