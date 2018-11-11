<template>
  <div>
    {{ $t('a.b.c') }}
    {{ $t('a.b2.c2.' + someValue) }}
    {{ $t('scopped') }}
  </div>
</template>

<i18n>
 {
  "es-ES": {
    "a": {
      "b": {
        "c": "es-ES a.b.c"
      },
      "b2": {
        "c": "es-ES a.b2.c"
      }
    },
    "App": {
      "scoped": "es-ES App.scoped"
    }
  },
  "en-US": {
    "a": {
      "b": {
        "c": "en-US a.b.c"
      },
      "b2": {
        "c": "en-US a.b2.c"
      }
    },
    "App": {
      "scoped": "en-US App.scoped"
    }
  }
}
</i18n>

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
