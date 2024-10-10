To create a custom context menu using Dojo when the right mouse button is clicked, you can follow these steps. Below is an example that combines disabling the default context menu and displaying a custom menu:

### HTML Structure
First, set up a simple HTML structure for your custom menu:

```html
<div id="customMenu" style="display: none; position: absolute; background: white; border: 1px solid #ccc; z-index: 1000;">
    <ul>
        <li id="option1">Option 1</li>
        <li id="option2">Option 2</li>
    </ul>
</div>
```

### JavaScript with Dojo
Now, add the JavaScript code to handle the right-click event and display the custom menu:

```javascript
require(["dojo/on", "dojo/dom", "dojo/dom-style", "dojo/domReady!"], function(on, dom, domStyle) {
    var customMenu = dom.byId("customMenu");

    on(document, "contextmenu", function(event) {
        // Prevent the default context menu from appearing
        event.preventDefault();

        // Position the custom menu at the mouse click location
        domStyle.set(customMenu, {
            display: "block",
            left: event.pageX + "px",
            top: event.pageY + "px"
        });

        console.log("mouse right clicked");
    });

    // Hide the custom menu when clicking elsewhere
    on(document, "click", function() {
        domStyle.set(customMenu, "display", "none");
    });

    // Option click handlers
    on(dom.byId("option1"), "click", function() {
        console.log("Option 1 selected");
        domStyle.set(customMenu, "display", "none");
    });

    on(dom.byId("option2"), "click", function() {
        console.log("Option 2 selected");
        domStyle.set(customMenu, "display", "none");
    });
});
```

### Explanation:
1. **HTML Menu**: A simple `<div>` contains a list of menu options. It’s initially hidden.
2. **Event Listener**: The `contextmenu` event listener disables the default context menu and positions the custom menu at the cursor's location.
3. **Show/Hide Logic**: The custom menu is shown on right-click and hidden when clicking anywhere else on the document.
4. **Option Handlers**: Each menu option has a click handler that logs the selection and hides the menu.

### Styling (Optional)
You can add some CSS to style your custom menu:

```css
#customMenu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#customMenu li {
    padding: 8px 12px;
    cursor: pointer;
}

#customMenu li:hover {
    background-color: #eee;
}
```

### Putting It All Together
This setup allows you to have a custom context menu that appears on right-click while preventing the default browser context menu from appearing. Customize the menu options and styles as needed!
