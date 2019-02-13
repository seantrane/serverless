import { Callback, Context, Handler } from 'aws-lambda';
import * as utils from 'aws-lambda-test-utils';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as mocha from 'mocha';
import * as sinon from 'sinon';

import { hello } from '../src/handler';

chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

const mockContextCreator = utils.mockContextCreator;

describe('@seantrane/serverless-hello', function() {

  describe('handler.hello', function() {

    it('should call the callback function on success', function() {
      const callback = sinon.spy();
      const context = mockContextCreator({}, callback);
      hello('message', context, callback);

      expect(callback.called).to.equal(true);
  });

  });

});
