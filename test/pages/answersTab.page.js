class AnswersTab{
  get firstRowLabel(){return $("table.table tr td:nth-child(1)");}
  get firstRowValue(){return $("table.table tr td:nth-child(2)");}
}
module.exports = new AnswersTab();