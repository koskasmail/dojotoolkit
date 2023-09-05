require([
    "dojo/dom",
    "dojo/_base/xhr",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dijit/registry",
    "dojox/grid/EnhancedGrid",
    "dojox/grid/enhanced/plugins/Pagination",
    "dojox/grid/enhanced/plugins/Filter",
    "dojo/domReady!"
  ], function (dom, xhr, array, lang, registry, EnhancedGrid, Pagination, Filter) {
    // Function to create a table from JSON data
    function createTable(containerId, jsonData, category) {
      // Define the structure of the table
      var layout = [
        { name: "ID", field: "id", width: "50px" },
        { name: "Name", field: "name", width: "150px" },
        { name: "Category", field: "category", width: "100px" }
      ];
  
      // Filter the data based on the category
      var filteredData = array.filter(jsonData, function (item) {
        return item.category === category;
      });
  
      // Create a data store
      var dataStore = new dojo.data.ItemFileWriteStore({ data: { items: filteredData } });
  
      // Create the EnhancedGrid
      var grid = new EnhancedGrid({
        store: dataStore,
        structure: layout,
        plugins: {
          pagination: true,
          filter: true
        },
        autoHeight: true
      }, containerId);
  
      // Start grid
      grid.startup();
    }
  
    // Fetch the JSON data
    xhr.get({
      url: "your_json_data_url.json",
      handleAs: "json",
      load: function (data) {
        // Create the tables for each category
        createTable("categoryATable", data, "Category A");
        createTable("categoryBTable", data, "Category B");
      },
      error: function (error) {
        console.error("Error fetching JSON data:", error);
      }
    });
  });
  