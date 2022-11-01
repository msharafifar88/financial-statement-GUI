<template>
  <div >
    <Toolbar class="mb-4">
      <template #start>
        <Button  icon="pi pi-clone" class="p-button-success mr-2" @click="openNew"/>
      </template>
    </Toolbar>
    <DataTable style="text-align: right" :value="fsList" responsiveLayout="scroll"
                dataKey="id"

               :paginator="true" :rows="10" :filters="filters"
               paginatorTemplate=" PageLinks NextPageLink LastPageLink CurrentPageReport FirstPageLink PrevPageLink  RowsPerPageDropdown "
               :rowsPerPageOptions="[5,10,25]"
               currentPageReportTemplate="نمایش  {first} تا {last} از  {totalRecords} ">

      <Column class="column" field="_yearName" header=" سال"></Column>
      <Column class="column"  field="_organizationCode" header="کد واحد"></Column>
      <Column class="column"  field="_organizationName" header="نام واحد"></Column>
      <Column class="column"  field="_name" header="نام"></Column>
      <Column class="column" field="_code" header="کد"></Column>


      <Column :exportable="false" style="min-width:8rem">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                  @click="editFS(slotProps.data)"/>

          <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                  @click="confirmDeleteFS(slotProps.data)"/>
          <NuxtLink to="financialStatement/show/" target="_blank" >
            <Button icon="pi pi-align-justify" class="p-button-rounded p-button-primary"/>
          </NuxtLink>


        </template>
      </Column>
    </DataTable>

    <Dialog dir="rtl" v-model:visible="fsDialog" :style="{width: '450px'}" header="ایجاد صورت مالی" :modal="true" class="p-fluid">
      <div class="field">
        <label for="name">Name</label>
        <InputText id="name" v-model.trim="fStatement.name" required="true" autofocus :class="{'p-invalid': submitted && !fStatement.name}" />
        <small class="p-error" v-if="submitted && !fStatement.name">Name is required.</small>
      </div>
      <div class="field">
        <label for="code">Code</label>
        <InputText id="code" v-model="fStatement.code" required="true" rows="3" cols="20" />
      </div>

      <div class="field">
        <label for="organization" class="mb-3"> واحد سازمانی  </label>
        <Dropdown class="column" id="organization" v-model="fStatement.organization"
                  :options="organizationList" optionLabel="_name" :filter="true" placeholder="انتخاب واحد سازمانی">

        </Dropdown>
      </div>
      <div class="field">
        <label for="year" class="mb-3"> سال مالی  </label>
        <Dropdown class="column" id="year" v-model="fStatement.year"
                  :options="yearList" optionLabel="name" :filter="true" placeholder="انتخاب سال مالی">

        </Dropdown>
      </div>
      <template #footer>
        <Button  icon="pi pi-times" class="p-button-danger mr-2" @click="hideDialog"/>
        <Button  icon="pi pi-check" class="p-button-success " @click="saveFS" />
      </template>
    </Dialog>

    <Dialog v-model:visible="deleteFSDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
        <span v-if="fStatement">Are you sure you want to delete <b>{{ fStatement.code }}</b>?</span>
      </div>
      <template #footer>
        <Button icon="pi pi-times" class="p-button-danger mr-2" @click="deleteFSDialog = false"/>
        <Button icon="pi pi-check" class="p-button-success mr-2" @click="deleteFS"/>
      </template>
    </Dialog>
  </div>
</template>


<script lang="ts">

import FSService  from '~/service/fs/FSService';
import OrganizationService from "~/service/common/OrganizationService";
import {FSFinancialStatement} from "~/entity/fs/FSFinancialStatement";
import {CmOrganization} from "~/entity/common/CmOrganization";
import {defineComponent} from "vue";
import FiscalYearService from "~/service/common/FiscalYearService";
import {CmFiscalyear} from "~/entity/common/CmFiscalyear";


export default defineComponent ({
  data(){
    return{
      fsService : new FSService() as FSService,
      organizationService : new OrganizationService() as OrganizationService,
      yearService : new FiscalYearService() as FiscalYearService,

      fsList: [] as FSFinancialStatement[],
      organizationList: [] as CmOrganization[],
      yearList:[] as CmFiscalyear[],
      fStatement: new FSFinancialStatement() ,
      fsDialog: false as boolean,
      deleteFSDialog: false as boolean,
      filters:{},
      submitted: false as boolean,
    };

  },
  beforeMount(){
    this.loadData();

  },
  methods:{
    openNew() {
      console.log("openNew");
      this.fStatement = new FSFinancialStatement();
      this.submitted = false;
      this.fsDialog = true;
    },
    saveFS() {
      this.submitted = true;
      this.fsDialog = false;
      if(this.fStatement.id){
        let fs = new FSFinancialStatement();
        this.fsService.update(fs);
      } else{
        let fs = new FSFinancialStatement();
        fs.id = 0;
        fs.name = this.fStatement.name;
        fs.code = this.fStatement.code;
        console.log(this.fStatement.organization);
        fs.organizationID = this.fStatement.organization?._id;
        fs.organizationCode = this.fStatement.organization?._code;
        fs.organizationName = this.fStatement.organization?._name;
        fs.yearID =this.fStatement.year?.id;
        fs.yearName = this.fStatement.year?.name;
        fs.yearCode = this.fStatement.year?.code;
        this.fsService.create(fs);
      }
      this.fStatement = new FSFinancialStatement();


    },
    editFS(fs: FSFinancialStatement) {
      this.fStatement = fs;
      this.fsDialog = true;
      //this.fsService.update(fs);
    },
    hideDialog() {
      this.fsDialog = false;
      this.submitted = false;
    },
    confirmDeleteFS(fs: FSFinancialStatement) {
      this.fStatement = fs;
      this.deleteFSDialog = true;
    },
    deleteFS() {
      console.log(this.fStatement);
      this.fsService.delete(this.fStatement.id);
      this.deleteFSDialog = false;
      this.fStatement = new FSFinancialStatement();

    },
    async loadData(){
      this.fsList = await this.fsService.getAllFS();
      this.organizationList = await this.organizationService.getIndependentOrganization();
      this.yearList = await this.yearService.getAllFiscalYear();
    }
  }
})
</script>