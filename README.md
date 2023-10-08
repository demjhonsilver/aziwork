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
- [React](#react)
- [Angular](#angular)


## Description

Aziwork is a simple HTTP client library that serves as a wrapper for making HTTP requests based on [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). It simplifies API interactions and web service requests with support for GET, POST, PUT, DELETE, and PATCH methods. It works for front-end and Node.js development, reduces boilerplate code, and offers built-in error handling. This makes it easy to make HTTP requests and improves code readability.

## Release-notes
Version 1.0.0

-------

Major Changes:

- Supports Authentication token
- Added sample code for auth token from headers in React & Angular.

Minor Changes:

- Supports Headers Content-type

Patch changes:

- Added sample code for Headers Content-type data in Angular.


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
`aziwork` or `Aziwork` | making HTTP requests | 
`sunder` | takes a JSON string as input and parses it into a JavaScript object | 


## Installation

To install the Aziwork, you can use the following npm command:

```bash
npm install aziwork
```


## Example


## React
React component:


# Auth Token sample code:

```js
import { useEffect, useState } from 'react';
import Aziwork, { sunder } from 'aziwork';

export const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Adjust the URL as needed

    // Your authentication token
    const authToken = 'your-auth-token'; // Replace with your actual authentication token

    // Log the DELETE data before sending the request
    console.log('DELETE Request');

    const deleteData = async () => {
      try {
        const response = await Aziwork.delete(apiUrl, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${authToken}` // Include the token in the headers
          },
        });
        setData(sunder(response));

        // Log the response data in the console
        console.log('Response Data:', JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    };

    deleteData();
  }, []);

  return (
    <>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          <p>Body: {data.body}</p>
          <p>User ID: {data.userId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
```


# With Headers Content Type

You can see the data via console.log mode in your browser.

```js
import { useEffect, useState } from 'react';
import Aziwork, { sunder } from 'aziwork';

export const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // Your data object
    const postData = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    // Log the PUT data before sending the request
    console.log('PUT Data:', postData);

    const putData = async () => {
      try {
        const response = await Aziwork.put(apiUrl, postData, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        setData(sunder(response));

        // Log the response data in the console
        console.log('Response Data:', JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    };

    putData();
  }, []);

  return (
    <>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          <p>Body: {data.body}</p>
          <p>User ID: {data.userId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
```



# More Data

```js
import { useEffect, useState } from 'react';
import Aziwork, { sunder } from 'aziwork';

export const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const fetchData = async () => {
      try {
        const response = await Aziwork.get(apiUrl);
        setData(sunder(response)); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
          <div>
          {data.map((post) => (
            <div key={post.id}>
              <h1>Title: {post.title}</h1>
              <p>Body: {post.body}</p>
            </div>
          ))}
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};


```


# One Data

```js
import { useEffect, useState } from 'react';
import Aziwork, { sunder } from 'aziwork';

export const ExampleComponent = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    const fetchData = async () => {
      try {
        const response = await Aziwork.get(apiUrl);
        setData(sunder(response));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      {data ? (
          <div>
            <h1>Title: {data.title}</h1>
            <p>Body: {data.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
      )}
    </>
  );
};
```
--------

## Angular

Angular component:


-------
# Auth Token sample code:


```ts
import { Component, OnInit } from '@angular/core';
import Aziwork, { sunder } from 'aziwork';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data: any;

  constructor() {}

  ngOnInit() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Adjust the URL as needed

    // Your authentication token
    const authToken = 'your-auth-token'; // Replace with your actual authentication token

    // Log the DELETE data before sending the request
    console.log('DELETE Request');

    const deleteData = async () => {
      try {
        // Create a Headers object and set the headers individually
        const headers = new Headers() as any; // Explicitly cast to any
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        headers.append('Authorization', `Bearer ${authToken}`); // Include the token in the headers

        const response = await Aziwork.delete(apiUrl, {
          headers: headers
        });
        this.data = sunder(response);

        // Log the response data in the console
        console.log('Response Data:', response);
      } catch (error) {
        console.error(error);
      }
    };

    deleteData();
  }
}
```

```html
<div *ngIf="data">
  <h1>Title: {{ data.title }}</h1>
  <p>Body: {{ data.body }}</p>
  <p>User ID: {{ data.userId }}</p>
</div>
<p *ngIf="!data">Loading...</p>
```



----------
# With Headers Content Type

You can see the data via console.log mode in your browser.
```ts
import { Component, OnInit } from '@angular/core';
import Aziwork, { sunder } from 'aziwork';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data: any;

  constructor() {}

  async ngOnInit() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // Your data object
    const postData = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    // Log the PUT data before sending the request
    console.log('PUT Data:', postData);

    // Define the headers as a formatted string
    const headers = 'Content-Type: application/json; charset=UTF-8';

    try {
      const response = await Aziwork.put(apiUrl, postData, {
        headers: headers // Pass headers as a string
      });
      this.data = sunder(response);

      // Log the response data in the console
      console.log('Response Data:', response);
    } catch (error) {
      console.error(error);
    }
  }
}
```
```html
<div *ngIf="data; else loading">
  <h1>Title: {{ data.title }}</h1>
  <p>Body: {{ data.body }}</p>
  <p>User ID: {{ data.userId }}</p>
</div>

<ng-template #loading>
  <p>Loading...</p>
</ng-template>
```



-------------

# More Data

```ts
import { Component, OnInit } from '@angular/core';
import Aziwork, { sunder } from 'aziwork';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data: any[] = [];

  async ngOnInit() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await Aziwork.get(apiUrl);
      this.data = sunder(response);
    } catch (error) {
      console.error(error);
    }
  }
}
```
```html
<div *ngIf="data.length > 0; else loading">
  <div *ngFor="let post of data">
    <h1>Title: {{ post.title }}</h1>
    <p>Body: {{ post.body }}</p>
  </div>
</div>

<ng-template #loading>
  <p>Loading...</p>
</ng-template>
```






----------
# One Data

```ts
import { Component, OnInit } from '@angular/core';
import Aziwork, { sunder } from 'aziwork';

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
      const response = await Aziwork.get(apiUrl);
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
