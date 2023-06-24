import { useEffect } from "react";

const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
  console.log(user);
}, []);
