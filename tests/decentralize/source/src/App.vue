<template>
  <div>
    {{ $t('a.b.c') }}
    {{ $t('a.b2.c2.' + someValue) }}
    {{ $t($options.name + '.scopped') }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    someValue: 'f'
  },
  created () {
    console.log(this.$t('a.b2.c'))
  }
}
</script>

<style lang="scss" scoped>
</style>
