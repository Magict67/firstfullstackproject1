function openOrFocusTab(url) {
  const newTab = window.open(url, '_blank');
  setTimeout(() => {
    if (newTab && newTab.focus) {
      newTab.focus();
    }
  }, 250);
}