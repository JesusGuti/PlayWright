const base = require('@playwright/test')
const UIPlayground = require('./uiplayground.page')

const test = base.test.extend({
     uitestingplayground: async ({page},use) =>{
          const uiplayground = new UIPlayground(page)
          await uiplayground.load()
     }
})

module.exports = {
     test
}