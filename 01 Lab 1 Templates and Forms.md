
# Templating

Up to now you have seen two ways the server can send response data to the client web browser:

1. Sending the contents of an HTML file. This is great for complex web pages but you can't include dynamic data.
2. Using the `res.write()`, `res.send()` and `res.end()` functions to send dynamic data. The limitation is that its quite clunky and would be completely inpractical for complex web pages.

In this section you will be introduced to a third approach which combines the best features of each the other two approaches, the use of a **templating view engine**.

There are a number of _templating view engines_ that are compatible with Express however in this worksheet we will be using one of the more popular ones, called [Handlebars](https://www.npmjs.com/package/handlebars). This needs to be imported into your script and set the default _layout page_.

Locate the files in the `06_templating/01_date/` directory, install the dependencies and start the server.

## 1 Basic Templating

Access the base route `/`, notice that you are seeing a basic html page. Open the script:

1. We start by importing the Handlebars package and create a default layout called main. This defines the `main.handlebars` page as the one to use as the default website layout.
	1. Open the `views/layouts/main.handlebars` file.
	2. This template page will be used by _all_ the pages in the website.
	3. Notice there is a `{{{body}}}` placeholder, this defines where the different page templates will be inserted.
2. In the base route `/` we call the `res.render()` function and pass it the name of the template we want to use:
	1. The parameter is a string, `home`.
	2. This refers to the template `views/home.handlebars`
3. The contents of the `home.handebars` template is inserted into the layout file replacing the `{{{body}}}` placeholder.

### 1.1 Test Your Understanding

1. Create a `/hello` route that uses a template file called `hello.handlebars` to display a heading with the text `Hello World!`
2. Use the knowledge from the css lab to add and link an external stylesheet to display the heading in red.
	1. Define a directory for static files.
	2. Create a `style.css` file in this directory that sets the heading red.
	3. Add a link to the _main layout_ file to import this stylesheet.

## 2 Inserting Data into a Template

So far we have not done anything particularly useful except separate out the _layout_ from the content. In this section you will learn how to insert data directly into a template before it is rendered to the browser.

In the previous example you have seen how to insert single values into a web page but how to we display lists of data? A list is stored in an **array** in JavaScript so the first task is to ensure your data is in an array. If you recall lab 3 you will remember that the sqlite `db.all()` function returns an `Array`.

Restart the server and access the `/date` route. Notice that it displays the current date in the browser. Open the `index.js` file and locate the route.

1. We start by creating a new `Date` object.
2. We use its built-in functions to create a string containing the current date.
3. Next we create a JavaScript object that contains all the data we want to send to the template:
	1. In this example we have a `title` property containing the string `My First Template`.
	2. We have a seccond property called `today` that contains the date string we have just built.
4. Finally we call `res.render()` but this time we pass the data as the second parameter.

To understand what happens to this data we need to understand the _template_. Locate the `views/date.handlebars` template file:

1. Notice that there are two _placeholders_, shown as `{{xxx}}`.
	1. Each placeholder has a name.
	2. The names need to match the properties in the data we are sending to the template.
2. Each placeholder is replaced by the data stored against the object property:
	1. The `{{title}}` placeholder is replaced by the string `My First Template`.
	2. The `{{date}}` placeholder is replaced with the date string we built in the script.

### 2.1 Test Your Understanding

1. Use suitable properties of the [`Date` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to display the date in a variety of different formats in a series of paragraph elements:
	1. dd/mm/yyyy
	2. a Unix timestamp (number of seconds since 1st Jan 1970)
2. Add a table to display some information about the client computer (using the `req.connection` object).
3. Extend the table to display the header information (using the `req.headers` object).

## 3 Repeating Data

So far we have inserted data from object properties into our templates. This works find for single records however often we will have multiple records to display such as the results of a database query. In this situation we will need to repeat a block of html code such as a list item or table row.

Restart the server and view the `/food` route. Notice that it displays a numbered list showing four food items. Locate the route in your script.

1. We start by creating an array. Each imdex contains an object with two properties, name and qty.
2. We pass the array to `res.render()` as a JavaScript object using the myFood property.

Open the `food.handlebars` template:

1. Notice that there is an ordered list element.
2. Inside this there is a special **helper**, `{{#each myFood}}`
	1. The helper also has a closing block `{{/each}}`
	2. The `myFood` property is passed to the opening block.
3. This block loops through the array stored in the `myFood` property.
4. The `this` object holds the object for the current index.
	1. So `this.item` returns the `item` property (the name of the food item).

This allows the handlebars template view engine to handle repeated data.

### 3.1 Test Your Understanding

1. Modify the template to display the shopping items in a html table instead of an ordered list.
2. Add a second column to display the quantities of each item.
3. Add a table header to display column headings.
4. Without adding any more html, colour every other row of the table in light grey.

## 4 Putting it Together

You have covered a lot of topics over the first few weeks of the module. Before you continue, complete the challenges listed below. These will help you revise all the content you have covered.

The `02_bookshop/` directory contains a 2-page template-driven dynamic website based on the data you used in the **Databases** lab. Install the dependencies, start the server and access the base route `/` and the `/details/1` route then study the script `index.js`.

Now try to complete the following challenges:

1. Add a route called `/about` that displays information about the fictional bookshop.
2. Add a footer that appears on all pages using the correct html5 element.
3. Convert the list of books into a table.
4. Add a column to display the ISBN number
5. Add a hyperlink to the book titles to jump to the correct book details page.
6. Add a column that displays links to take you to the [Amazon product page](https://www.amazon.co.uk/gp/search/ref=sr_adv_b/?search-alias=stripbooks&field-isbn=9781491943120) (hint: use the ISBN number and study this link carefully!).
7. Create and link a stylesheet to improve the page appearance:
	1. Style the header.
	2. Style the footer.
	3. Make the table easier to read.
8. Add all the database fields to the product details page.
9. Modify the stylesheet to improve the appearance.

# Forms

In this final part of the worksheet you will be building forms that can send data to a web server.

### 5.1 POST vs GET

Lets start by looking at how forms send data to the server. This can be done using the HTTP `GET` method or using the `POST` method. Lets try out both so we can understand the differences.

#### 5.1.1 Submitting Data Using POST

Make sure the web server is running and access the `/postform` route and open the corresponding html file.

1. Complete the form with your name.
2. Click on the the **Submit** button.
3. Examine the URL carefully:
    1. Notice that it points to the base route `/` with no additional data in the URL.
4. Open the _Chrome developer tools_ and look at the _http request_:
    1. Notice that the request uses the `POST` method. This corresponds to the `method` attribute in the `<form>` element.
    2. The request header includes a `Content-Type` header which contains the value `application/x-www-form-urlencoded`.
5. There is a _request body_ which contains the form data:
    1. This uses the `application/x-www-form-urlencoded` encoding.
    2. Notice that it contains 2 query parameters in a querystring.
    3. The names of the query parameters correspond to the values in the `name` attributes in the `<input>` elements.

#### 5.1.2 Submitting Data Using GET

Make sure the web server us running and access the `/getform` route and open the corresponding html file.

1. Complete the form with your name.
2. Click on the the **Submit** button.
3. Examine the URL carefully:
    1. Notice that it contains 2 query parameters in a querystring.
    2. The names of the query parameters correspond to the values in the `name` attributes in the `<input>` elements.
4. Open the _Chrome developer tools_ and look at the _http request_:
    1. Notice that the request uses the `GET` method. This corresponds to the `method` attribute in the `<form>` element.
    2. The URL contains the data (remember there is only a request _body_ when the `POST` method is used.

### 5.2 Form Controls

In the previous section the form used the `<input>` element which displayed simple text boxes where you could enter anything. In this section you are going to learn about how to use a wide range of different controls to capture user input.

#### 5.2.1 Input Elements

HTML defines a number of input types that can be used in forms. The commonly used ones are:

- Plain text: `<input type="text">`
- Password fields: `<input type="password">`
- Email addresses: `<input type="email">`

The above are supported by most browsers. There are some new input types also:

- URL addresses: `<input type="url">`
- Numeric data: `<input type="number">`
- Date pickers: `<input type="date">`

The main reason for introducing these new input types is for mobile devices with limited screen sizes where special keyboards/input methods can be used.  But note that not every browser supports the new types.

> Input types, not supported by old web browsers, will behave as input type text. See [here](http://www.w3schools.com/html/html_form_input_types.asp).

![android picker](http://developer.android.com/images/ui/pickers.png)

### Hidden parameters

Sometimes we need a way to submit some additional parameter to the server. This can be done by using a `hidden` input parameter.
A hidden parameter has no onscreen appearance, but it will be sent to the server.

```html
<form>
......
    <input type="hidden" name="org" value="Acme" />
    ....
</form>
```

#### 5.2.2 Lists

The problem with the `<input>` elements is that it forces users to input _free text_ which means the data will require a lot of validation. For example if asked to input a city users might enter `Coventry`, `coventry`, `Cov`, `Coventry City` and any number of variations. Where possible you should require users to choose from a predefined list.

There are two ways to define a list, radio/checkboxes and dropdown lists. Load the `/lists` route in your browser to see these in use. Make sure the web server is running, access the `/lists` route and open the html file that is being displayed.

Whilst not strictly a list, **checkboxes** can be used where the user can pick one or more options from a short list.

```html
<input type="checkbox" name="foo" value="1">Option 1<br/>
<input type="checkbox" name="bar" value="2">Option 2<br/>
```

Notice:

1. It uses the standard `<input>` element.
2. The `type` attribute has a value of `checkbox`.
3. Each has a _different_ value for their `name` attribute.
4. The `value` atribute contains the value that is passed to the server.

Radio buttons are to allow the user to make a selection from a small number of options:

```html
<input type="radio" name="foobar" value="1">Option 1<br/>
<input type="radio" name="foobar" value="2">Option 2<br/>
```

Notice:

1. It uses the standard `<input>` element.
2. The `type` attribute has a value of `radio`.
3. All grouped options must have the same value for their `name` attribute.
4. The `value` atribute is what is passed to the server.

The `select` element defines a drop-down list, and the `option` element is used to define a list item.

```html
<select name="example">
  <option value="notknown">Not selected</option>
  <option value="item1">Item 1</option>
</select>
```

Every `option` element should have a unique value, just like in checkboxes and radio buttons.

#### 5.2.3 Test Your Understanding

1. Create a new route in the `index.js` file called `/register`.
2. Create an html file called `registerform.html`.
3. Create an html form that `POST`s its data to `/`.
4. Create a registration form using all of the different form controls you have seen.
5. Make sure you understand the data displayed when the form is posted.
6. Change the form so it makes a `GET` request.

### 5.3 Labelling Forms

`<label>` elements are used to connect texts and controls that are used together in forms. For example radio buttons and check boxes often come with preceding texts that describe the choice. However if the user clicks the text nothing happens. That's because the browser doesn't know the connection between the text and the neighboring control. They must be wrapped up with label element.

```html
<form action="">
<input type="checkbox" name="bike" value="Bike">I have a bike<br>
<input type="checkbox" name="car" value="Car">I have a car
</form>
```

You have to click on the box. But if you have

```html
<form action="">
<label><input type="checkbox" name="bike" value="Bike">I have a bike</label><br>
<label><input type="checkbox" name="car" value="Car">I have a car </label>
</form>
```

It is enough to click on text too.

Note the above can also be written as the following, which is also valid but needs more typing

```html
<form action="">
<input type="checkbox" name="bike" id="bike" value="Bike"><label for="bike">I have a bike</label><br>
<input type="checkbox" name="car" id="car" value="Car"><label for="car">I have a car </label>
</form>
```

> Read discussions on [StackOverFlow](http://stackoverflow.com/questions/774054/should-i-put-input-tag-inside-label-tag) for different ways of associating labels and inputs.

### Use grouping and hints

In many user interfaces, you can see how different elements on the screen are grouped together in order to make the input easier for the user. In HTML, you can use `fieldset` element for this.

```html
<form action="">
<fieldset>
<legend>Credit Card</legend>
<label><input type="radio" name="card" value="Visa">Visa</label><br>
<label><input type="radio" name="card" value="MCard">MasterCard </label>
</fieldset>
</form>
```

What you get is

![Example of a fieldset and legend](exercises/.images/fieldset.png)

In user interfaces it also a common practice to give hints on the kind of data is expected. In HTML, this can be achieved by `value` or `placeholder` attribute on the controls. The `placeholder` attribute's text disappears once the control is clicked in or gains focus and the `value` attribute's text stays in place when a control has focus unless a user manually deletes it.

![Example of a value and placeholder](exercises/.images/input_hint.png)

#### 5.3.1 Test Your Understanding

Make sure the web server is running and access the `/semantic` route. Open the html file containing the form that is being diplayed.

1. At the moment, you have to click exactly the right spot on your checkboxes etc. Change this by using labels.
2. Rearrange your form with legends and fieldsets in order to make it easier for the user to understand.
3. Give input hints to the user whenever possible.

### 5.4 Form Validation

Form validation is traditionally done using JavaScript. But HTML5 introduces some new ways of doing it, which makes validation a lot easier.

#### 5.4.1 'required' attribute

Now return to the very first example in this lab

```html
<form action="http://www.google.com/search">
  <div>
    Let's search Google:
    <input name="q">
    <input type="submit">
  </div>
</form>
```

If we add a `required` attribute to the query input, it will become `<input required name="q">`. In this case, the query field is required. In other words, if we don't type in anything in this field, we'll have an error message when trying to click submit.

![Example of an error message](exercises/.images/error_html5.png).

Behind the scene, the browser tries to verify user's input. There are some other input attributes that can serve for validation purposes. For example, `min` and `max` attributes for numerical input types such as `number` or `month`; `size` and `maxlength` for limiting the number of characters entered.

#### 5.4.2 'pattern' attribute based on regular expression

In addition to using different input types, we can also use patterns a.k.a.regular expressions. Using patterns, we can validate user inputs even more precisely.

Pattern is an encoded sequence of characters that define a pattern of text characters. Remember that client-side validation is not reliable as the only means of validation, it is useful to make the user interface more pleasant.

For example, a Finnish social security number (similar to UK National Insurance number) is often 999999-999X (for those who are born in the 20th century). The first 6 digits are the birth date: day, month and year's last two numbers. After "-" there are 3 digits and the last character can be either digit or letter from A to Y. If we want to make a pattern of this, it would be

```html
<input type="text" pattern="\d{6}\-\d{3}([0-9A-Y])" ...>
```

\d means a digit, \\- means the "-", [chars] means a set of characters.

### 5.4.3 Test your understanding

Open file **form-skel.html**. Validate the user's data in Student id, email address and score by using patterns.
