const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

class Database {
     
    constructor(){
        this.adapter = new FileSync('db.json');
        this.db = low(this.adapter);        
    }

    get(vaId) {
        return this.db.get('quartieri').find({id:parseInt(vaId)}).value();
    } 

    getAll() {
        return this.db.get('quartieri').value();
    } 
    /*
    add(vaRegione){
        try{
            this.db.get('regioni').push(vaRegione).write();
            return "ok";
        } catch(e){
            return e;
        }
    }

    delete(vaID){
        try{
            this.db.get('regioni').remove({"id": parseInt(vaID)}).write();
            return "ok";
        } catch(e){
            return e;
        }
    }    
    */
}

module.exports = Database;