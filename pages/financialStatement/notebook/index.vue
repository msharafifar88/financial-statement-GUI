
<template>
  <div>
    <DataTable :value="nootebooks" responsiveLayout="scroll"
                dataKey="id"
               :paginator="true" :rows="10"
               paginatorTemplate=" PageLinks NextPageLink LastPageLink CurrentPageReport FirstPageLink PrevPageLink  RowsPerPageDropdown "
               :rowsPerPageOptions="[5,10,25]"
               currentPageReportTemplate="نمایش  {first} تا {last} از  {totalRecords} ">

      <Column class="column"  field="_id" header="کد یکتا "></Column>
      <Column class="column"  field="_code" header="کد گزارش"></Column>
      <Column class="column"  field="_name" header=" نام گزارش "></Column>
      <Column :exportable="false" style="min-width:8rem">
        <template #body="slotProps">
          <Button icon="pi pi-book" class="p-button-rounded p-button-success mr-2"
                  @click="showNotebookColumns(slotProps.data)"/>
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger mr-2"
                  @click="deleteNotebook(slotProps.data._id)"/>
          <a :href="`/financialStatement/notebook/${slotProps.data._id}`" > <Button icon="pi pi-book" /> </a>
        </template>
      </Column>
    </DataTable>


    <Dialog v-model:visible="notebookDialog" :style="{width: 'auto'}" header="Notebook Columns" :modal="true" class="p-fluid" >

      <DataTable :value="notebookColumns" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
        <Column field="columnName" header="Name" style="width:20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column field="columnTitle" header="Title" style="width:20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column field="columnType" header="Type" style="width:20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column field="priority" header="Priority" style="width:20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column field="visible" header="Visible" style="width:20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
      </DataTable>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import NotebookService from "~/service/fs/NotebookService";
import {Notebook} from "~/entity/fs/Notebook";
import {FSNotebookColumns} from "~/entity/fs/FSNotebookColumns";

export default defineComponent ({
  data() {
    return {
      notebookService : new NotebookService() as NotebookService,
      nootebooks: [] as Notebook[],
      notebookDialog: false as boolean,
      notebookColumns: [] as FSNotebookColumns[],
      editingRows: [] as FSNotebookColumns[],
    }
  },
  methods: {
     showNotebookColumns(notebook: Notebook) {
       console.log(notebook._id);
       if(notebook._id != undefined){
         this.getAllNotebookColumnsByNotebookID(notebook._id);
       }

     this.notebookDialog = true;


    },
     async getAllNotebookColumnsByNotebookID(id: number) {
      this.notebookColumns =  await this.notebookService.getNotebookColumns(id);
       console.log(this.notebookColumns);
    },
    async deleteNotebook(id: number){
      await this.notebookService.delete(id);
    },
    onRowEditSave(event) {
      let { newData, index } = event;

      this.notebookColumns[index] = newData;
    },
  },
  async mounted() {
      this.nootebooks =  await this.notebookService.getAllNotebook();
  }
});
</script>