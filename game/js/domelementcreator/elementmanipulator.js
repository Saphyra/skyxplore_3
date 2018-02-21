function ElementManipulator(){
    this.removeClassesContains = function removeClassesContains(element, className){
        try{
            const removableClasses = [];
            for(let index = 0; index < element.classList.length; index++){
                if(element.classList[index].indexOf(className) > -1){
                    removableClasses.push(element.classList[index])
                }
            }
            
            for(let rIndex in removableClasses){
                removableClassName = removableClasses[rIndex]
                element.classList.remove(removableClassName);
            }
        }catch(err){
            log(arguments.callee.name + " - " + err.name + ": " + err.message);
        }
    }
}