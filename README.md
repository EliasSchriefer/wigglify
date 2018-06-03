# Usage
Call ```wigglify()``` to get an "wigglified" String returned

## Syntax
```javascript
wigglify(options) => String
```

# Options
You can also specify an options object with following options:
```javascript
word <String> // The word that should get repeated
wordCount <Integer> // How often "word" should be repeated in one line
depth <Integer> // How often a new indented line should be added
levels <Integer> // How many levels should be added
levelerChar <String> // The character that will be used as whitespace when indenting
```

The standard values for the options object are:
```javascript
word: "wiggle"
wordCount: 3
depth: 5
levels: 3
levelerChar: " "
```


# Be careful:
Node's current version (v10.3.0) needs your file to have a ```.mjs``` extension and
the ```--experimental-modules``` flag specified when starting your script. This could
change in the future, so please check your node version and the availability of
ECMAScript Modules (ESM).

Exmaple start script:
```
node --experimental-modules example.mjs
```

# Have fun!

# Example:
```
wiggle wiggle wiggle
wiggle wiggle wiggle
 wiggle wiggle wiggle
  wiggle wiggle wiggle
   wiggle wiggle wiggle
    wiggle wiggle wiggle
     wiggle wiggle wiggle
    wiggle wiggle wiggle
   wiggle wiggle wiggle
  wiggle wiggle wiggle
 wiggle wiggle wiggle
wiggle wiggle wiggle
wiggle wiggle wiggle
 wiggle wiggle wiggle
  wiggle wiggle wiggle
   wiggle wiggle wiggle
    wiggle wiggle wiggle
     wiggle wiggle wiggle
    wiggle wiggle wiggle
   wiggle wiggle wiggle
  wiggle wiggle wiggle
 wiggle wiggle wiggle
wiggle wiggle wiggle
wiggle wiggle wiggle
 wiggle wiggle wiggle
  wiggle wiggle wiggle
   wiggle wiggle wiggle
    wiggle wiggle wiggle
     wiggle wiggle wiggle
    wiggle wiggle wiggle
   wiggle wiggle wiggle
  wiggle wiggle wiggle
 wiggle wiggle wiggle
wiggle wiggle wiggle
wiggle wiggle wiggle
```
