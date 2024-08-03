require([
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/domReady!"
], function(dom, domConstruct) {
  // Define an array of component data
  var componentData = [
    {
      icon: "📁",
      text: "File",
      comment: "This is a file component."
    },
    {
      icon: "📄",
      text: "Document",
      comment: "This is a document component."
    },
    {
      icon: "📝",
      text: "Note",
      comment: "This is a note component."
    },
    {
      icon: "🗂️",
      text: "Folder",
      comment: "This is a folder component."
    }
  ];

  // Get the container element where the list will be rendered
  var container = dom.byId("componentListContainer");

  // Iterate over the component data and create list items with icons, text, and comments
  componentData.forEach(function(component) {
    var listItem = domConstruct.create("li");
    var iconSpan = domConstruct.create("span", {
      innerHTML: component.icon,
      style: "margin-right: 5px;"
    });
    var textSpan = domConstruct.create("span", {
      innerHTML: component.text,
      style: "font-weight: bold;"
    });
    var commentSpan = domConstruct.create("span", {
      innerHTML: component.comment,
      style: "margin-left: 10px; color: gray;"
    });

    listItem.appendChild(iconSpan);
    listItem.appendChild(textSpan);
    listItem.appendChild(commentSpan);
    container.appendChild(listItem);
  });
});
