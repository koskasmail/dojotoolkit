<a name="topage"></a>

# getting_2.md

```markdown
# 🥋 Getting Started with Dojo Toolkit

Welcome to the world of **Dojo Toolkit** — a powerful JavaScript framework designed to help you build robust, modular, and scalable web applications. Whether you're creating dynamic UIs or managing complex data flows, Dojo provides the tools you need.

---

## 📘 What is Dojo Toolkit?

Dojo Toolkit is an open-source JavaScript library that emphasizes modular architecture, rich UI components, and cross-browser compatibility. It includes:

- **Dojo Core**: Utilities for AJAX, events, promises, and more.
- **Dijit**: A set of UI widgets like buttons, forms, dialogs, and layout containers.
- **DojoX**: Experimental and extended modules for charts, grids, and more.

Dojo uses the **AMD (Asynchronous Module Definition)** format, making it easy to manage dependencies and load modules efficiently.

---

## 🚀 Installation

You can get started by downloading Dojo or using a CDN.

### Option 1: Download

```bash
git clone https://github.com/dojo/dojo
```

Place the `dojo`, `dijit`, and `dojox` folders in your project directory.

### Option 2: Use CDN

Add this to your HTML file:

```html
<script src="https://ajax.googleapis.com/ajax/libs/dojo/1.17.3/dojo/dojo.js"></script>
```

---

## 🛠️ Basic Setup

Create a simple HTML file to load Dojo modules:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Dojo App</title>
  <script>
    var dojoConfig = {
      async: true,
      packages: [
        { name: "app", location: "/app" }
      ]
    };
  </script>
  <script src="dojo/dojo.js"></script>
</head>
<body>
  <h1>Hello Dojo!</h1>
  <script>
    require(["dojo/dom", "dojo/domReady!"], function(dom) {
      var node = dom.byId("message");
      node.innerHTML = "Welcome to Dojo Toolkit!";
    });
  </script>
  <div id="message"></div>
</body>
</html>
```

---

## 📚 Learn More

- [Official Documentation](https://dojotoolkit.org/documentation/)
- [Tutorials](https://dojotoolkit.org/documentation/tutorials/)
- [API Reference](https://dojotoolkit.org/api/)


---


---

<p align="right">(<a href="#topage">back to top</a>)</p>
<br/>
<br/>
