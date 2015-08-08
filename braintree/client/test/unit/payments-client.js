import client from '../../src/payments-client';

describe('client', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(client, 'greet');
      client.greet();
    });

    it('should have been run once', () => {
      expect(client.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(client.greet).to.have.always.returned('hello');
    });
  });
});
