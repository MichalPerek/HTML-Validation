let startTagRegex = /^(<\w*>)?/;
let endTagRegex = /(<\/\w*>)?$/;

let startTagsArray = [];
let endTagsArray = [];

export function isValidHtml(string) {
  let result;
  while (string.length > 0) {
    string = takeOuterTextOff(string);
    string = takeOuterTagsOff(string);

    result = compareTagArrays(startTagsArray, endTagsArray);
  }

  // console.log("start tag array");
  // console.log(startTagsArray);
  // console.log("end tags array: ");
  // console.log(endTagsArray);

  clearArray(startTagsArray);
  clearArray(endTagsArray);
  return result;
}

function takeOuterTextOff(string) {
  return string.replace(/^[^<>]*/, "").replace(/[^<>]*$/, "");
}

function takeOuterTagsOff(string) {
  let startTag;
  let endTag;

  let stringtemp1;
  let stringtemp2;

  stringtemp1 = string.replace(startTagRegex, "");
  startTag = string.replace(stringtemp1, "");
  // console.log("start tag" + startTag);

  string = stringtemp1;
  // console.log("updated string: " + string);

  stringtemp2 = string.replace(endTagRegex, "");
  endTag = string.replace(stringtemp2, "");
  // console.log("end tag" + endTag);

  string = stringtemp2;
  // console.log("updated string: " + string);

  if (startTag != "") {
    startTagsArray.push(startTag);
  }

  endTag = removeSlash(endTag);

  if (endTag != "") {
    endTagsArray.push(endTag);
  }

  return string;
}

function compareTagArrays(startArray, endArray) {
  let length1 = startArray.length;
  let length2 = endArray.length;

  let result;

  if (length1 === length2) {
    for (let i = 0; i < length1; i++) {
      if (startArray[i] != endArray[i]) {
        result = false;
      } else {
        result = true;
      }
    }
  } else {
    result = false;
  }

  return result;
}

function removeSlash(string) {
  return string.replace(/\//g, "");
}

function clearArray(array) {
  while (array.length > 0) {
    array.pop();
  }
}
