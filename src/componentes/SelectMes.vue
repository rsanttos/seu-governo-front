<template>
    <v-container>
        <v-select
            multiple
            :items="options"
            item-text="value"
            item-value="value"
            v-model="selected"
            label="Escolha os meses"
            attach
            :clearable="true"
            @change="selectMes"
        ></v-select>
    </v-container>
</template>
<script>
export default {
    props: ['options'],
    data: function () {
        return {
            selected: null
        }
    },
    methods: {
        selectMes(){
            this.$store.dispatch('addMeses', this.selected)
            this.$emit('define-meses', this.selected)
        }
    },
}
</script>
<style lang="stylus" scoped>
</style>