<template>
  <div>
    <Tree :value="organizations">
      <template #default="slotProps">
        <b>{{slotProps.node._code}} - {{slotProps.node._name}}  </b>
      </template>

    </Tree>
  </div>


</template>



<script   lang="ts" >
import {CmOrganization} from "~/entity/common/CmOrganization";
import OrganizationService from "~/service/common/OrganizationService";
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      organizations:  [] as CmOrganization[],
      organizationService:  new  OrganizationService as OrganizationService
    };
  },
  async beforeMount() {
    this.organizations =  await this.organizationService.getAllOrganization();
    console.log(this.organizations);
  }

})
</script>
