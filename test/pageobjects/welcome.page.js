
class WelcomePage{
    get dietLogo () {
        return $('id=com.fghilmany.dietmealapp:id/iv_splash');
    }

    get inputName () {
        return $('id=com.fghilmany.dietmealapp:id/et_name');
    }

    get inputWeight () {
        return $('id=com.fghilmany.dietmealapp:id/et_weight');
    }

    get inputHeight () {
        return $('id=com.fghilmany.dietmealapp:id/et_height');
    }

    get inputGenderMale () {
        return $('id=com.fghilmany.dietmealapp:id/rb_male');
    }

    get inputGenderFemale () {
        return $('id="com.fghilmany.dietmealapp:id/rb_female');
    }

    get btnNext () {
        return $('id=com.fghilmany.dietmealapp:id/bt_next');
    }

    get aktivitas1 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_rest');
    }
    
    get aktivitas2 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_very_very_low');
    }

    get aktivitas3 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_very_low');
    }

    get aktivitas4 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_low_to_medium');
    }

    get aktivitas5 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_medium');
    }

    get aktivitas6 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_heavy');
    }

    get aktivitas7 () {
        return $('id=com.fghilmany.dietmealapp:id/rb_very_heavy');
    }

    get btnSelesai () {
        return $('id=com.fghilmany.dietmealapp:id/bt_finish');
    }

    get headerDesc () {
        return $('id=com.fghilmany.dietmealapp:id/tv_header_desc')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async applicationOpened() {
        expect(this.dietLogo).toBeDisplayed
    }
    
    async inputUser (name, weight, height) {
        await this.inputHeight.waitForExist({ timeout: 5000 })
        await this.inputName.setValue(name);
        await this.inputWeight.setValue(weight);
        await this.inputHeight.setValue(height);
        await this.inputGenderMale.click();
        await this.btnNext.click();
    }

    async inputAktivitas () {
        await this.aktivitas1.waitForExist({ timeout: 5000 })
        await this.aktivitas2.click();
        await this.btnSelesai.click();
    }

    async assertHomePage () {
        await this.headerDesc.waitForExist({timeout: 5000})
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}
export default new WelcomePage
