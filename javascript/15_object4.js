let course = {
    coursename:"java",
    courseguide:"hitesh",
    courseduration:"6 months",
    courseprice:"999"
}
/* Different types of fetching values of object  */
// TYPE 1
 console.log(course.courseduration)

//  TYPE 2     this is new syntex
 
const {courseguide : guide} = course                              // this type of syntex we use in react too like const navebar(props:companyname)=>{    }     navebar(companyname='appuInc')
console.log(guide)
