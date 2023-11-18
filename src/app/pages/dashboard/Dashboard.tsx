import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <p>
        <h1>Dashboard</h1>
      </p>
      <Link to="/entrar">Login</Link>
    </div>
  );
};
