AnimateScroll
=============

A jQuery Plugin for animating scrolling.

Demo can be seen at http://plugins.compzets.com/animatescroll


What is it exactly?
-------------------

AnimateScroll is a jQuery plugin which enables you to scroll to any part of the page in style by just calling the `animatescroll()` function with the `id` or `classname` of the element where you want to scroll to.

It gives power to the user with its various options to customize the style of scrolling, scroll speed and many more. Supports more than 30 unique Scrolling Styles.

Usage
------

You need two things for this plugin to work, one is "jQuery library" and the other `animatescroll.js` file.

Just include the `animatescroll.js` file after the "jQuery library" as shown in the code snippet below and you're done.

NOTE: The only dependency for this plugin to work is jQuery library.

```html
<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script src="animatescroll.js">
    </head>
    <body>
        <div id="section-1">This is the element where you want to scroll to<div>
        
        /*
         * You may call the function like this
         * (but better attach an event listener)
         */
        <a onclick="$('[jquery selector]').animatescroll([options]);">Go to Element</a>
    </body>
</html>
```

**You can either download the files or install from Bower (package manager):**
```javascript
bower install animatescroll
```
NOTE: There are two js files, if you do not want the various easing effects, you can use the `animatescroll.noeasing.js`

Options
-------

AnimateScroll has 6 options:

1. [easing](#easing)
2. [scrollSpeed](#scrollSpeed)
3. [padding](#padding)
4. [element](#element)
5. [onScrollStart](#onScrollStart)
6. [onScrollEnd](#onScrollEnd)

#### easing (*default*: ```easing```)

This option defines the scrolling style. The various easing effects supported can be seen at www.easings.net (Accepts string only)

#### scrollSpeed (*default*: ```400```)

Controls the scrolling speed, higher is the number slower is the scroll speed (Accepts only number)

#### padding (*default*: ```0```)

Adjusts little ups and downs in scrolling. Suppose a small amount of padding is applied to a particular element due to which the scroll didn't end at the right position, so this option helps you to rectify (Accepts numbers only, can be negative)

#### element (*default*: ```html, body```)

**Added in v1.0.5**.
The element in which you want this plugin to work. Default is "body". (Accepts any jQuery/CSS selector)

#### onScrollStart

**Added in v1.0.7**.
A function to be called before scrolling starts

#### onScrollEnd

**Added in v1.0.7**.
A function to be called after the scrolling ends completely with animations

To add an option:

```javascript
$('[jquery selector]').animatescroll({
  <optionName> : <optionValue>
});
```

Easing Effects
--------------

This plugin supports more than 30 different styles of scrolling. The easing option lets you choose a particular style of scrolling according to your choice.

The different easing effects are:

<pre>
<code>swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart,
easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic,
easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce</code>
</pre>

About
-----

My name is Ram Patra. I am an app developer and a tech aficionado from India. I make apps/plugins for mobile, web, and computer. Have a look at some of them at [rampatra.com](http://www.rampatra.com).

This is my first jQuery Plugin and I hope you all like it. You are free to make more improvements to the code by sending a pull-request.

If my plugin helped you or unlikely for any issues tweet me [@rampatra_](https://twitter.com/rampatra_), will be happy to hear from you.

Sponsors
--------

Proudly sponsored by these awesome apps. Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://x.com/rampatra_)]

<table>
    <tr>
        <td>
            <a href="https://presentifyapp.com/" target="_blank"><img src="https://presentifyapp.com/assets/img/presentify/app-icon-512.png" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://facescreenapp.com/" target="_blank"><img src="https://github.com/user-attachments/assets/b251b413-ccc4-48f1-a316-c2c2a71f959e" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://todobarapp.com/" target="_blank"><img src="https://todobarapp.com/assets/img/todobar/app-icon-512.png" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://simplefillapp.com/" target="_blank"><img src="https://github.com/user-attachments/assets/6c575d9c-b65b-4ce7-a468-30f74cfedf18" width="150" height="150"></a>
        </td>
    </tr>
</table>

---

_P.S. For any queries or concerns, you can reach out to me on [Twitter](https://twitter.com/rampatra_). I'll try my best to help 🙏._
