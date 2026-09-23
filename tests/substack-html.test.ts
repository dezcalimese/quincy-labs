import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseFragment, serialize} from 'parse5';
import {stripSubscribeWidget} from '../src/lib/substack';

test('removes nested subscription widgets without truncating article content', () => {
  const html='<div><p>Before</p><div class="subscription-widget"><div><form><input><button>Subscribe</button></form></div></div><figure><img src="https://example.com/photo.png"></figure><p>After</p></div>';
  const result=stripSubscribeWidget(html);
  assert.match(result, /Before/);
  assert.match(result, /After/);
  assert.match(result, /photo.png/);
  assert.doesNotMatch(result, /subscription-widget|<form|<button/);
  assert.equal(serialize(parseFragment(result)),result);
});

test('normalizes invalid feed nesting and removes executable markup', () => {
  const result=stripSubscribeWidget('<p>Intro<div>Body</div></p><script>alert(1)</script><a href="javascript:alert(1)" onclick="x()">Link</a>');
  assert.equal(serialize(parseFragment(result)),result);
  assert.match(result, /Intro/);
  assert.match(result, /Body/);
  assert.doesNotMatch(result, /script|onclick/);
});
