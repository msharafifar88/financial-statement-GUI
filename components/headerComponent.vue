<template>
   <header>
      <Menubar :model="items" />
   </header>
</template>

<script lang="ts">

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome);
export default {
  components: {
    FontAwesomeIcon
  },
  data() {
        return {
            items: [
                {
                   label:' سیستم مشترک',
                   icon:'pi pi-fw pi-home',
                   items:[
                      {
                         label:' سال مالی',
                         icon:'pi pi-fw pi-plus',
                          to:'/common/fiscalyear',

                      },
                      {
                         label:' واحد سازمانی',
                         icon:'pi pi-fw pi-building',
                          to:'/common/organization',
                      }
                   ]
                },
                {
                   label:' صورت مالی',
                   icon:'pi pi-fw pi-dollar',

                   items:[
                     {
                       label:' صورت  مالی',
                       icon:'pi pi-fw pi-align-justify',
                       to:'/financialStatement',
                     },
                      {
                         label:' صورت وضعیت مالی',
                         icon:'pi pi-fw pi-align-justify',
                          to:'/financialStatement/status',
                      },
                      {
                         label:' صورت تغیرات مالی',
                         icon:'pi pi-fw pi-align-right',
                          to:'/financialStatement/change',
                      },
                      {
                         label:' صورت مقایسه بودجه و عملکرد ',
                         icon:'pi pi-fw pi-align-center',
                          to:'/financialStatement/budget',
                      },
                     {
                       label:' ٔیادداشت ',
                       icon:'pi pi-fw pi-align-center',
                       to:'/financialStatement/notebook',
                     }

                   ]
                },
/*                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                },*/
                {
                   label:'خروج',
                   icon:'pi pi-fw pi-power-off',
                  to:'/'
                }
             ]
        }
    }
}
</script>
