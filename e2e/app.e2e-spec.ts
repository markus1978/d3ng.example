import { D3ng.ExamplePage } from './app.po';

describe('d3ng.example App', () => {
  let page: D3ng.ExamplePage;

  beforeEach(() => {
    page = new D3ng.ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
