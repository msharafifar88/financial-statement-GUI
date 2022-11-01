import {CmFiscalyear} from "~/entity/common/CmFiscalyear";


export default class FiscalYearService {

      async getAllFiscalYear() : Promise<CmFiscalyear[]>{
        let fiscalYears: CmFiscalyear[] = [];

        fiscalYears = await $fetch('/api/year/list')  as CmFiscalyear[];
/*         for (let datum of data.value) {

         }*/

        console.log(fiscalYears);


        return fiscalYears;
    };
    delete (id: number) {

         let test=useFetch(`/api/year/delete/`,
             {method:'DELETE',body:JSON.stringify({id:id})}
         );

         console.log(test);
    };
    edit(fiscalyear:CmFiscalyear){
        return fetch(`/api/year/update`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fiscalyear)
        }).then(res=>res.json());
    };
    create(fiscalyear:CmFiscalyear){
        console.log(fiscalyear);
        return fetch(`/api/year/create`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fiscalyear)
        }).then(res=>res.json());
    };

}
