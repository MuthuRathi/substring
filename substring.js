function isSubString(str, substr) {
    
    for (var i = 0; i < str.length; i++) {

        
        for (var j = 0; j < substr.length; j++) {

            if (str[i + j] != substr[j] ) {
                break;
            }
        }

        if (j == substr.length)
            return true;
    }

    return false;
}