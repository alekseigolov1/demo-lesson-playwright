import { Locator, Page, expect } from '@playwright/test'

export abstract class BasePage{

  readonly languageSwitcher: Locator
  readonly page: Page
  readonly footerPrivacyLink: Locator

  protected constructor(page: Page) {
    this.page = page
    this.languageSwitcher = page.locator('div.language')
    this.footerPrivacyLink = page.getByTestId('privacy-policy')
  }

  async checkLanguageSelector(){
    await expect(this.languageSwitcher).toBeVisible()
  }

  async checkPrivacyLink(){
    await expect(this.footerPrivacyLink).toBeVisible()
  }
}