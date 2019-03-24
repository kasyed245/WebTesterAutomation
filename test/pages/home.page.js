class HomePage{
    
    get homePageAlertMsg() {return $('div.alert.alert-info')}
    mainPageLink(linkText){
        return $("//ul[contains(@class,'nav')]//li/a[.='"+linkText+"']")
    }

  }
  module.exports = new HomePage();