function ElementManipulator(parent){
    const domElementCreator = parent;
    
    this.removeClassesContains = function removeClassesContains(element, className){
        //Eltávolítja az elemről azokat az osztályokat, melyek tartalmazzák a className stringet.
        try{
            const removableClasses = [];
            //Eltávolítandó osztálynevek gyűjtése
            for(let index = 0; index < element.classList.length; index++){
                if(element.classList[index].indexOf(className) > -1){
                    removableClasses.push(element.classList[index])
                }
            }
            
            //Osztálynevek eltávolítása
            for(let rIndex in removableClasses){
                removableClassName = removableClasses[rIndex]
                element.classList.remove(removableClassName);
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
    
    this.convertElementToButton = function convertElementToButton(element, action, changeBorder){
        /*Gombbá alakítja a megadott elemet.
            @element: Az átalakítandó elem
            @action: Gombnyomásra futtatandó művelet
            @changeBorder: Ha igaz, a gombra vonatkozó fehér/piros színek lépnek életbe
        */
        try{
            if(changeBorder === undefined){
                changeBorder = false;
            }
            
            element.classList.add("cursorpointer");
            if(changeBorder === true){
                domElementCreator.removeClassesContains(element, "border");
                element.classList.add("border2px");
                element.classList.add("bordercolor255");
                element.classList.add("borderridge");
                
                $(element).hover(
                    function(){
                        domElementCreator.removeClassesContains(element, "bordercolor");
                        element.classList.add("bordercolorred");
                    },
                    function(){
                        domElementCreator.removeClassesContains(element, "bordercolor");
                        element.classList.add("bordercolor255");
                    }
                );
            }
            
            
            element.onclick = action;
            
            return element;
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message, "error");
        }
    }
}