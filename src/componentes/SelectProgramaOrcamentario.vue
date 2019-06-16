<template>
    <v-container>
        <v-select
            :items="options"
            item-text="value"
            item-value="value"
            v-model="selected"
            label="Escolha o programa orçamentário"
            attach
            :clearable="true"
            @change="selectPrograma"
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
        selectPrograma(){
            this.$store.dispatch('addPrograma', this.selected)
            this.$emit('define-programa', this.selected)
        }
    },
}
</script>
<style lang="stylus" scoped>
</style>