class GuidelineSecondPage{
    
     decisionLbl(labelText){
        return $("//label[contains(.,'"+labelText+"')]")
    }
    
    decisionLblSel(labelText){
      return ("//label[contains(.,'"+labelText+"')]")
  }

  }
  module.exports = new GuidelineSecondPage();