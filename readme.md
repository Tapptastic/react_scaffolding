# RCAF

**RCAF** is a React Scaggolding tool.

**RCAF** works on the basis of **Components, Pages & Hooks**. However this does allow for the creation of your own custom **Rules/Templates**, you can add these within the **rsconfig.json** file.

*Please note that the forumla for executing this command is:*
```rcaf -<config_property> <name>```

**Examples:**

```rcaf -component My-Component```
```rcaf -page My-Page```
```rcaf -customProp My-Custom-Prop```

## Components

The definition of a **Component** within **RCAF** is a single React Component. You can create one like so

```javascript
 rcaf -component My-Component
 ```

 **OR**


```javascript
 rcaf -component "My-Component"
 ```

 **RCAF** will then check to see if you have a rsconfig.json, if this doesn't exist then a default profile will be created for you like so:

 ```json
 {
     "directory": "./src/components", // Default path for Folders/Files to be created within,
     "hook": {
         "files": [
             {"name": "index.js", "imports": []}
             {"name": "hooks.js", "imports": []}
         ]
     },
     "component": {
         "files": [
             {"name": "index.js", "imports": ["react", "./styles.module.scss"]}
             {"name": "index.js", "imports": []}
         ]
     },
     "customProp": { // this just an alias to refer to within the CLI
        "files": [
            {"name": "index.js", "imports": []}
        ]
     }
 }
```

As we can see under the *Component*, we can see taht it will create two files *index.js & styles.module.scss*, index.js will import **React & Styles**. Of course this can be extended to import any defaults that you find you use. You can also use any file extension as well.

Once you have run the above command the output will be:

*Folder structure:*

- SRC
  - Components
    - My-Component
      - index.js
      - styles.module.scss

index.js will then be created like so:

```javascript
    import React from 'react';
    import Styles from './styles.module.scss';

    const MyComponent = ({children}) => <div>{children}</div>

    export default MyComponent;
```

## Pages

The definition of a **Page** within **RCAF** is a collection of **Components**. However

So you might have something like pages/Home, then within pages/Home/index.js you would have:

```javascript
import React from 'react';
import MyComponent from './My-Component';
import AnotherComponent from './Another-Component';

const Home = ({children}) => {
    return (
        <>
            <MyComponent />
            <AnotherComponent />
    )
}

export default Home;
```

We can create this by running:

```javascript
rcaf -page "Home"
```