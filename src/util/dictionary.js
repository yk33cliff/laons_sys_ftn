import functions from "./functions";

const dictionary = {
  _completeFields: "Complete all fields and try again",
  _toastTimeOut: 5000,
  _uiRefreshRate: 1000,
  apiHost: "http://localhost/loans_system_bkd/",
  captiveHost: functions.getCaptiveHost(),
  _exportBtnFormats: ["excel", "pdf", "csv", "print", "copy"],
  _styledExportBtnFormats: {
    excel: {
      extend: "excelHtml5",
      text: '<i class="fas fa-file-excel   tx-primary mr-2"></i> Excel',
      titleAttr: "Excel",
    },
    pdf: {
      extend: "pdfHtml5",
      text: '<i class="fas fa-file-pdf  tx-primary mr-2"></i> PDF',
      titleAttr: "PDF",
      orientation: "landscape",
      title: "",
      messageTop: "",
      messageBottom: "",
      pageSize: "A4",
      /**  customize: function (doc) {

               
            //     doc.content.splice(
            //         0,
            //         0,
            //         {
            //             margin: [0, 0, 0, 12],
            //             alignment: 'center',
            //             image: 'data:image/png;base64,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',
            //         }
            //     );
            // } 
            
            */
    },
    csv: {
      extend: "csvHtml5",
      text: '<i class="fa fa-csv  tx-info mr-2"></i> CSV',
      titleAttr: "CSV",
    },

    print: {
      extend: "print",
      text: '<i class="fas fa-print  tx-info mr-2"></i> Print',
      titleAttr: "Print",
    },

    copy: {
      extend: "copyHtml5",
      text: '<i class="fas fa-copy tx-info mr-2"></i> Copy',
      titleAttr: "Copy",
    },
  },

  _exportConfigBtnFormats: ["excel", "pdf", "csv", "print"],
};

export default dictionary;
