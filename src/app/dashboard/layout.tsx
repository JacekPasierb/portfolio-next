import React from "react";
import Navigation from "../ui/Navigation";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
