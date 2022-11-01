import {CmOrganization} from "~/entity/common/CmOrganization";


export default class OrganizationService {


    async getAllOrganization() : Promise<CmOrganization[]>{
        let organizations: CmOrganization[] = [];

        organizations= await $fetch("/api/organization/list")  as CmOrganization[];
        console.log(organizations);
        return organizations;
    };
    async getIndependentOrganization() : Promise<CmOrganization[]>{
        let organizations: CmOrganization[] = [];
        organizations = await $fetch('/api/organization/indepententorganization')  as CmOrganization[];

        return organizations;
    };
}