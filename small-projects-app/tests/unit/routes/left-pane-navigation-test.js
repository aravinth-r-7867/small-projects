import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | left-pane-navigation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:left-pane-navigation');
    assert.ok(route);
  });
});
