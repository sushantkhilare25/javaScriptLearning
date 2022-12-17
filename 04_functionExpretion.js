var sCandicate=function(gradScore,hscScore,sscScore,candicateName){

    var result= gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrates ${candicateName} you are eligable for TCS Interview` : `Sorry ${candicateName} Unfortunately you are not eligible for TCS interview`
console.log(result);
}
    sCandicate(80,86,90,'Sushant')
    sCandicate(60,66,70,'Mayur')
    sCandicate(60,79,88,'Vinay')