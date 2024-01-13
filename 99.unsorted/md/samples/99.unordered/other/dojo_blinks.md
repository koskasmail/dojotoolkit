<a name="topage"></a>

# 01.xxxx.md


```sh
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blinking Message</title>
  <!-- Include the Dojo library -->
  <script src="https://ajax.googleapis.com/ajax/libs/dojo/1.16.3/dojo/dojo.js"></script>
</head>
<body>

<div id="blinkingMessage">Hello, I'm blinking!</div>

<script>
  require([
    'dojo/dom',
    'dojo/fx',
    'dojo/domReady!'
  ], function(dom, fx) {
    // Get the element to be blinked
    var blinkingMessage = dom.byId('blinkingMessage');

    // Define the blink animation
    var blinkAnimation = fx.combine([
      fx.fadeOut({ node: blinkingMessage, duration: 500 }),
      fx.fadeIn({ node: blinkingMessage, duration: 500 })
    ]);

    // Set the animation to repeat indefinitely
    blinkAnimation.play(0, true);

    // You can stop the blinking after a certain duration if needed
    // setTimeout(function() {
    //   blinkAnimation.stop();
    // }, 5000); // Stop blinking after 5 seconds (5000 milliseconds)
  });
</script>

</body>
</html>

```

```sh
xxxx
```


<p align="right">(<a href="#topage">back to top</a>)</p>
<br/>
<br/>
