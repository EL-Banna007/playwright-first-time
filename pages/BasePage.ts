import { Page } from "@playwright/test";
import Actions from "../utilies/Actions";
import Assertions from "../utilies/Assertions";
import Waits from "../utilies/Waits";
export default class BasePage {
    protected readonly page: Page;
    protected readonly actions: Actions = new Actions();
    protected readonly assertions: Assertions = new Assertions();
    public readonly waits: Waits;
    constructor(page: Page) {
        this.page = page;
        this.waits = new Waits(page);
    }
}