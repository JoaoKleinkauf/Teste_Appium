class HomeScreen {
    get enterStoreAddress(){
        return $('id:button_skip')
    }

    async goToLogin(){
        this.enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()