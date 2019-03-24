class RepoPage{
    
    guidelineNameLink(linkText){
        return $("//div[@class='row']//span[@class='guideline-list-item-name' and contains(.,'"+linkText+"')]")
    }
  }
  module.exports = new RepoPage();