export default () => {
  const shopTabs = $('#tabs');

  if (!shopTabs.length) {
    return;
  }

  shopTabs.tabs();
}
