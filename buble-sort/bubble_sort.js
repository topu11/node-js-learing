const inputs=[1,2,3,10,1,5,100,20,5,9,1,963,-96,17];

for(let i=0;i<inputs.length-1;i++)
    {
        for(let j=0;j<inputs.length-1-i;j++)
            {
                if(inputs[j]>inputs[j+1])
                    {
                        let tem;
                        tem=inputs[j];
                        inputs[j]=inputs[j+1];
                        inputs[j+1]=tem;
                    }
            }
    }

   
console.log(inputs);    