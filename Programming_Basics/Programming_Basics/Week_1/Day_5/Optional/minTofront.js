function mintofront(arr){
    var indexmin=0;
    for(var i=0;i<arr.length;i++){
        if(arr[indexmin]>arr[i]){
            indexmin=i;
            
        }
    }
    var min=arr[indexmin];
    for(i=indexmin;i>0;i--){
        arr[i]=arr[i-1];

    }
    arr[0]=min;
    return arr;
}