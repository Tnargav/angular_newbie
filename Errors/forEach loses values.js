// Why using some this.selectedId loses value?
this.getIndex = function() {
	var index = -1;

	this.Albums.some(function(value, key){
		if(value.Id == this.selectedId){
			index = key;
		}
	}, this.selectedId);

	return index;
}

// But it works with for loop?
for (var I = 0; I < this.Albums.length; I += 1){
	if (this.Albums[I].Id == this.selectedId)
		index = I;
	}
return index;