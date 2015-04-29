/*!
 * jQuery QueryString v1.1.0 (Release version)
 *
 * http://www.darlesson.com/
 *
 * Copyright 2013, Darlesson Oliveira
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @requires jQuery v1.3.2 or above
 *
 * Reporting bugs, comments or suggestions: http://darlesson.com/contact/
 * Documentation and other jQuery plug-ins: http://darlesson.com/jquery/
 * Donations are welcome: http://darlesson.com/donate/
 */

// QueryString
(function ($, undefined) {

    "use strict";
    var Query = (function () {

        var defaults = {
            href: window.location.href,
            multipleAsArray: false,
            isCaseSensitive: false
        }

        var Query = function (param, options) {
            /// <summary>
            ///     Get the querystring information from a given URL or from
            ///     the current page URL.
            /// </summary>
            /// <param name="param" type="String">
            ///     The parameter to be searched for. If not informed, all
            ///     of them will be returned.
            /// </param>
            /// <param name="options" type="Object">
            ///     The options.
            /// </param>
            /// <returns type="Query">
            ///     The Query instance.
            /// </returns>

            if (!this instanceof Query)
                return new Query(param, options);

            this._options = $.extend({}, defaults, options || {});
            this.size = 0;
            this.parameters = {};

            this._init(param);
        };

        Query.prototype._init = function (param) {

            var options = this._options,
                multipleAsArray = options.multipleAsArray,
                href = options.href.toString(),
                queryString = (href.lastIndexOf("?") > -1) ? href.substring(href.lastIndexOf("?") + 1, href.length) : null,
                items = [],
                indexOfHash = queryString.lastIndexOf('#');

            // Remove hash from the return
            if (indexOfHash)
                queryString = queryString.substring(0, indexOfHash);

            if (queryString)
                items = queryString.split('&');

            if (items.length) {

                var i = -1,
                    item = '',
                    indexOfEqual = -1,
                    hasOwnProperty = false,
                    key,
                    value;
                while (i++ && i < items.length || i < items.length) {

                    item = items[i];

                    indexOfEqual = item.indexOf('=');

                    if (indexOfEqual > 0) {

                        key = item.substring(0, indexOfEqual);
                        value = item.substring(indexOfEqual + 1);
                        hasOwnProperty = this.parameters.hasOwnProperty(key);

                        if (multipleAsArray && hasOwnProperty) {

                            // Make the value an array
                            if (typeof this.parameters[key] === 'string')
                                this.parameters[key] = [this.parameters[key]];

                            this.parameters[key].push(value);

                        } else if (!hasOwnProperty)
                            this.parameters[key] = value;

                        this.size++;
                    }
                }

            }
        };

        return Query;

    })();

    $.QueryString = function (param, options) {
        /// <summary>
        ///     Get the querystring information from a given URL or from
        ///     the current page URL.
        /// </summary>
        /// <param name="param" type="String">
        ///     The parameter to be searched for. If not informed, all
        ///     of them will be returned.
        /// </param>
        /// <param name="options" type="Object">
        ///     The options.
        /// </param>
        /// <returns type="Query">
        ///     The Query instance.
        /// </returns>

        return function (param, options) {

            var defaults = {
                isCaseSensitive: false,
                index: null
            }, options = $.extend({}, defaults, options || {});

            var indexIsNumber = typeof options.index == 'number';

            if (indexIsNumber)
                options.multipleAsArray = true;

            var query = new Query(param, options);

            var isCaseSensitive = options.isCaseSensitive,
                param = (typeof param === 'string') ? (isCaseSensitive) ? param : param.toLowerCase() : null;

            if (typeof param === 'string') {

                if (indexIsNumber && query.parameters[param] && query.parameters[param].constructor == Array)
                    return query.parameters[param][options.index];

                return query.parameters[param];

            } else {

                if (query.parameters) {

                    var prop;
                    for (prop in query.parameters)
                        this[prop] = query.parameters[prop];
                }

                this['size'] = query.size;

                return this;
            }

        }.apply({}, [param, options]);

    };

    $.HashString = function (hashString, options) {

        var defaults = {
            href: window.location.href // href may be informed or the website URL will be considered
        }, settings = $.extend({}, defaults, options);

        var href = settings.href,
            returnValue;
        if (typeof hashString == "string" && hashString.indexOf("#") == 0) {
            if (hashString.lastIndexOf(hashString)) {
                returnValue = true;
            }
        }

        return settings.href();

    };

})(jQuery);