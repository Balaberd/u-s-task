import React from "react";
import styles from "./App.module.scss";
import { Header, NavigationBar, Table } from "./widgets";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.contentBlock}>
          <Routes>
            <Route path="/cmdb/servers_and_pc" element={<Table title="Серверы и ПК" />} />
            <Route path="*" element={<h3>check something else</h3>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
