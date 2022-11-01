<template>
    <div>
        Content
        <InputText v-model="text" />
        <Button lable="Prime Button" icon="pi pi-check" @click="fetchData()"> </Button>
    </div>
</template>

<script  lang="ts" >
export default {
    data() {
        return {
            data: []
        }
    },
    methods:{

      async fetchData(){
        console.log("before rest")
        const response = await useFetch('/api/hello');
		    console.log(response.data +" "+"Data fetched");
		    console.log("Data fetched");
        console.log("after rest")
      }


    }
}
</script>