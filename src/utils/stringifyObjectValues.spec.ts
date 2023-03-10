import test from 'ava'

import { stringifyObjectValues } from './index.js'

test('stringifyObjectValues()', t => {
  t.deepEqual(
    stringifyObjectValues({
      string: 'string',
      number: 1,
      boolean: true,
      array: ['1', 2, true],
      undefined: undefined
    }),
    {
      string: 'string',
      number: '1',
      boolean: 'true',
      array: '1,2,true'
    }
  )
})
