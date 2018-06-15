import { browser, by, element } from 'protractor';

export class AppPageObject {
  navigateTo(destination) {
    return browser.get(destination);
  }

  getButtonText() {
    return element(by.tagName('button')).getText()
  }

  getAnswerText() {
    return element(by.tagName('h2')).getText()
  }

  clickButton() {
    element(by.tagName('button')).click()
  }
}