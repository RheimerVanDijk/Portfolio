function ScrollToPage(step: number) {
  let windowHeight = window.innerHeight;

  let scrollToHeight = windowHeight * step;

  window.scroll({
    top: scrollToHeight,
    left: 0,
    behavior: 'smooth',
  });
}

export default ScrollToPage;
