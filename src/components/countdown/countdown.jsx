import './style/index';
export default {
  name: 'UCountdown',
  props: {
    countdownCls: {
      type: String,
      default: 'ui-countdown',
    },
    type: {
      type: String,
      default: 'primary',
    },
    startText: {
      type: String,
      default: '获取验证码',
    },
    duringText: {
      type: String,
      default: '发送中...',
    },
    finishText: {
      type: String,
      default: '再次发送',
    },
    seconds: {
      type: Number,
      default: 60,
    },
    value: {
      //0:默认 ，1：发送中，2：倒计时中，3:结束
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      setIntervalObj: '',
      secondsInternal: '',
    };
  },
  computed: {
    text() {
      const { startText, duringText, finishText, value, secondsInternal } = this;
      let str = '';
      switch (parseInt(value)) {
        case 0:
          str = startText;
          break;
        case 1:
          str = duringText;
          break;
        case 2:
          str = `${secondsInternal} s`;
          break;
        case 3:
          str = finishText;
          break;
      }
      return str;
    },
  },
  watch: {
    value(val, oldVal) {
      // console.log(`value:${val}`)
      // console.log(`oldVal:${oldVal}`)
      if (oldVal === 0 || oldVal === 3) {
        clearInterval(this.setIntervalObj);
        this.countdown();
      }
    },
  },
  created() {
    this.secondsInternal = this.seconds;
  },
  methods: {
    className() {
      const { countdownCls, type } = this;
      return {
        [`${countdownCls}`]: true,
        [`${countdownCls}-${type}`]: type,
      };
    },
    handleClcik() {
      this.$emit('click');
    },
    countdown() {
      let _this = this;
      this.setIntervalObj = setInterval(() => {
        _this.secondsInternal = _this.secondsInternal - 1;

        if (_this.secondsInternal === 0) {
          clearInterval(_this.setIntervalObj);
          this.$emit('input', 3);
          _this.secondsInternal = _this.seconds;
        }
      }, 1000);
    },
  },
  render() {
    const { text, className, handleClcik, value } = this;

    const Prop = {
      class: className(),
      on: {
        click: handleClcik,
      },
    };
    return (
      <div {...Prop} class={value === 1 ? 'wait' : value === 2 ? 'noDrop' : ''}>
        {text}
      </div>
    );
  },
};
