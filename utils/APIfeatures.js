class APIfeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search(userID) {
    this.query = this.query.find({ createdBy: userID });
    return this;
  }
  pagination() {
    let curWeek = Number(this.queryStr.week) || 1;
    let curDate = new Date();
    curDate.setTime(curDate.getTime() - 7 *24*60*60*1000* curWeek);
    
    this.query =this.query
      .find({ createdAt: { $gt: curDate.getTime(),$lt:curDate.getTime()+7*24*60*60*1000}})
      .sort({ date: "asc" });
    return this;
  }
}

module.exports = APIfeatures;
