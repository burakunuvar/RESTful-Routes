### RESTful Routes

#### STEP1 :

// initialize and build package.json

// install express and ejs

```
  $ npm init
  $ npm i express ejs body-parser mongoose

```

#### STEP 2:

// build app.js based on boilerplate

// build views folder for landing page; including index.ejs and newPost.ejs

// build partials folder for header.ejs(with bootstrap) and footer.ejs

// include necessary code at the beginning and the end of rendered pages :

```
  <%- include('partials/header') -%>
  <%- include('partials/footer'); -%>

```

----
#### IMPORTANT HINT !!!
##### FILE DIRECTORIES

  - `/` => go back to the root folder, then traverse forward/downward.

  - `./` => begin in the folder we are currently in (current working directory) and traverse forward/downward in the tree. ( same with using nth ? )

  - `../` => go up one directory, then begin the traverse.

----

----

#### IMPORTANT HINT !!!
##### A table of all 7 RESTful routes

|   | name              | path                     | HTTP Verb | Mongoose Method          | Purpose                                           |
|---|-------------------|--------------------------|-----------|--------------------------|---------------------------------------------------|
| 1 | INDEX              | /posts                  | GET       | collection.find          | list all posts                                  |
| 2 | NEW              | /posts/newPost          | GET       | N/A                      | display the form for new movie                    |
| 3 | CREATE            | /posts                  | POST      | collection.create()      | insert a new post                                |
| 4 | SHOW              | /posts/:id              | GET       | collection.findById()    | show details of selected post                    |
| 5 | EDIT              | /posts/:id/edit         | GET       | post.findById()          | Show edit form for selected post                      |
| 6 | UPDATE            | /posts/:id              | PUT       | post.findByIdAndUpdate() | Update particular post, then redirect             |
| 7 | DESTROY           | /posts/:id              | DELETE    | post.findByIdAndRemove() | Delete a particular post, then redirect somewhere |

----

#### STEP 3:

Building Routes for INDEX & NEW & CREATE

// create blogSchema and model based on mongoose syntax

// create initial routes using APIs : GET index, GET index/newPost ,POST index index

#### STEP 4:

Building Routes for SHOW

// create show.ejs and add related route to the app.js file (findById)


// `post.body.substring(0, 100)` limits max number of characters ( good for index page)

// for an alternative view of date use `shownPost.created.toDateString()` for the object :
`created: { type: Date,default: Date.now() },` for further improvement , use [momentjs](https://momentjs.com/)

#### STEP 5:

Building EDIT & UPDATE Routes

// edit route ; is a combination of new and show
   edit.ejs will be similar to new.ejs ; but include values instead of placeholders

// update route ; is similar to create , but requires override

// HTML forms do not support `PUT` and `DELETE` requests; for which you will need [method-override](https://www.npmjs.com/package/method-override)

#### STEP 6 :

Building DELETE Route by findByIdAndRemove

####  STEP 7 :

Deploy [express-Sanitizer](https://www.npmjs.com/package/express-sanitizer) to prevent cross site scripting :

----
#### IMPORTANT HINT !!!
##### express-sanitizer

  * Using `<%- shownPost.body %>` instead of `<%= shownPost.body %>` will enable you to render the body as html; rather than only text. But this might cause vulnerability on client side:

  `<script type="text/javascript"> alert ("I hacked You")</script> `

  * You might prevent this by express sanitizer
  * sanitizer is not needed for cases when `<%=` is used, it is highly recommended in use with  `<%-`

----
# RESTful-Routes
