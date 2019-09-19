
//program of class 
function company(name,city,est){
    this.gf=10;
  this.name=name;
  this.city=city;
  this.est=est;
  }
  company.prototype.print=function(){
    console.log(this.name+ " "+this.city) ;
  }
  function employ(name,city,age){
  company.call(this);
  this.name=name;
  this.city=city;
  this.age=age;
  }
  
  var com=new company("jai","ho",1996);
  console.log(com.name);
  
  employ.prototype=Object.create(company.prototype);
  employ.prototype.constructor=employ;
   var em=new employ("shiv","kumar",10);
  // console.log(em.);
  console.log(em.gf);
  em.print();
  