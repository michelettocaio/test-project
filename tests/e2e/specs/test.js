// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Login': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .pause(2000)
      .setValue("input.login", 'teste')
      .pause(1000)
      .setValue("input.password", 'teste')
      .click("button.doLogin")
      .pause(5000)
  },
  'addProducts': browser => {
    browser
      .waitForElementVisible('.home-container', 10000)
      .pause(1000)
      .click('.left-container')
      .waitForElementVisible('.products-container', 5000)
      .pause(1000)
      .setValue("input.cod", '1')
      .pause(200)
      .setValue("input.name", 'Mochila')
      .pause(200)
      .setValue("input.price", '150,00')
      .pause(200)
      .click('.btnadd')
      .pause(700)
      .setValue("input.cod", '2')
      .pause(200)
      .setValue("input.name", 'Tesoura')
      .pause(200)
      .setValue("input.price", '20,00')
      .pause(200)
      .click('.btnadd')
      .pause(700)
      .click('tbody tr:last-child svg')
      .pause(1000)
      browser.expect.element('tbody tr:last-child td:nth-child(2) div').text.to.equal('Mochila');
      browser
        .pause(1000)
        .click('svg.return')
        .pause(1000)
  },
  'Orders': browser => {
    browser
        .waitForElementVisible('.home-container', 10000)
        .pause(1000)
        .click('.right-container')
        .waitForElementVisible('.orders-container', 5000)
        .pause(1000)
        .setValue("input.client", 'Caio')
        .pause(200)
        .click('.prods tbody tr:last-child svg')
        .pause(100)
        .click('.prods tbody tr:last-child svg')
        .pause(500)
        .click('.prodorders tbody tr:last-child svg')
        .expect.element('.total label').text.to.equal('R$ 150')
      browser
        .pause(1000)
        .click('.btnaddo')
        .pause(1000)
        .expect.element('.orders-right tbody tr:last-child td:nth-child(1) div').text.to.equal('Caio');
      browser
          .pause(3000)
          .end()
  }
}
