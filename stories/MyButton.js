export default {
  name: 'my-button',

  data() {
    return {
      buttonStyles: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#ccc',
        cursor: 'pointer',
        fontSize: 12,
        padding: '5px 10px',
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
