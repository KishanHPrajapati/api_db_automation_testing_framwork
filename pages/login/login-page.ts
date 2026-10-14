import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/base-page";


export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }
}