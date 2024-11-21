import { Locator, Page } from '@playwright/test'

export class OrderPage {
  private page: Page
  readonly statusButton: Locator
  readonly nameInput : Locator
  readonly phoneInput : Locator
  readonly commentInput : Locator
  readonly createOrderButton : Locator
  readonly OkPopupButton  : Locator
  readonly orderCreationContainer  : Locator
  readonly logOutButton : Locator
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.nameInput = this.page.getByTestId('username-input')
    this.phoneInput = this.page.getByTestId('phone-input')
    this.commentInput = this.page.getByTestId('comment-input')
    this.createOrderButton = this.page.getByTestId('createOrder-button')
    this.OkPopupButton = this.page.getByTestId('orderSuccessfullyCreated-popup-ok-button')
    this.orderCreationContainer = this.page.getByTestId('orderSuccessfullyCreated-popup')
    this.logOutButton = this.page.getByTestId('logout-button')

  }
}
