<template>
    <v-container>
        <v-select
            multiple
            :items="options"
            item-text="value"
            item-value="value"
            v-model="selected"
            label="Escolha os anos"
            attach
            :clearable="true"
            @change="selectAno"
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
        selectAno(){
            this.$store.dispatch('addAnos', this.selected)
            this.$emit('define-anos', this.selected)
        }
    },
}
</script>
<style lang="stylus" scoped>
</style>