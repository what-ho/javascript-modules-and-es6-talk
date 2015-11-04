Production workflow options:

1)  No build step
    -------------
    module loader runs in-browser,
    loads modules dynamically (ES6, CommonJS, AMD ...),
    compiles ('transpiles') to Javascript ES5 if required
    System.import available at runtime

2)  Build step
    ----------
    Tranpiles at compile time down to 'system.register' module format
    Bundles files together
    No change to html page including modules compared to 1)
    System.import available at runtime

3)  Production build
    ----------------
    Tranpiles at compile time down to 'system.register' module format
    Bundles files together including mini-loader, 'system.register' handler
    Html now just refers to bundle.js alone
    System.import not available at runtime

npm packages:
SystemJS + Babel for 1) , 2)
SystemJSBuilder for 3)

Javascript Package Manager (jspm)

- Wraps all the above dependencies in one install
- helper to create SystemJs config files
- helper to install packages from github registry, npm registry, jspm registry
- 'jspm' command-line interface program
