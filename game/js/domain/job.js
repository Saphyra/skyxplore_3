function Job(data, toDo){
    /*Munka végzéséhez szükséges információkat tartalmazó objektum
        - data: A munkavégzéshez szükséges adatok
        - specs / done: A munkavégzés. (A Worker hívja a megfelelõ feltételek teljesítésekor)
    */
    this.data = data;
    this.done = toDo;
}