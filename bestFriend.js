const friends = [
  "Anik",
  "Rashidul Hasan Setu",
  "Raihan",
  "Samrat",
  "Fahima Khan",
  "Rony",
  "Sazzad",
  "Sagar",
  "Jebi",
  "Tareq",
  "Shawon",
  "Khalid hasan",
];

function bestFriend(arr) {
  let largeName = "";
  for (const friend of arr) {
    // console.log(friend);
    if (friend.length > largeName.length) {
      largeName = friend;
    }
  }
  return largeName;
}

console.log(bestFriend(friends));
