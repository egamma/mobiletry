function insert(item, user, request) {
    //console.log(item);
    item.text =  item.text + " -- approved";
    request.execute();
}