<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/aziwork/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">


Aziwork
--------
[![npm version](https://img.shields.io/npm/v/aziwork.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/aziwork)
![Downloads](https://img.shields.io/npm/dt/aziwork.svg?&style=flat-square&label=Downloads&color=orange)
[![License](https://img.shields.io/npm/l/aziwork.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/aziwork/blob/main/LICENSE.md)
</div>

---------------------

## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
- [Features](#features)
- [Installation](#installation)
- [Example](#example)


## Description

Aziwork is a simple HTTP client library that serves as a wrapper for making HTTP requests based on [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). It simplifies API interactions and web service requests with support for GET, POST, PUT, DELETE, and PATCH methods. It works for front-end and Node.js development, reduces boilerplate code, and offers built-in error handling. This makes it easy to make HTTP requests and improves code readability.

## Release-notes
Version 0.0.1

-------

Patch changes:

- Adding async/await for syntax code.


## Features

- Supports TypeScript

Attributes | HTTP Request Methods |  Functionality
------ | -------- | -------- | 
`get` | GET | retrieve data |
`post` |  POST | submit data |
`put` |  PUT | new resource/replacer | 
`delete` | DELETE | remove data | 
`patch` | PATCH | updater |
`options` | OPTIONS | given options |
---------

Attributes  |  Functionality |
------ | -------- |
`aziwork` | making HTTP requests | 
`sunder` | takes a JSON string as input and parses it into a JavaScript object | 


## Installation

To install the Aziwork, you can use the following npm command:

```bash
npm install aziwork
```


## Example

This is sample for React component:

```js
import React, { useEffect, useState } from 'react';
import aziwork, { sunder } from 'aziwork';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    const fetchData = async () => {
      try {
        const response = await aziwork.get(apiUrl);
        setData(sunder(response));
      } catch (error) {
        console.error(error);
      }
    };

    // Call the async function
    fetchData();
  }, []); 

  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ExampleComponent;
```
--------
This is sample for Angular component:
----------
```ts
import { Component, OnInit } from '@angular/core';
import aziwork, { sunder } from 'aziwork';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data: any;

  async ngOnInit() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
      const response = await aziwork.get(apiUrl);
      this.data = sunder(response);
    } catch (error) {
      console.error(error);
    }
  }
}
```

example.component.html

```html
<div>
  <div *ngIf="data; else loadingTemplate">
    <h1>Title: {{ data.title }}</h1>
    <p>Body: {{ data.body }}</p>
  </div>
  <ng-template #loadingTemplate>
    <p>Loading...</p>
  </ng-template>
</div>
```









## License

[MIT](http://www.opensource.org/licenses/MIT)

----------------------------------------------------
## Author

Demjhon Silver
