To disable the browser context menu using Dojo when a right mouse click occurs, you can listen for the `contextmenu` event and use the `event.preventDefault()` method. Here’s an example of how to do this with Dojo:

```javascript
require(["dojo/on", "dojo/domReady!"], function(on) {
    on(document, "contextmenu", function(event) {
        // Prevent the default context menu from appearing
        event.preventDefault();

        // Check if the right mouse button was clicked
        if (event.button === 2) { // 2 corresponds to the right mouse button
            console.log("mouse right clicked");
        }
    });
});
```

### Explanation:
1. **Require Dojo Modules**: We use `dojo/on` to handle events.
2. **Event Listener**: The `contextmenu` event listener is set up on the document.
3. **Prevent Default**: `event.preventDefault()` stops the context menu from appearing.
4. **Button Check**: The condition checks if the right mouse button was clicked.

Just add this code to your Dojo application, and it will disable the context menu on right-click while logging the action.
