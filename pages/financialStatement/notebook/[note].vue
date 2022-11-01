
<template>
  <div>

    <DataTable :value="notebookRows" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table"  responsiveLayout="scroll">
      <Column class="column" v-for="col of columns" :field="col.columnName" :header="col.columnTitle" :key="col.columnName">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]"  mode="decimal" />
        </template>

      </Column>
    </DataTable>
  </div>

</template>


<script lang="ts">
import {defineComponent, isRef} from "vue";
import { reactive } from 'vue'
import { ref } from 'vue'
import NotebookService from "~/service/fs/NotebookService";
import {FSNotebookColumns} from "~/entity/fs/FSNotebookColumns";
import {NotebookRow} from "~/entity/fs/NotebookRow";
import {NotebookCell} from "~/entity/fs/NotebookCell";
import * as fs from "fs";


export default defineComponent ({
  data() {
    return {
      p : useRoute().params.note,
      notebookService: new NotebookService() as NotebookService,
      notebookRows :  [] as any[],
      columns : [] as FSNotebookColumns[] ,
      fs : new FSNotebookColumns() as FSNotebookColumns,

    }
  },
  methods: {
    onCellEditComplete(event) {
      console.log(event);
    },
     cellData(columnName: string, row: NotebookRow) {
      console.log(columnName);
      console.log(row);
      console.log();
      for(let r of   this.notebookRows){
        if(r.index ==row.index){
           console.log(Object.values(row.notebookColumns));
          /*let c : NotebookCell[] = r?.notebookColumns;
          console.log(c);*/
          /*for(let c of r.notebookColumns){
            if(c.columnName == columnName){
              return c.value;
            }
          }*/
        }
      }
       return "test";
     // console.log(ref(row));
      //let columns : NotebookCell[] = data.notebookColumns;
      /*columns.forEach(col => {
        if(col.columnName === columnName){
          return col.value;
        }else {
          return "test";
        }
      });*/


    }

  },
   created() {
    this.fs.columnName= "index";
    this.fs.columnTitle="Index";
    this.columns.push(this.fs);
    let col = [] as FSNotebookColumns[];
    this.notebookService.getNotebookColumns(this.p).then( res=> {
      res.forEach(element => {
        this.fs = new FSNotebookColumns() as FSNotebookColumns;
        this.fs.columnName= element.columnName;
        this.fs.columnTitle= element.columnTitle;
        this.columns.push(this.fs);
      })
    });

  },
  async mounted() {
    this.notebookRows = await this.notebookService.getNotebookRows(this.p);
  }
});
</script>



