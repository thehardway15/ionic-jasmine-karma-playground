import { browser } from 'protractor';
import { AppPageObject } from './page-objects/app.page-object';

describe('App', () => {

  let appPage: AppPageObject;

  beforeEach(() => {
    appPage = new AppPageObject();
  });

  describe('default screen', () => {
    beforeEach(() => {
      appPage.navigateTo('/')
    })

    it('should have a button saying Click to Decide Fate', () => {
      appPage.getButtonText().then(text => {
        expect(text).toEqual('CLICK TO DECIDE FATE');
      })
    })

    it('should be empty answer', () => {
      appPage.getAnswerText().then(text => {
        expect(text).toEqual('...')
      })
    })

    it('should be a answer after click', () => {
      appPage.clickButton();
      browser.sleep(1000)
      appPage.getAnswerText().then(text => {
        expect(text).not.toEqual('...')
      })
    })
  })

});