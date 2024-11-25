import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderNotFoundPage extends BasePage{
  readonly orderNotFoundContainer: Locator
  // private page: Page


  constructor(page: Page) {
    // this.page = page
    super(page)
    this.orderNotFoundContainer = this.page.getByTestId('orderNotFound-container')
  }

}