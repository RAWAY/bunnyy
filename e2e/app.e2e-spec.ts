import { BunnyPage } from './app.po';

describe('bunny App', function() {
  let page: BunnyPage;

  beforeEach(() => {
    page = new BunnyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
