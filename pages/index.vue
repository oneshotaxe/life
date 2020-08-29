<template lang="pug">
  v-btn Test
</template>

<script>
import Io from "socket.io-client";

export default {
  mounted() {
    const socket = Io("http://localhost:3000")
    socket.on('handshake', () => {
      console.log('Ok!')
    })
  },
};
</script>
