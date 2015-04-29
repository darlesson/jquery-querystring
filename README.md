# Introduction #

This code was created to make easier to get and to treat query strings. It may return the value of one query string, a collection of query strings, the length, select query string by its index and turn off the case sensitivity. Visit the [official website](https://github.com/darlesson/jquery-querystring) for more details.


## Installing ##

Download the files and add the following to your website

```
    // If you don't have the jQuery file already informed, insert the code bellow
    <script type="text/javascript" src="javascript/jquery-1.4.2.min.js"></script>

    // Insert the source file
    <script type="text/javascript" src="source/querystring-1.1.1.js"></script>
```

## Usage ##

If not informed, $.QueryString will get the browser's address bar URL. To inform a different one, check the **options** parameters.

```
    // Return null if there is no query string
    $.QueryString();

    // Return the length of query strings
    $.QueryString().size;

    // Return null is the query string doesn't exist or the value of the
    // query string if it exists
    $.QueryString( //string );

    // Get the length of query strings with the same name
    $.QueryString( //string ).length;

    // Return que value of a query string modifying the URL, the choosing
    // its index and turning on or off the case sensitivity
    $.QueryString( //string, { // options
    	href : // URL string,
		index : // number,
		isCaseSensitive : boolean
    });

    // Get the value of a query string as an object
    $.QueryString().objectName;
```

The options paremeters and its values are

**href**
> _(string)(optional)_ URL with or without query strings where the query string wanted will be searched.
> Default: window.location

**index**
> _(number)(optional)_ It returns the value of a query string in a collection of query strings with same name.
> Default: null

**isCaseSensitive**
> _(boolean)(optional)_ Decides if the query string searched will have the case sensitivity considered.
> Default: true

## License
Copyright (c) 2015 Darlesson Oliveira. Licensed under the MIT license.
