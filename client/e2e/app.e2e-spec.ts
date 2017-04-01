import { ChampionshuPage } from './app.po';

describe('championshu App', () => {
  let page: ChampionshuPage;

  beforeEach(() => {
    page = new ChampionshuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
