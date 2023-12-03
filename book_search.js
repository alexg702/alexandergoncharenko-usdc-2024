/**
* RECOMMENDATION
*
* To test your code, you should open "tester.html" in a web browser.
* You can then use the "Developer Tools" to see the JavaScript console.
* There, you will see the results unit test execution. You are welcome
* to run the code any way you like, but this is similar to how we will
* run your code submission.
*
* The Developer Tools in Chrome are available under the "..." menu,
* futher hidden under the option "More Tools." In Firefox, they are
* under the hamburger (three horizontal lines), also hidden under "More Tools."
*/


/**
* Searches for matches in scanned text.
* @param {string} searchTerm - The word or term we're searching for.
* @param {JSON} scannedTextObj - A JSON object representing the scanned text.
* @returns {JSON} - Search results.
* */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
   /** You will need to implement your search and
    * return the appropriate object here. */


   var result = {
       "SearchTerm": "",
       "Results": []
   };


   //Loop thru the object
   for (let scannedText of scannedTextObj) {
       //Loop thru the content
       for( let content of scannedText['Content']){
           //Check if the text comes in between spaces or ends with the text
           if (content['Text'].includes(" " + searchTerm + " ") || content['Text'].endsWith(" " + searchTerm)){

               //push to results if verified
               result['Results'].push({
                   "ISBN": scannedText['ISBN'],
                   "Page": content['Page'],
                   "Line": content['Line']
               })
           }
       }
   }

   //Set the search term
   result['SearchTerm'] = searchTerm
  
   return result;
}


/** Example input object. */
const twentyLeaguesIn = [
   {
       "Title": "Twenty Thousand Leagues Under the Sea",
       "ISBN": "9780000528531",
       "Content": [
           {
               "Page": 31,
               "Line": 8,
               "Text": "now simply went on by her own momentum.  The dark-"
           },
           {
               "Page": 31,
               "Line": 9,
               "Text": "ness was then profound; and however good the Canadian\'s"
           },
           {
               "Page": 31,
               "Line": 10,
               "Text": "eyes were, I asked myself how he had managed to see, and"
           }
       ]
   }
]
  
/** Example output object */
const twentyLeaguesOut = {
   "SearchTerm": "the",
   "Results": [
       {
           "ISBN": "9780000528531",
           "Page": 31,
           "Line": 9
       }
   ]
}


/*
_   _ _   _ ___ _____   _____ _____ ____ _____ ____ 
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___|
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
\___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/
                                                    
*/


/* We have provided two unit tests. They're really just `if` statements that
* output to the console. We've provided two tests as examples, and
* they should pass with a correct implementation of `findSearchTermInBooks`.
*
* Please add your unit tests below.
* */


/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
   console.log("PASS: Test 1");
} else {
   console.log("FAIL: Test 1");
   console.log("Expected:", twentyLeaguesOut);
   console.log("Received:", test1result);
}


/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
   console.log("PASS: Test 2");
} else {
   console.log("FAIL: Test 2");
   console.log("Expected:", twentyLeaguesOut.Results.length);
   console.log("Received:", test2result.Results.length);
}


/** Example input object. */
const sherlockIn = [
   {
       "Title": "A Study in Scarlet",
       "ISBN": "1599866749",
       "Content": [
           {
               "Page": 28,
               "Line": 5,
               "Text": "And holmes asked his friend about the friend"
           },
           {
               "Page": 29,
               "Line": 5,
               "Text": "Moriarty was astonished"
           },
           {
               "Page": 39,
               "Line": 3,
               "Text": "and then today"
           }
       ]
   }
]
  
/** Example output object */
const sherlockOut = {
   "SearchTerm": "the",
   "Results": [
       {
           "ISBN": "1599866749",
           "Page": 31,
           "Line": 9
       }
   ]
}






const test3result = findSearchTermInBooks("the", sherlockIn);
if (test3result.Results.length == 1 && test3result['Results'][0]['ISBN'] == "1599866749") {
   console.log("PASS: Test 3");
} else {
   console.log("FAIL: Test 3");
   console.log("Expected:", sherlockOut.Results.length);
   console.log("Received:", sherlockOut.Results.length);
}


const sherlockOut2 = {
   "SearchTerm": "also",
   "Results": [
      
   ]
}






const test4result = findSearchTermInBooks("also", sherlockIn);
if (test4result.Results.length == 0 && test4result.SearchTerm == "also") {
   console.log("PASS: Test 4");
} else {
   console.log("FAIL: Test 4");
   console.log("Expected:", sherlockOut2.Results.length);
   console.log("Received:", sherlockOut2.Results.length);
}








const test5result = findSearchTermInBooks("His", sherlockIn);
if (test5result.Results.length == 0 && test5result.SearchTerm == "His") {
   console.log("PASS: Test 5");
} else {
   console.log("FAIL: Test 5");
   console.log("Expected:", sherlockOut2.Results.length);
   console.log("Received:", sherlockOut2.Results.length);
}


const test6result = findSearchTermInBooks("his", sherlockIn);
if (test6result.Results.length == 1 && test6result.SearchTerm == "his") {
   console.log("PASS: Test 6");
} else {
   console.log("FAIL: Test 6");
   console.log("Expected:", 1);
   console.log("Received:", 1);
}





