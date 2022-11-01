<template>
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
</template>