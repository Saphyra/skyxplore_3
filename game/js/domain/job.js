function Job(data, toDo){
    /*Munka v�gz�s�hez sz�ks�ges inform�ci�kat tartalmaz� objektum
        - data: A munkav�gz�shez sz�ks�ges adatok
        - specs / done: A munkav�gz�s. (A Worker h�vja a megfelel� felt�telek teljes�t�sekor)
    */
    this.data = data;
    this.done = toDo;
}