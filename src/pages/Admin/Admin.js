import React from "react";
import { motion } from "framer-motion";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function Admin() {
  return (
    <motion.div
      className="page-admin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
    >
      <h1>React Admin</h1>
      <Dashboard />
    </motion.div>
  );
}
