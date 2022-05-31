<template>
  <div>
    <p>いいね{{ number }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // コンポーネントオプション
  data() {
    return {
      number:5
    }
  },
  methods: {
      increment(){
          this.number += 1;
      }
  }
}
</script>

<style scoped>
/* scopeがないと、すべてのdivタグに適用される */
/* なので,scopedとすると、今の.vueファイルのみに適用される */
/* div配下の要素にすべて適用される */
  div {
    border: 1px solid red;
  }

</style>
