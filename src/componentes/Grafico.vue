<template>
    <vue-plotly 
    :title="title"
    :data="this.data" 
    :layout="layout" 
    :options="options"/>
</template>
<script>
import VuePlotly from '@statnett/vue-plotly'
export default {
    props: [ 'data'],
    components: {
        VuePlotly
    },
    data: function () {
        return {
            layout: {title: "Consulta de orçamentos"},
            options: {}
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>