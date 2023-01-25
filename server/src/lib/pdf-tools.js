import PdfPrinter from "pdfmake";

export const getPDFReadableStream = (userDetails) => {
  // Define font files
  const fonts = {
    Courier: {
      normal: "Courier",
      bold: "Courier-Bold",
      italics: "Courier-Oblique",
      bolditalics: "Courier-BoldOblique"
    },
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique"
    }
  };

  const printer = new PdfPrinter(fonts);

  let docDefinition = {
    content: [
      "pdfmake (since it's based on pdfkit) supports JPEG and PNG format",
      "You can also cover the image inside a rectangle",
      {
        image: userDetails.image,
        opacity: 0.5,
        cover: { width: 100, height: 100, valign: "bottom", align: "right" },
        pageBreak: "after"
      },
      { text: userDetails.title, style: "header" },
      { text: userDetails.username, style: "header" },
      { text: userDetails.name, style: "subheader" },
      { text: userDetails.surname, style: "subheader" },
      { text: userDetails.email, style: "subheader" },
      { text: userDetails.bio, style: "subheader" },
      { text: userDetails.area, style: "subheader" },
      "\n\n"
    ],
    defaultStyle: {
      font: "Helvetica"
    },
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        font: "Courier"
      },
      subheader: {
        fontSize: 15,
        bold: false
      }
    }
  };
  const pdfReadableStream = printer.createPdfKitDocument(docDefinition);
  pdfReadableStream.end();

  return pdfReadableStream;
};
