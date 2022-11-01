
import {FSFinancialStatement} from "~/entity/fs/FSFinancialStatement";


export default class FSService {
    async getAllFS() : Promise<FSFinancialStatement[]>{
        let fsList: FSFinancialStatement[] = [];
        fsList = await $fetch('/api/fs/list')  as FSFinancialStatement[];
        return fsList;
    };
    create(fs:FSFinancialStatement){

        return fetch(`/api/fs/create`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fs)
        }).then(res=>res.json());
    };

    update(fs:FSFinancialStatement){
        return fetch(`/api/fs/update`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fs)
        }).then(res=>res.json());
    };
    delete (id: number) {

        let test=useFetch(`/api/fs/delete/`,
            {method:'DELETE',body:JSON.stringify({id:id})}
        );

        console.log(test);
    };
}