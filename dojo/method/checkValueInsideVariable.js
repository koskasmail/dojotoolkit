require(["dojo/domReady!"], function() {
  var myString = "This is a sample text that contains a PDF file and a signature file.";
  
  if (myString.indexOf('.pdf') !== -1 || myString.indexOf('.sign') !== -1) {
    console.log("The string contains a PDF or signature file.");
  } else {
    console.log("The string does not contain a PDF or signature file.");
  }
});
