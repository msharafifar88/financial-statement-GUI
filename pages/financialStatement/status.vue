<template>
    <div style="width: 100%">
      <div style="width: 100% ; text-align: center">

        <Card>
          <template #content>
            <h1> {{ organizationName}}</h1>
            <h2> صورت وضعیت مالی </h2>
            <h3> {{ fiscalyearName}}</h3>
          </template>
        </Card>

      </div>
      <div style="float: right ;width:50%;">
        <panel style="text-align: center" header=" دارایی جاری ">
          <DataTable :value="fsList" responsiveLayout="scroll"
                     dataKey="id" >
            <template #footer>
              <div style="text-align: right">
                <span>جمع</span>
              </div>
            </template>
            <Column field="code" header="عنوان "></Column>
            <Column field="name" header="یادداشت"></Column>
            <Column field="yearName" header=" سال مالی"></Column>
            <Column field="yearName" header=" سال مالی"></Column>
            <Column :exportable="false" style="min-width:8rem">
              <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                        @click="editFS(slotProps.data)"/>

                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                        @click="confirmDeleteFS(slotProps.data)"/>
                <NuxtLink to="financialStatement/status/" target="_blank" >
                  <Button icon="pi pi-align-justify" class="p-button-rounded p-button-primary"/>
                </NuxtLink>


              </template>
            </Column>
          </DataTable>
        </panel>
      </div>
      <div style="float: left;width:50%;">
        <panel  header=" بدهی جاری " >
          <DataTable :value="fsList" responsiveLayout="scroll"
                     dataKey="id">
            <template #footer>
              <div style="text-align: right">
                <span>جمع</span>
              </div>
            </template>
            <Column field="code" header="عنوان "></Column>
            <Column field="name" header="یادداشت"></Column>
            <Column field="yearName" header=" سال مالی"></Column>
            <Column field="yearName" header=" سال مالی"></Column>
            <Column :exportable="false" style="min-width:8rem">
              <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                        @click="editFS(slotProps.data)"/>

                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                        @click="confirmDeleteFS(slotProps.data)"/>
                <NuxtLink to="financialStatement/status/" target="_blank" >
                  <Button icon="pi pi-align-justify" class="p-button-rounded p-button-primary"/>
                </NuxtLink>


              </template>
            </Column>
          </DataTable>
        </panel>

      </div>
      <div style="width: 100% ;min-height: 5px">
        <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </h1>
      </div>
      <div style="float: right ;width:50%;">
        <DataTable :value="fsList" responsiveLayout="scroll"
                   dataKey="id" >
          <template #header>
            <div style="text-align: center">
              <span>دارایی غیر جاری</span>
            </div>
          </template>
          <template #footer>
            <div style="text-align: right">
              <span>جمع</span>
            </div>
          </template>
          <Column field="code" header="عنوان "></Column>
          <Column field="name" header="یادداشت"></Column>
          <Column field="yearName" header=" سال مالی"></Column>
          <Column field="yearName" header=" سال مالی"></Column>
          <Column :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                      @click="editFS(slotProps.data)"/>

              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                      @click="confirmDeleteFS(slotProps.data)"/>
              <NuxtLink to="financialStatement/notebook/" target="_blank" >
                <Button icon="pi pi-align-justify" class="p-button-rounded p-button-primary"/>
              </NuxtLink>


            </template>
          </Column>
        </DataTable>
      </div>
      <div style="float: right ;width:50%;">
        <DataTable :value="fsList" responsiveLayout="scroll"
                   dataKey="id" >
          <template #header>
            <div style="text-align: center">
              <span>بدهی غیر جاری</span>
            </div>
          </template>
          <template #footer>
            <div style="text-align: right">
              <span>جمع</span>
            </div>
          </template>
          <Column field="code" header="عنوان "></Column>
          <Column field="name" header="یادداشت"></Column>
          <Column field="yearName" header=" سال مالی"></Column>
          <Column field="yearName" header=" سال مالی"></Column>
          <Column :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                      @click="editFS(slotProps.data)"/>

              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                      @click="confirmDeleteFS(slotProps.data)"/>
              <NuxtLink to="financialStatement/status/" target="_blank" >
                <Button icon="pi pi-align-justify" class="p-button-rounded p-button-primary"/>
              </NuxtLink>


            </template>
          </Column>
        </DataTable>
      </div>
    </div>
</template>

<script  lang="ts" >
export default {
  data() {
    return {
       organizationName: 'دانشگاه علوم پزشکی و خدمات بهداشتی درمانی تهران' as string,
        fiscalyearName: 'سال مالی 1400' as string,
    }
  },
  methods:{
  }
}
</script>