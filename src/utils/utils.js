class Utils{
  /**
   * merge 2 array which require 2 input and output in array of objects with key and value inside object
   * @param {*} columns is array will become object key in output
   * @param {*} rows is array will become object value in output
   */
  twoArrayMerge(columns, rows){
    let keys = columns,values = rows,finalarray = [];
    values.forEach((data,index) =>{
        var objJSON = {};
        for (let i = 0; i < keys.length; i++) {
            objJSON[keys[i]] = data[i];
            }
        finalarray.push(objJSON);  
    });
    return (
      finalarray
    )
  }
}

export default Utils