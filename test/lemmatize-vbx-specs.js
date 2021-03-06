//     wink-lemmatizer
//     English lemmatizer
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-lemmatizer”.
//
//     “wink-lemmatizer” is free software: you can redistribute
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-lemmatizer” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-lemmatizer”.
//     If not, see <http://www.gnu.org/licenses/>.

//
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var lemmatize = require( '../src/wink-lemmatizer.js' ).verb;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var verbs = [
              [ 'winning', 'win' ],
              [ 'dying', 'die' ],
              [ 'agreed', 'agree' ],
              [ 'died', 'die' ],
              [ 'eaten', 'eat' ],
              [ 'wins', 'win' ],
              [ 'manages', 'manage' ],
              [ 'manage', 'manage' ],
              [ 'pushes', 'push' ],
              [ 'tries', 'try' ],
              [ 'had', 'have' ],
              [ 'are', 'be' ],
              [ 'suggesting', 'suggest' ],
              [ 'juxtaposes', 'juxtapose' ],
              [ 'foresaw', 'foresee' ],
              [ 'devouring', 'devour' ],
              [ 'scouring', 'scour' ],
              [ 'lates', 'lates' ]
            ];

describe( 'lemmatizeVBX test cycle', function () {
  verbs.forEach( function ( verb ) {
    it( 'lemmatize ' + verb[ 0 ] + ' must give ' + verb[ 1 ], function () {
        expect( lemmatize( verb[ 0 ] ) ).to.deep.equal( verb[ 1 ] );
    } );
  } );
} );
