import { NgAmchartsDemoPage } from './app.po';

describe('ng-amcharts-demo App', () => {
  let page: NgAmchartsDemoPage;

  beforeEach(() => {
    page = new NgAmchartsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
