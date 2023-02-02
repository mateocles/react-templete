import React, { useEffect } from "react";
import moment from "moment";
import "../i18n/i18n";
import { Public } from "../scenes/Layout/Public/Public";

export const App = (props) => {
  useEffect(() => {
    moment.locale("en");
  }, []);
  return <Public {...props} />;
};
