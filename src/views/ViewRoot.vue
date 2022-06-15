<template lang="">
    <div>
        <ComheaderVue></ComheaderVue>
        <router-view></router-view>
        <comfooterVue></comfooterVue>
    </div>
</template>
<script>
import ComheaderVue from '@/components/Comheader.vue';
import comfooterVue from '@/components/comfooter.vue';
export default {
    
    components: {
        comfooterVue,
        ComheaderVue
    }
}
</script>
<style lang="">
    
</style>