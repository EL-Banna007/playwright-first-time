import { Page } from "@playwright/test";
import Actions from "../utilies/Actions";
import Assertions from "../utilies/Assertions";

export default class BasePage {
    protected readonly page: Page;
    protected readonly actions: Actions = new Actions();
    protected readonly assertions: Assertions = new Assertions();
    constructor(page: Page) {
        this.page = page;
    }
}