const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      code: [],
      scenario: 0,
      paused: false,
    };
  },
  methods: {
    pause() {
      window.pause();
    },
    next() {
      window.next();
    },
    prev() {
      window.prev();
    }
  },
  computed: {
  },
});

const instance = app.mount('#app');
