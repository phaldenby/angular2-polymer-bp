import { Angular2PolymerBpPage } from './app.po';

describe('angular2-polymer-bp App', function() {
  let page: Angular2PolymerBpPage;

  beforeEach(() => {
    page = new Angular2PolymerBpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
