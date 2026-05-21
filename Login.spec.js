const{test,expect}=require('@playwright/test')

test('login',async({page})=>
    {
        await page.goto('http://localhost:8000');
    });