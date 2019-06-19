<template>
    <v-container>
        <v-select
            multiple
            :items="options"
            item-text="value"
            item-value="value"
            v-model="selected"
            label="Escolha a Categoria"
            attach
            :clearable="true"
            @change="selectCategoria"
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
        selectCategoria(){
            this.$store.dispatch('addCategoria', this.selected)
            this.$emit('define-categoria', this.selected)
        }
    },
}
</script>
<style lang="stylus" scoped>
</style>