let meeting=new Promise((resolve, reject) => {
    const isMetting=false;
    setTimeout(()=>{
        if(isMetting)
            {
                resolve('Meeting is scheduled')
            }
         reject('Metting is cancled');
    },2000)
       
})

let meeting1=new Promise((resolve, reject) => {
    const isMetting=true;
    if(isMetting)
        {
            resolve('Meeting is scheduled')
        }
     reject('Metting is cancled');   
})



let data=7;
meeting.then((response)=>{
  console.log(response)
  //data=response;
}).catch((err)=>{
  console.log(err);
  //data=err;
})

async function myFunction(){
    data = await meeting1.then((response)=>{
        return response;
      }).catch((err)=>{
        return err;
      })
    // do whatever you need with vm.feed below

    console.log(data);
 }

 //console.log(myFunction());
 myFunction();
 console.log(data);
