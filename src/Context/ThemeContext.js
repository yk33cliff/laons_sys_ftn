import React, {useEffect, useState} from "react";
import dictionary from "../util/dictionary";
import functions from "../util/functions";

const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(functions.sessionGuard());
  const [refreshRate, setRefreshRate] = useState(1);
  const [tableRowCount, setTableRowCount] = useState(0);
  const [tableDetected, setTableDetected] = useState(false);
  // const [viewAsRole, setViewAsRole] = useState("Normal View")

  useEffect(() => {
    setTimeout(() => {
      setRefreshRate(refreshRate + 1);
    }, dictionary._uiRefreshRate);
  }, [refreshRate]);

  useEffect(() => {
    detectDataTable();
  }, [refreshRate]);

  // useEffect(() => {
  //     refreshDatatable()
  // }, [tableRowCount])

  const detectDataTable = () => {
    var tableElement = document.getElementsByClassName("datatable");
    // var emptyElement = document.getElementsByClassName("dataTables_empty");

    if (tableElement.length > 0) {
      setTableRowCount(document.getElementsByTagName("tbody")[0].rows.length);
      setTableDetected(true);
      // //console.log("Datatable detected with " + numRows + " data row(s)")
      // beautifyTable(tableElement[0].getAttribute('id'), true, false)
    } else {
      setTableDetected(false);
    }
  };

  const refreshDatatable = () => {
    if (tableRowCount > 0) {
      var tableElement = document.getElementsByClassName("datatable"); //check if datatable exists
      if (tableElement.length > 0) {
        const eformats = tableElement[0].getAttribute("export-format");
        const header = "Eschool Report";
        const address = "Kampala, Uganda";
        const box = "P.O.Box 3874";
        const telephone = "HOTLINE: 0312360100";
        const email = "multiplexug@gmail.com";

        const title = header;
        const messageTop = tableElement[0].getAttribute("messageTop");
        const messageBottom = tableElement[0].getAttribute("messageBottom");

        var formats = false;
        var new_formarts = [];

        if (eformats !== null) {
          formats = eformats.split(",");
          const styledFormats = dictionary._styledExportBtnFormats;
          for (var i in formats) {
            switch (formats[i]) {
              case "copy":
                new_formarts.push(styledFormats.copy);
                break;
              case "excel":
                new_formarts.push(styledFormats.excel);
                break;
              case "csv":
                new_formarts.push(styledFormats.csv);
                break;
              case "pdf":
                styledFormats.pdf.title = title;
                styledFormats.pdf.messageTop = messageTop;
                styledFormats.pdf.messageBottom = messageBottom;
                new_formarts.push(styledFormats.pdf);
                break;
              case "print":
                new_formarts.push(styledFormats.print);
                break;
              default:
                // new_formarts = new_formarts
                break;
            } //end switch
          }
        }
      }
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        tableDetected,
        // viewAsRole,
        refreshDatatable,
        // setViewAsRole
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
