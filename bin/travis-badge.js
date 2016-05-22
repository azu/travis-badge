#!/usr/bin/env node
var ghslug = require("github-slug");
ghslug('./', function (err, slug) {
    console.log('[![Build Status](https://travis-ci.org/' + slug
        + '.svg?branch=master)](https://travis-ci.org/' + slug + ')'
    );
});