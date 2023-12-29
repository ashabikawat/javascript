function stringHandsOn() {
  var givenString = "  Hey you are doing good, keep it up   ";

  console.log("======================= Step 01 =======================");
  console.log(`${givenString}`);

  console.log("======================= Step 02 =======================");
  console.log(`Length of the given string is ${givenString.length}`);

  console.log("======================= Step 03 =======================");
  var removedSpaces = givenString.trim();
  console.log(
    `The updated string is ${removedSpaces} and its length is ${removedSpaces.length}`
  );

  console.log("======================= Step 04 =======================");
  console.log(
    `Total number of spaces removed is ${
      givenString.length - removedSpaces.length
    }`
  );

  console.log("======================= Step 05 =======================");
  console.log(`First letter of the given string is ${removedSpaces.charAt(0)}`);
  console.log(
    `Last letter of the given string is ${removedSpaces.charAt(
      removedSpaces.length - 1
    )}`
  );

  console.log("======================= Step 06 =======================");
  console.log(
    `Total words present in the given string is ${
      removedSpaces.split(" ").length
    }`
  );

  console.log("======================= Step 07 =======================");
  console.log(
    `Index of the letter good from the given string is ${removedSpaces.indexOf(
      "good"
    )}`
  );

  console.log("======================= Step 08 =======================");
  console.log(
    `The substring of the given string is ${removedSpaces.substring(
      22,
      removedSpaces.length - 1
    )}`
  );

  console.log("======================= Step 09 =======================");
  console.log(
    `Is the string ends with "up" => ${removedSpaces.endsWith("up")}`
  );

  console.log("======================= Step 10 =======================");
  console.log(
    `Is the string starts with "Hey" => ${removedSpaces.startsWith("Hey")}`
  );
}

stringHandsOn();
