import React from "react";

import { RouterView } from "../../router";

// TODO: fix
import Header from "../../components/layout/header";

export default function MainLayout() {
  return (
    <React.Fragment>
      <Header />
      <RouterView />
    </React.Fragment>
  );
}
