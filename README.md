<div align='center'>
    <h1 align='center'>check-types</h1>
    <p align='center'>__Dead simple JS type checking combinator and factory.__ </p>
</div>

```javascript
const types = require('check-types')

const safeMap = types([Function, Array], (fn, array) => array.map(fn))

// Syntax
// const/let/var name = types([t1, t2, ..., tN], function/value/expression)

// Factory
const arrayType = types([Array])
```

#### Todo
- Write tests.
