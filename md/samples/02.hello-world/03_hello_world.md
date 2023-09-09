<a name="topage"></a>

# 03_hello_world


### [ sample 1: hello world ]

```sh
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Tutorial: Hello Dojo!</title>
</head>
<body>
    <h1 id="greeting">Hello</h1>
    <!-- load Dojo -->
    <script src="https://koskasmail.github.io/dojotoolkit/"
            data-dojo-config="async: true"></script>

    <script>
        require([
            'dojo/dom',
            'dojo/dom-construct'
        ], function (dom, domConstruct) {
            var greetingNode = dom.byId('greeting');
            domConstruct.place('<em> Dojo!</em>', greetingNode);
        });
    </script>
</body>
</html>

```

### [ output result ]

<body>
<iframe src="https://koskasmail.github.io/dojotoolkit/" width="800" height="600" frameborder="0"></iframe>
</body>

-----

### [ Thoughts ]

  1. Thoughts.


<p align="right">(<a href="#topage">back to top</a>)</p>
<br/>
<br/>
