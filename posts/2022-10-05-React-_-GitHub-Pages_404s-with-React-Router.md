# React + GitHub Pages - 404s with React Router

Deploying your React app to GitHub pages is a great way to learn about and share them.
You can do many things, for example creating mini portfolio sites such as this one!
It's a process that is already well documented and you can find an example piece of
documentation in the _References_.

A common library to use with React apps is React Router which enables client side routing.
You can read more about React Router [here](https://reactrouter.com/en/main/start/overview)
but in a nutshell it allows you to render different components at certain URL paths, just
like this post. When you run your React app and start navigating to these paths by clicking
on links, buttons etc. you'll see that the path in the URL changes and the component you've
chosen to render at that path is rendered.

If, however, you refresh the page or visit a path directly in your browser, you may notice
that you get a _404_ or a _blank page_.

_Note: Depending on how you've configured your development server, you might only get these
404s or blank pages in production._

## Why do I get 404s or blank pages?

React Router enables client side routing which allows the path in the URL to change without
requesting a page for that path from the server. The React app is then responsible for the
content rendered at that path.

This only works when you navigate to these paths once the React app is already loaded, which
only loads when you visit the homepage of your application. Without it loaded, client side
routing won't be enabled and it cannot intercept changes to the path.

When you refresh a page or visit a path directly in your browser, the path is loaded without
client side routing, so a request is made for a page at that path from the server.

With GitHub Pages, when no page exists for a path, you'll receive either a _404_ page or a
_blank page_.

## Overcoming the 404s and blank pages

A few solutions are available to us which I came across on [this](https://info340.github.io/client-side-routing.html#react-router-and-hosting)
page about client side routing.

One solution is to deploy our React app to a system that allows us to serve our `index.html`,
our homepage, for any path. This would be the cleanest option as it doesn't require making changes
to our React app, however we can't then say we've successfully deployed to GitHub Pages!

Another solution is to use a `HashRouter` instead of a `BrowserRouter` from React Router. With a
`HashRouter` our homepage is requested for every path which solves our problem. The downside
however is that the `HashRouter` modifies all paths by injecting a `#` into the beginning.

My preferred solution is to set up redirects in a custom 404 page on GitHub Pages and in our
homepage. This doesn't modify our paths, nor does it require changing where we deploy our React
app, and it is a purely JavaScript-based solution too.

### Redirects in a custom 404 page

How this works is when we get a 404 or a blank page, GitHub Pages can be configured to use a custom
404 page. In this custom 404 page we will add a script element that redirects to our homepage, and the
path that failed to load will be added as a query parameter to the redirect URL. We then also need to
add a script element to our homepage which reads this query parameter and sets the current path to the
value we read.

That's all there is to it! Now let's take a look at how to add the custom 404 page and the script elements
we need.

A custom 404 page can be added to GitHub pages very easily - we just add a `404.html` to our output folder,
which is where our `index.html` homepage is located, and we are done!

Next we need a script element in this custom 404 page that redirects to the homepage but includes the current
path as a query parameter. An example script element that achieves this is:

```html
<script type="text/javascript">
  const l = window.location;
  const pathname = l.pathname.startsWith("/") ? l.pathname.substring(1) : l.pathname;
  window.location = `${l.protocol}//${l.host}/?${pathname}`;
</script>
```

Lastly we need a script element in our homepage that checks if the URL has this query parameter, and navigates
to it as a path if it exists. An example script element that achieves this is:

```html
<script type="text/javascript">
  const l = window.location;
  if (l.search && `${l.protocol}//${l.host}/${l.search}` === l.href) {
    const path = l.search.substring(1);
    window.history.replaceState(null, null, `${l.protocol}//${l.host}/${path}`);
  }
</script>
```

In our homepage we navigate using `history.replaceState()` which modifies the current URL while staying on
the currently loaded page, the homepage, which has client side routing enabled. Our path will now load and
render as desired!

_Note: These scripts assume you don't make use of query parameters in your React app. If you do you can modify
them to use a key e.g. `?redirect=${pathname}` instead of `?${pathname}`._

_Note: The script element in the homepage must appear before the element that your React app renders to, most
commonly the `<div>` given an id of `root`._

## Conclusion

Being able to deploy React apps to GitHub Pages is a great facility available to us, however
we may receive a _404_ page or a _blank page_ which can ruin the experience. There are solutions
available to us, of which my preferred is to set up redirects in a custom 404 page on GitHub Pages
which makes paths in our React app both refreshable and shareable, thus restoring the experience.

The source code for this website, which makes use of the solution described in this post, can be
found [here](https://github.com/DoodleBobBuffPants/DoodleBobBuffPants.github.io).

#### References

- [Example documentation for deploying a React app to GitHub Pages](https://github.com/gitname/react-gh-pages#deploying-a-react-app-to-github-pages)
- [React Router overview](https://reactrouter.com/en/main/start/overview)
- [React Router and Hosting](https://info340.github.io/client-side-routing.html#react-router-and-hosting)
