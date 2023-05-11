// import { createContext } from "react";

// const AdminContext = createContext("admin")

// export default AdminContext

import { createContext } from "react";

const AdminContext = createContext({
  role: "admin",
  setRole: () => {},
});

export default AdminContext;
