const widthButton = parseInt(((window.innerWidth / 100) * 30).toFixed(10));

function scrollToItem(item: number, scroll: 'auto' | 'smooth' | undefined) {
  console.log(widthButton * (item - 1));

  document.querySelector('.navPageContainer')?.scroll({
    top: 0,
    left: widthButton * (item - 1),
    behavior: scroll,
  });
}

export default scrollToItem;
