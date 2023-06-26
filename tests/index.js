import test from 'node:test';
import assert from 'node:assert/strict';

import { echo } from '../src/index.js';

test(`echo('message') should echo 'message'`, () => {
  let message = echo('Hello!');
  assert.strictEqual(message, 'Hello!');
});
