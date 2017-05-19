export default (key,target) => {
  var values = [];
  if(!target){
    target = location.href;
  }

  key = key.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");

  var pattern = key + '=([^&#]+)';
  var o_reg = new RegExp(pattern,'ig');
  while(true){
    var matches = o_reg.exec(target);
    if(matches && matches[1]){
      values.push(matches[1]);
    }else{
      break;
    }
  }

  return values;
}