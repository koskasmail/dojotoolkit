// Assuming the `MessageDialog` is a custom dialog component or library

// Create and show the dialog with the message
var dialog = new MessageDialog();
dialog.showMessage("test");

// Close the dialog after 2 seconds
setTimeout(function() {
  dialog.close();
}, 2000);
