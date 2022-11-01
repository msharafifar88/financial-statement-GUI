<template>
  <div>

    <Toolbar class="mb-4">
      <template #start>
        <Button label="جدید" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew"/>
        <Button label="حذف" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected"
                :disabled="!selectedFiscalyears || !selectedFiscalyears.length"/>
      </template>

    </Toolbar>
    <DataTable :value="fiscalyears" responsiveLayout="scroll"
               v-model:selection="selectedFiscalyears" dataKey="id"
               :paginator="true" :rows="10"
               paginatorTemplate=" PageLinks NextPageLink LastPageLink CurrentPageReport FirstPageLink PrevPageLink  RowsPerPageDropdown "
               :rowsPerPageOptions="[5,10,25]"
               currentPageReportTemplate="نمایش  {first} تا {last} از  {totalRecords} ">
      <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
      <Column class="column"  field="code" header="کد"></Column>
      <Column class="column"  field="name" header="نام"></Column>
      <Column class="column"  field="startDate" header="تاریخ شروع"></Column>
      <Column class="column"  field="endDate" header="تاریخ پایان"></Column>
      <Column :exportable="false" style="min-width:8rem">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                  @click="editFiscalyear(slotProps.data)"/>

          <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                  @click="confirmDeleteProduct(slotProps.data)"/>
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="fiscalyearDialog" :style="{width: '450px'}" header="Fiscal Year Details" :modal="true"
            class="p-fluid">

      <div class="field">
        <label for="name">Name</label>
        <InputText id="name" v-model.trim="fiscalyear.name" required="true" autofocus
                   :class="{'p-invalid': submitted && !fiscalyear.name}"/>
        <small class="p-error" v-if="submitted && !fiscalyear.name">Name is required.</small>
      </div>
      <div class="field">
        <label for="description">Code</label>
        <input-text id="description" v-model="fiscalyear.code" required="true" rows="3" cols="20"/>
      </div>

      <div class="field">
        <label for="startDate">Start Date</label>
        <InputText id="startDate" v-model="fiscalyear.startDate" required="true"
                   :class="{'p-invalid': submitted && !fiscalyear.startDate}"/>
        <small class="p-error" v-if="submitted && !fiscalyear.startDate">Start Date is required.</small>
      </div>

      <div class="field">
        <label for="endDate">End Date</label>
        <InputText id="endDate" v-model="fiscalyear.endDate" required="true"
                   :class="{'p-invalid': submitted && !fiscalyear.endDate}"/>
        <small class="p-error" v-if="submitted && !fiscalyear.endDate">End Date is required.</small>
      </div>


      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveFiscalyear"/>
      </template>
    </Dialog>

    <Dialog v-model:visible="deleteFiscalyearDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
        <span v-if="fiscalyear">Are you sure you want to delete <b>{{ fiscalyear.name }}</b>?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteFiscalyearDialog = false"/>
        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteFiscalyear"/>
      </template>
    </Dialog>

    <Dialog v-model:visible="deleteFiscalyearsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
        <span v-if="fiscalyear">Are you sure you want to delete the selected products?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteFiscalyearsDialog = false"/>
        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedFiscalyears"/>
      </template>
    </Dialog>

  </div>
</template>

<script lang="ts">
import {FilterMatchMode} from 'primevue/api';
import FiscalYearService from '~/service/common/FiscalYearService';
import {CmFiscalyear} from "~/entity/common/CmFiscalyear";
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      fiscalYearService : new FiscalYearService() as FiscalYearService,
      fiscalyears: [] as CmFiscalyear[],
      selectedFiscalyears: [] as CmFiscalyear[],
      fiscalyear: new CmFiscalyear() ,
      fiscalyearDialog: false as boolean,
      deleteFiscalyearDialog: false as boolean,
      deleteFiscalyearsDialog: false as boolean,
      filters:{},
      submitted: false as boolean,
    };
  },
   async beforeMount() {
    this.fiscalyears =  await this.fiscalYearService.getAllFiscalYear();
    console.log("before" + this.fiscalyears);
  },
  methods: {
    openNew() {
      console.log("openNew");
      this.fiscalyear = new CmFiscalyear();
/*      this.fiscalyear.id = 2;
      this.fiscalyear.code = 1401;
      this.fiscalyear.name = 'test1';
      this.fiscalyears.push(this.fiscalyear);*/
      this.submitted = false;
      this.fiscalyearDialog = true;
    },
    saveFiscalyear() {
      this.submitted = true;
      this.fiscalyearDialog = false;
      let fiscalyear = new CmFiscalyear();
      fiscalyear.code = this.fiscalyear.code;

      fiscalyear.id = 11111;
      fiscalyear.name = this.fiscalyear.name;
      fiscalyear.startDate = this.fiscalyear.startDate;
      fiscalyear.endDate = this.fiscalyear.endDate;
      this.fiscalYearService.create(fiscalyear);
      this.fiscalyear = new CmFiscalyear();


    },
    editFiscalyear(year: CmFiscalyear) {
      this.fiscalyear = year;
      this.fiscalyearDialog = true;
      this.fiscalYearService.edit(year);
    },
    hideDialog() {
      this.fiscalyearDialog = false;
      this.submitted = false;
    },
    confirmDeleteSelected() {
      this.deleteFiscalyearsDialog = true;
    },
    confirmDeleteProduct(year: CmFiscalyear) {
      this.fiscalyear = year;
      this.deleteFiscalyearDialog = true;
    },
    deleteFiscalyear() {
      console.log(this.fiscalyear);
      this.fiscalYearService.delete(this.fiscalyear.id);
      this.deleteFiscalyearDialog = false;
      this.fiscalyear = new CmFiscalyear();

    },
    deleteSelectedFiscalyears() {
      // this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.deleteFiscalyearsDialog = false;
      this.selectedFiscalyears = [];

    }
  }
})

</script>
