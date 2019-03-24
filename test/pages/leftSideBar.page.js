class LeftSideBar{
    get answerTab(){return $("//ul[contains(@class,'visible-lg')]//a[.='Answers']")}
    get answerTabSel(){return ("//ul[contains(@class,'visible-lg')]//a[.='Answers']")}
    get JSONTab(){return $("(//ul[contains(@id,'guideline-instance-menu')]//li[4]//a")} 
}
module.exports= new LeftSideBar();