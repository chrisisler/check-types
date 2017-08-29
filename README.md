<div align='center'>
# check-types
__Dead simple JS type checking combinator and factory.__
</div>

```javascript
const types = require('check-types')

const safeMap = types([Function, Array], (fn, array) => array.map(fn))

    // Syntax
const/let/var name = types([t1, t2, ..., tN], function/value/expression)

    // Factory
const arrayType = types([Array])
    const names = arrayType([ 'jerry', 'foo', 'meow' ])
    ```

#### Todo
    - Write tests.
