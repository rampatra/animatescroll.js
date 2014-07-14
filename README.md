AnimateScroll
=============

A Simple jQuery Plugin for Animating the Scroll

Demo can be seen at http://plugins.compzets.com/animatescroll


What is it exactly?
-------------------

AnimateScroll is a jQuery plugin which enables you to scroll to any part of the page in style by just calling the animatescroll() function with the Id or Classname of the element where you want to scroll to.

It gives power to the user with its various options to customize the style of scrolling, scroll speed and many more. Supports more than 30 unique Scrolling Styles.


Options
-------

AnimateScroll has 6 options:

    easing
    scrollSpeed
    padding

easing : This option defines the scrolling style. The various easing effects supported can be seen at www.easings.net (Accepts string only)

scrollSpeed : Controls the scrolling speed, higher is the number slower is the scroll speed (Accepts only number)

padding : Adjusts little ups and downs in scrolling. Suppose a small amount of padding is applied to a particular element due to which the scroll didn't end at the right position, so this option helps you to rectify (Accepts numbers only, can be negative)

Added in v1.0.5

4th option:

    element

element : The element in which you want this plugin to work. Default is "body". (Accepts any jQuery/CSS selector)

Added in v1.0.7

2 more options:

    onScrollStart
    onScrollEnd

onScrollStart : A function to be called before scrolling starts

onScrollEnd : A function to be called after the scrolling ends completely with animations

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



Usage
------

You need two things for this plugin to work, one is "jQuery library" and the other "animatescroll.js" file.

Just include the "animatescroll.js" file after the "jQuery library" as shown in the code snippet below and you're done.

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
NOTE: There are two js files, if you do not want the various easing effects, you can use the animatescroll.noeasing.js 

About Me
--------

My name is Ram Swaroop. I am a Programmer as well as a Designer. I am the Founder of Compzets.com, have developed various other online applications and mobile apps.

This is my first jQuery Plugin and I hope you all like it. You are free to make more improvements to the code and can do the same @github.

If my plugin helped you or unlikely for any issues tweet me @ramswarooppatra, will be happy to hear from you.
