const SampleApp = require('./sampleApp.page')
class UIPlayground {

     constructor(page){
          this.UIPlaygroundPage = page
          this.SampleApp = new SampleApp(page)
          this.navbarLocator = '.navbar'
     }

     async gotoSampleApp(){
          await this.UIPlaygroundPage.getByRole('link',{name:'Sample App'}).click()
     }

     async load(){
          await this.UIPlaygroundPage.goto('http://uitestingplayground.com')
     }
}

module.exports = UIPlayground