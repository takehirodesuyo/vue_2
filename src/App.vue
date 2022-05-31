<template>
  <div>
    <!-- <LikeHeader></LikeHeader> -->
    <!-- ケバブケース -->
    <like-header></like-header>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from './components/LikeHeader.vue'

export default {
  // ローカル登録
  components: {
    // importしてきたLikeHeader(左)をLikeHeaderという名前でローカル登録
    // パスカルケースははじめ大文字,キャメルケースははじめ小文字
    LikeHeader: LikeHeader,
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
