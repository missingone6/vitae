export default (url: string): boolean => {
  var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  var objExp = new RegExp(Expression);
  if (objExp.test(url) == true) {
    return true;
  } else {
    return false;
  }
}