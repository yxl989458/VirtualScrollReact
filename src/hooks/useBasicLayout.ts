
export function useBasicLayout() {
  const mobileList = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  const isMobile = mobileList?.length ? true : false
  console.log(isMobile);

  return { isMobile }
}
