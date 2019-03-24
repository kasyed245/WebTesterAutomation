class GuidelineFirstPage{
    
    get distanceToCoverLbl(){ return $("//div[@class='div-striped']//strong[contains(.,'Distance To Cover')]")}
    get distanceToCoverLblSel(){ return ("//div[@class='div-striped']//strong[contains(.,'Distance To Cover')]")}
    get nextBtn() { return $('a#next')}
    get distanceToCoverTxtBox(){return $('div.div-striped input')}
   }
  module.exports = new GuidelineFirstPage();