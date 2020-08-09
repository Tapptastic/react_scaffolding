# TODO

- Add more debug messages so the user is aware of what is happening
- See about creating an more interactive console
- See about extending the Config futher
- Create a -help flag 

  - Allow things like non default imports (this may require a parser or a list/check of imports being used can see about a better stucture for this at a later date):

    ```javascript
        {
            name: useState,
            module: react
        },
        'react'

        import React, {useState} from 'react';
    ```

- Also want to create backwards compatibility, so if you have folders already created and you change the structure it will then update the already created files using something like react-scaffolding -update