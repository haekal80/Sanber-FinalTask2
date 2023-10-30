import WelcomePage from "../pageobjects/welcome.page"

describe('Welcome pages',() => {
    let name = 'haekal'
    let weight = 60
    let height = 160

    it('Should open apps', async() => {
        await WelcomePage.applicationOpened()
    })

    it('Input data diri', async() => {
        await WelcomePage.inputUser(name, weight, height)
    })

    it('Input aktivitas', async() => {
        await WelcomePage.inputAktivitas()
        await WelcomePage.assertHomePage()
    })
})