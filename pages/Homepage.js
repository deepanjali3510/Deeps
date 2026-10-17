exports.HomePage = 
class HomePage{
    constructor(page){
        this.page = page;
        this.productList = '//div[@id ="tbodyid"]//div/h4/a';
        this.addtoCartBtn = '//a[text()="Add to cart"]';
        this.cart = '#cartur';

    }

    async addProducts(productName){
        const productLists = await this.page.$$(this.productList)
        for(const product of productLists){
            if (productName === await product.textContent()){
                await product.click();
                break;
            }
        }

        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('Product added')){
                await dialog.accept()
            }
        });

        await this.page.locator(this.addtoCartBtn).click()
    };

    async gotoCart(){
        await this.page.locator(this.cart).click()
    }

}






