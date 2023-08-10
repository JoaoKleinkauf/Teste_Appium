const homeScreen = require("../screens/home.screen")

describe('Access Admin Panel', () => {
    it('Login valido', async () => {
        await homeScreen.goToLogin()
    })
})