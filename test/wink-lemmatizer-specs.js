//     wink-lemmatizer
//     English lemmatizer
//
//     This file is part of “wink-lemmatizer”.
//
//     Copyright (c) GRAYPE Systems Private Limited
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var lemmatize = require( '../src/wink-lemmatizer.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'lemmatizeVerb test', function () {
  it( 'lemmatize tries must give try', function () {
      expect( lemmatize.verb( 'tries' ) ).to.deep.equal( 'try' );
  } );
} );

describe( 'lemmatizeNoun test', function () {
  it( 'lemmatize shoes must give shoe', function () {
      expect( lemmatize.noun( 'shoes' ) ).to.deep.equal( 'shoe' );
  } );
} );

describe( 'lemmatizeAdjective test', function () {
  it( 'lemmatize coolest must give far', function () {
      expect( lemmatize.adjective( 'coolest' ) ).to.deep.equal( 'cool' );
  } );
} );
