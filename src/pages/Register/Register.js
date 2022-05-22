import React, { useEffect } from "react";
import { motion } from "framer-motion";
import FormRegister from "../../components/FormRegister/FormRegister";
import RegisterMessage from "../../components/RegisterMessage/RegisterMessage";
import useUserContext from "../../hooks/useUserContext";

export default function Register() {
  const { IsLogged } = useUserContext();

  useEffect(() => {
    IsLogged();
  }, []);

  return (
    <motion.div
      className="page-register"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
    >
      <FormRegister />
      <RegisterMessage />
    </motion.div>
  );
}
