import {Page} from '@playwright/test';
export default class Waits {
    private readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async waitForTimeoutInSeconds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
    async waitForPageToFullyLoad() {
        console.log('Waiting for the page to fully load...');
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        console.log('Page has fully loaded.');
       
    } 
}