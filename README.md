[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Stopwatch

## Setup

Make sure that you are on the `master` branch of your `wdi-remote-r2d2` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

As you work through this assignment, you should make commits regularly
(e.g. after implementing a feature, or just before trying out something new).

## Instructions

For this assignment, you will be helping to complete an in-browser stopwatch
app! Its specified behavior is as follows:

```markdown
1.  When the 'START' button is clicked,
    a.  and the stopwatch is not currently running,
      i.    the stopwatch will begin running.
      ii.   the numbers of minutes, seconds, and (tens of) milliseconds elapsed
            will show up in the browser, updated once every 10 milliseconds.
    b.  and the stopwatch is already running,
      i. nothing will happen.
2. When the 'LAP' button is clicked,
    a.  and the stopwatch is running,
      i.    a new lap record will appear on the list of laps at the
            bottom of the page.
    b.  and the stopwatch is not running,
      i.   nothing will happen.
3.  When the 'STOP' button is clicked,
    a.  and the stopwatch is running,
      i.   the stopwatch will stop running.
      ii.  the numbers of minutes, seconds, and (tens of) milliseconds in the
           display will stop updating.
    b.  and the stopwatch is not running,
      i.   the time on the stopwatch will be reset.
      ii.  the display will reset to `00:00:00`.
      iii. the list of laps will be erased.
```

This is what's known as a _**feature spec**_ -- it describes the intended
behavior of the entire app, without any implementation-specific details.

The team who started working on this app have already developed, and started
working on, an intended implementation based around three separate objects,
`Stopwatch`, `Display`, and `EventHandlers`, each of which is responsible for
handling a different part of the application.

`Stopwatch` holds the actual logic of the stopwatch:
(a) maintaining a 'state' (i.e.  running vs not running),
(b) managing the 'time' on the stopwatch, and performing basic actions like
    starting and stopping the timer,
and
(c) keeping track of, and creating, 'lap' records.

`Display` is responsible for showing the data managed by `Stopwatch` in the
browser by changing the time display and the lap list.

`EventHandlers`, as the name suggests, holds all of the various event handlers
that the app will use. Rather than just writing anonymous functions for
handlers, the app's original designers wanted to give each of those handler
functions names so that they could (eventually) be tested programatically.

Detailed specifications for each of these components (also known as
_**unit specs**_) can be found in the [`spec`](./spec) directory. Unlike the
feature specs, these specifications are very detailed, and refer to actual
methods on the objects.

As you can see in the starter code, one method has been provided for you:
`advanceTheClock`. This method's job is to call itself every ten seconds,
as long as the stopwatch is running, and to call `updateTimeValues` each
time. _**Please do not alter this method.**_. Doing so could cause the
entire application to break.

Using these guidelines, create a working
application that meets the requirements given in the feature spec!

## Submitting Your Work

When you're ready, push the code to your fork on GitHub and create an issue with
a title in the format "YourGitHubUsername -- Week XX Day XX".
The issue body should have:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
