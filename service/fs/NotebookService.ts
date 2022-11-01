import {Notebook} from "~/entity/fs/Notebook";
import {FSNotebookColumns} from "~/entity/fs/FSNotebookColumns";
import {NotebookRow} from "~/entity/fs/NotebookRow";

export default class NotebookService {
    async getAllNotebook() : Promise<Notebook[]>{
        let notebookList: Notebook[] = [];
        notebookList = await $fetch('/api/notebook/list')  as Notebook[];
        return notebookList;
    };

    create(notebook:Notebook){
        return fetch(`/api/notebook/create`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(notebook)
        }).then(res=>res.json());
    };

    update(notebook:Notebook){
        return fetch(`/api/notebook/update`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(notebook)
        }).then(res=>res.json());
    };
    
    delete (id: number) {
        let test=useFetch(`/api/notebook/delete/${id}`,
            {method:'DELETE'}
        );
        console.log(test);
    }

    async getNotebookColumns(id: number) : Promise<FSNotebookColumns[]>{
        console.log(id);
        let notebookColumns =  await $fetch(`/api/notebook/columns/${id}`) as FSNotebookColumns[] ;
        return notebookColumns;
    }

     async getNotebookRows(name: string) :Promise<any[]>{
        let notebookList =  await $fetch(`/api/notebook/data/${name}`)  as any[];
        //let{data:notebookRow} =  useFetch<{data :NotebookRow[]}>(`/api/notebook/specialReport/notebook/${id}`);

       /* for (let i = 0; i < notebookList.length; i++) {
            console.log("HI");
            console.log(notebookList[i]);
        }*/

         console.log(notebookList);
        return notebookList;
    }
}