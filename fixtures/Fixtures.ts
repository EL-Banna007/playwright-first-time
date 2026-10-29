import {test as baseTest} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HerokuappPage from "../pages/HerokuappPage";
import PracticePage from "../pages/PracticePage";
import PlayQaPage from "../pages/PlayQaPage";



type pages = {
loginPage : LoginPage
herokuappPage : HerokuappPage
playQaPage : PlayQaPage
practicePage : PracticePage
}

const testPages = baseTest.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    herokuappPage: async ({ page }, use) => {
        await use(new HerokuappPage(page));
    },
    playQaPage: async ({ page }, use) => {
        await use(new PlayQaPage(page));
    },
    practicePage: async ({ page }, use) => {
        await use(new PracticePage(page));
    } 
})
export const test = testPages;