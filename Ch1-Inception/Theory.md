## 1. What is Emmet?
=  > `Emmet` is in-built function that write code you don't need to write it .Make HTML faster.
   - **boilerplate** : !+Enter
   - **class** : span.purple 
  ### _Syntax_ 
   ```sh
    <span class='purple'></span>
   ```

   - **id** : span#purple 
  ### _Syntax_ 
  ```sh
    <span id='purple'></span>
  ```

   - **class+id** : div.class-1.class-2#id-1 
   ### _Syntax_ 
   ```sh
       <div class='class-1 class-2' id='id-1'></span>
   ```

   - **button** : [button type = 'button'] 
  ### _Syntax_ 
   ```sh
      <button type='button'></button>
   ```

   - **child** : header>nav>ul>li*3 
  ### _Syntax_ 
   ```sh  
     <header>
      <nav>
       <ul>
        <li></li>
        <li></li>
        <li></li>
       </ul>
      </nav>
     </header>
   ```
    
 - **siblings** : header+main+footer 
  ### _Syntax_ 
   ```sh
     <header></header>
     <main></main>
     <footer></footer>
   ```


## 2. Difference b/w library and framework ?
=  > `Library` is collection of predefined functions and classes.It has less rules as compared to `Frameworks`.
   > eg: `React is library`as It doesn't provide ecosystem to develope an application where as `Angular does`.
        React use packages such as `JSX`,`Hooks`
   > `Framework` provide proper ecosystem that comes with `APIs`,`libraries`,`compilers`.


## 3. What is CDN ?
= > A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery
of Internet content from near server. The main use of a CDN is to deliver content through a network of servers in a secure and efficient
way.


## 4. Why React is called React ?
= > It is called `React` because it reacts to `data changes` and `update the user interface` accordingly.
 React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user
interfaces. 


## 5. What is crossorigin in script tag ?
= > The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.  
 ### CORS 
 It is mechanism which uses `HTTP header` to tell webapp can share resources with other webapp.
 Both webapps must have different origin.
### _How it works_
- Before actual api call `preflight`call is made and CORS will use `Additional HTTP header` to verify preflight call first.
- `Additional HTTP header`: `Access-Control-Allow-Origin: *` , `Access-Control-Allow-Method: POST / GET`.
- Webapp A sends a request for resource from server B, Server B responds with Access-Control-Allow-Origin: * header.
- If server responds back with Access-Control-Allow-Origin: * then all origins are allowed else only those specified by Access-Control


## 6. What is difference between React and ReactDOM ?
= > **React** is a JavaScript library for building User Interfaces. The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes.
  **ReactDOM** is used to render `react` on web.The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.
  **React Native** is used to build mobile apps using `react`
**React** not only used for building webapps but also mobileapps and so on. therefore it has seperate script for **ReactDOM**


## 7. What is difference between react.development.js and react.production.js files via CDN ?
= > In `Dev mode` we can use react dev tools , debugging env. attached with source code.
    In `Production mode` compression and minification of Js and other resources happen to reduce file size  of code.
    Production is faster as compared to development.


## 8. What is async and defer ?
= > Both are `boolean attributes` which are used along `script tag` to load it effeciently in web page.
- **Normal Scenario** : HTML parsing browser line by line and `script tag` encounter. `Browser` stop `parsing` at that point
                        and start fetching the script from network and runs it in browser. Once complete script execution,`parsing` starts again.
 ### _Syntax_ 
  ```sh
      <script src= " " >
  ```

- **Async** : HTML parsing browser along with parallel fetching of  `script` and as soon as `script` available in browser
              `parsing` stops and script execute.Once complete script execution,`parsing` starts again.
### _Syntax_ 
 ```sh
      <script async src= " " >
 ```

- **Defer** : HTML parsing browser along with parallel fetching of  `script` and as soon as `parsing` completes 
              `script executes` in browser.
### _Syntax_ 
 ```sh
      <script defer src= " " >
 ```
