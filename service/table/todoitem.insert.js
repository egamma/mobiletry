function insert(item, user, request) {
    //console.log(item);
    item.text =  item.text + "checked by Monaco enriched insert script";
    request.execute();

}