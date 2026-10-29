import {test as baseTest} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import PracticePage from "../pages/PracticePage";
import PlayQaPage from "../pages/PlayQaPage";
import PracticePlaygroundPage from "../pages/practicePlaygroundPage";



type pages = {
loginPage : LoginPage
practicePlaygroundPage : PracticePlaygroundPage
playQaPage : PlayQaPage
practicePage : PracticePage
}

const testPages = baseTest.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    practicePlaygroundPage: async ({ page }, use) => {
        await use(new PracticePlaygroundPage(page));
    },
    playQaPage: async ({ page }, use) => {
        await use(new PlayQaPage(page));
    },
    practicePage: async ({ page }, use) => {
        await use(new PracticePage(page));
    } 
})
export const test = testPages;