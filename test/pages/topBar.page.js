class TopBar{
    get guidelinesLink(){return $("div#bs-example-navbar-collapse-1 li a")}
    get guidelineInstanceKeyTxtBox(){return $("div#bs-example-navbar-collapse-1 input")}
    get advancedBtn(){return $("div#bs-example-navbar-collapse-1 button:nth-child(2)")}
    get resumedBtn(){return $("div#bs-example-navbar-collapse-1 button.btn-primary")}
}
module.exports= new TopBar();