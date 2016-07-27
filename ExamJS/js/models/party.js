//TODO: Implement party module

var app = app || {};

var Party = (function (scope) {
    function Party(param){
        Event.call(this,param);
        this.setIsCatered(param.isCatered);
        this.setIsBirthday(param.isBirthday);
        this.setOrganiser(param.organiser);
    }
    Party.prototype.setIsCatered = function(catered){
        if(Boolean(catered)){
            this._isCatered = catered;
        }
    };
    Party.prototype.getIsCatered = function(){
        return this._isBirthday;
    }
    Party.prototype.setIsBirthday  = function(isBirthday){
        if(Boolean(isBirthday)){
            this._isBirthday = isBirthday;
        }
    };
    Party.prototype.getBirthday = function(){
        return this._isBirthday;
    };
    Party.prototype.setOrganiser = function(organiser){
      if(organiser instanceof Employee){
          this._organiser = organiser;
      }
    };
    Party.prototype.getOrganiser = function(){
        return this._organiser
    };
    Party.extends(event);
    scope._party = Party;
    scope.party = function(param){
        return new Party(param);
    }
}(app));
