const filter=(query)=>{
    let curDay=new Date().getDay();
    let week={
        0:[],1:[],2:[],3:[],4:[],5:[],6:[]
    }
    //6為今天
    query.forEach(ele => {
        week[(ele.createdAt.getDay()+6-curDay)%7].push(ele);
    });
    return week;
}
module.exports=filter;