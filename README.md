# vk mongo
Esta librería contiene la conexión a mongo y todos los modelos de los que hacen uso las aplicaciones de código vikingo.

## Set Up
### Install   
`npm i --save vkmongo`

### index.js   
```js
const db = require('vkmongo');
```

### Usar modelos   
```js
const { VK_User, VK_UserData } = require('vkmongo/models');
```
### Usar helpers  
```js 
const { mongooseTypes } = require('vkmongo/helpers/types');
```