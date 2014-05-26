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

<pre>
<code>
&lt;html&gt;
    &lt;head&gt;
        &lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;animatescroll.js&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id=&quot;section-1&quot;&gt;This is the element where you want to scroll to&lt;div&gt;
        
        // You may call the function like this
        &lt;a onclick=&quot;$('[id-or-class-of-element]').animatescroll();&quot;&gt;Go to Element&lt;/a&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>


NOTE: There are two js files, if you do not want the various easing effects, you can use the animatescroll.noeasing.js 

About Me
--------

My name is Ram Swaroop. I am a Programmer as well as a Designer. I am the Founder of Compzets.com, as well as various other online applications.

This is my first jQuery Plugin and I hope you all like it. You are free to make more improvements to the code and can do the same @github.

If my plugin helped you or unlikely for any issues tweet me @ramswarooppatra, will be happy to hear from you.
