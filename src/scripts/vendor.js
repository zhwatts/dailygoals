require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

const moment =  require('moment');
                require('moment-duration-format');
                require('moment-timer');

// const template = require("handlebars");

module.exports = {
    moment     : moment,
    // handlebars : template
}