require(["dojo/domReady!"], function() {
  var myString = "This is a sample text that contains a PDF file and a signature file.pdf";
  
  if (myString.endsWith('.pdf') || myString.endsWith('.sign')) {
    console.log("The string ends with a PDF or signature file.");
  } else {
    console.log("The string does not end with a PDF or signature file.");
  }
});
