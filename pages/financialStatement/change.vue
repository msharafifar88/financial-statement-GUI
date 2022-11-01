<template>
  <div>
      <panel style="text-align: center" header=" درآمدها: ">
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
      <panel style="text-align: center" header=" هزینه ها: ">
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
      <panel style="text-align: center" header=" درآمدهای شناسایی شده از طرف دولت: ">
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
</template>