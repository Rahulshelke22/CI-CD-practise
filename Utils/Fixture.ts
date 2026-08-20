import{expect, Fixtures} from "@playwright/test"
import { test as base ,Page} from '@playwright/test';
import{LoginPage} from "../pages/login"

type Logindata={

    loggedInPage:Page
};

// export const test=base.extend({

//     LoginPage:async({page},use)=>{

      


//         await use(new LoginPage(page))
//     }
// })

// export{expect} from "@playwright/test"




// Extend base test with a custom "loggedInPage" fixture
export const test = base.extend<Logindata>({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.fill('#Email', 'shelkerahul@gamil.com')
    await page.fill('#Password', 'Snehal@1498');
    await page.click('.login-button');
    // "use" is where the test actually runs with this fixture
    await use(page);
    console.log("Login Successful")
    await page.close();
    
    // (optional) cleanup code goes here, after use()
  },
});

export{expect} from "@playwright/test"