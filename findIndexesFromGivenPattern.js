function findIndex(str,pttr){
    // we convert to a regexp the given pattern
    const regexp = new RegExp(pttr,'g');
    // initialize match variable for the while loop, this will hold every coincidence find by the regex.exec function
    let match={};
    let indexes=[];

    while ((match = regexp.exec(str)) !== null) {
        indexes.push(match.index);
    }
    return indexes;
}

console.log(findIndex("carlos carlos","rl"));