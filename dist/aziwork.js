// aziwork.js

function aziwork() {
    // Initialize any common configuration here
  
    function get(url, headers = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
  
        // Set request headers
        for (const header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
  
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`HTTP GET request failed with status ${xhr.status}`));
          }
        };
  
        xhr.onerror = () => {
          reject(new Error('Network error'));
        };
  
        xhr.send();
      });
    }
  
  
    function post(url, data = {}, headers = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
    
        // Set request headers
        for (const header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
    
        // Convert the data object to a JSON string
        const jsonData = JSON.stringify(data);
    
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`HTTP POST request failed with status ${xhr.status}`));
          }
        };
    
        xhr.onerror = () => {
          reject(new Error('Network error'));
        };
    
        xhr.send(jsonData);
      });
    }
  
    
    function put(url, data = {}, headers = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', url);
    
        // Set request headers
        for (const header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
    
        // Convert the data object to a JSON string
        const jsonData = JSON.stringify(data);
    
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`HTTP PUT request failed with status ${xhr.status}`));
          }
        };
    
        xhr.onerror = () => {
          reject(new Error('Network error'));
        };
    
        xhr.send(jsonData);
      });
    }
    
    
    function del(url, headers = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', url);
    
        // Set request headers
        for (const header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
    
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`HTTP DELETE request failed with status ${xhr.status}`));
          }
        };
    
        xhr.onerror = () => {
          reject(new Error('Network error'));
        };
    
        xhr.send();
      });
    }
    
  
    function patch(url, data = {}, headers = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', url);
    
        // Set request headers
        for (const header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
    
        // Convert the data object to a JSON string
        const jsonData = JSON.stringify(data);
    
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`HTTP PATCH request failed with status ${xhr.status}`));
          }
        };
    
        xhr.onerror = () => {
          reject(new Error('Network error'));
        };
    
        xhr.send(jsonData);
      });
    }
    
  
    function options(url, headers = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('OPTIONS', url);
    
        // Set request headers
        for (const header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
    
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`HTTP OPTIONS request failed with status ${xhr.status}`));
          }
        };
    
        xhr.onerror = () => {
          reject(new Error('Network error'));
        };
    
        xhr.send();
      });
    }
    
  
    
    
  
  
  
    // Return an instance of aziwork
    return {
      get,
      post,
      put,
      delete: del,
      patch,
      options,
    };
  }
  
  
export default aziwork();

const sunder = (data) => {
    return JSON.parse(data);
}
export { sunder };