import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderFoundPage extends BasePage{
  readonly openStatus: Locator
  // private page: Page


  constructor(page: Page) {
    // this.page = page
    super(page)
    this.openStatus = this.page.getByText('OPEN')
  }
}