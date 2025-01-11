export const updateBlockSize = (
  setBlockSize: React.Dispatch<React.SetStateAction<number>>,
  setBlockMargin: React.Dispatch<React.SetStateAction<number>>
) => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 500) {
    setBlockSize(screenWidth / 100);
  } else if (screenWidth >= 500 && screenWidth < 768) {
    setBlockSize(6);
    setBlockMargin(3);
  } else if (screenWidth >= 768 && screenWidth < 992) {
    setBlockSize(10);
  } else if (screenWidth >= 992 && screenWidth < 1200) {
    setBlockSize(14);
  } else {
    setBlockMargin(8);
  }
};
