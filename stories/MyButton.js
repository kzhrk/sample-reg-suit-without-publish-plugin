export default {
  name: 'my-button',

  data() {
    return {
      buttonStyles: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        fontSize: 16,
        padding: '10px 50px',
        margin: 10,
      },
    };
  },

  template: `
    <button :style="buttonStyles" @click="onClick">
      <slot></slot>
    </button>
  `,

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
