import React, { useEffect } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import LoginMessage from "../../components/LoginMessage/LoginMessage";
import { motion } from "framer-motion";
import useUserContext from "../../hooks/useUserContext";

export default function Login() {
  const { IsLogged } = useUserContext();

  useEffect(() => {
    IsLogged();
  }, []);

  return (
    <motion.div
      className="page-login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
    >
      <LoginMessage />
      <FormLogin />
    </motion.div>
  );
}
