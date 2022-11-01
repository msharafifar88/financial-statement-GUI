<template>

    <TabView>
      <TabPanel header="صورت وضعیت مالی">
        <div style="width: 100%">
          <div style="width: 100% ; text-align: center">

            <Card>
              <template #content>
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
      </TabPanel>
      <TabPanel header="صورت تغییرات مالی">
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
      </TabPanel>
      <TabPanel header="صورت بودجه " >
        <div>

          <panel style="text-align: center" header=" منابع: ">
            <DataTable :value="fsList" responsiveLayout="scroll"
                       dataKey="id" >
              <template #footer>
                <div style="text-align: right">
                  <span>جمع</span>
                </div>
              </template>
              <Column field="code" header="عنوان "></Column>
              <Column field="name" header="یادداشت"></Column>
              <Column field="yearName" header=" اولیه "></Column>
              <Column field="yearName" header=" نهایی"></Column>
              <Column field="yearName" header=" عملکرد بر مبنای قابل مقایسه"></Column>
              <Column field="yearName" header=" تفاوت بودجه نهایی و عملکرد "></Column>
            </DataTable>
          </panel>
          <panel style="text-align: center" header=" مصارف: ">
            <DataTable :value="fsList" responsiveLayout="scroll"
                       dataKey="id" >
              <template #footer>
                <div style="text-align: right">
                  <span>جمع</span>
                </div>
              </template>
              <Column field="code" header="عنوان "></Column>
              <Column field="name" header="یادداشت"></Column>
              <Column field="yearName" header=" اولیه "></Column>
              <Column field="yearName" header=" نهایی"></Column>
              <Column field="yearName" header=" عملکرد بر مبنای قابل مقایسه"></Column>
              <Column field="yearName" header=" تفاوت بودجه نهایی و عملکرد "></Column>
            </DataTable>
          </panel>
          <panel style="text-align: center" header=" وجوه دریافتی از طرف دولت: ">
            <DataTable :value="fsList" responsiveLayout="scroll"
                       dataKey="id" >
              <template #footer>
                <div style="text-align: right">
                  <span>جمع</span>
                </div>
              </template>
              <Column field="code" header="عنوان "></Column>
              <Column field="name" header="یادداشت"></Column>
              <Column field="yearName" header=" اولیه "></Column>
              <Column field="yearName" header=" نهایی"></Column>
              <Column field="yearName" header=" عملکرد بر مبنای قابل مقایسه"></Column>
              <Column field="yearName" header=" تفاوت بودجه نهایی و عملکرد "></Column>
            </DataTable>
          </panel>
        </div>
      </TabPanel>
    </TabView>
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