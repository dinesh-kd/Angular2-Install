import { Angular2InstallPage } from './app.po';

describe('angular2-install App', function() {
  let page: Angular2InstallPage;

  beforeEach(() => {
    page = new Angular2InstallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
