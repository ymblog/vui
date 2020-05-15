export default {
  render() {
    const { $slots } = this;
    return (
      <div class="ui-formItem-prompt-poptip-wrap">
        { $slots.default }
        <div class="ui-poptip-arrow"></div>
      </div>)
  }
};
