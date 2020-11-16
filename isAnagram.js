//return true if strings are anagrams of each other

const isAnagram = (str1, str2) => {
    str1 = str1.replace(/[^\w]/g, "").toLowerCase()
    str2 = str2.replace(/[^\w]/g, "").toLowerCase()
    if(str1.length !== str2.length) return false;

    const tracker1 = {}
    const tracker2 = {}
    for(let i= 0; i < str1.length; ++i){
      tracker1[str1[i]] = tracker1[str1[i]] + 1 || 1
      tracker2[str2[i]] = tracker2[str2[i]] + 1 || 1
    }
    for(let key in tracker1){
      if(tracker1[key] !== tracker2[key]) return false;
    }
    return true;
  }