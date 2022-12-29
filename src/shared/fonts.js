const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Raleway:wght@700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  // const roboto =
  //   new FontFaceObserver('Menlo');

  // roboto.load().then().catch((error) => {
  // }) ;
};

export default Fonts;
